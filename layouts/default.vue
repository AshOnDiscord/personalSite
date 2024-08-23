<script setup lang="ts">
const links = [
  { to: "/", text: "Home" },
  { to: "/blog", text: "Blog" },
  { to: "/projects", text: "Projects" },
];

const socials = [
  {
    to: "https://github.com/AshOnDiscord",
    icon: "fa6-brands:github",
    name: "AshOnDiscord",
  },

  {
    to: "https://www.youtube.com/channel/UC9ZG0ecrPu7BnoI1zlAaleQ",
    icon: "fa6-brands:youtube",
    name: "@AshOnDiscord",
  },
  {
    to: "https://www.reddit.com/user/AshOnDiscord/",
    icon: "fa6-brands:reddit",
    name: "u/AshOnDiscord",
  },
  {
    to: "https://www.twitch.tv/ashondiscord",
    icon: "fa6-brands:twitch",
    name: "AshOnDiscord",
  },
  {
    to: "https://twitter.com/AshOnDiscord",
    icon: "fa6-brands:x-twitter",
    name: "@AshOnDiscord",
  },
  {
    to: "",
    icon: "fa6-brands:discord",
    name: "@ArchWiki",
  },
];
</script>

<template>
  <div class="grid min-h-screen grid-rows-[max-content,auto,max-content]">
    <header class="sticky mb-4 bg-white shadow">
      <NuxtLoadingIndicator />
      <div class="mx-auto flex w-[min(65ch,100vw)] gap-4 px-6 py-4">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="font-mediu hover:underline"
          :class="
            link.to === $route.path ? 'text-indigo-600' : 'text-slate-600'
          "
          :aria-current="link.to === $route.path ? 'page' : undefined"
        >
          {{ link.text }}
        </NuxtLink>
      </div>
    </header>
    <main class="mx-auto w-[min(65ch,100vw)] px-6">
      <slot />
    </main>
    <footer
      class="z-10 mx-auto mt-4 flex w-[min(65ch,100vw)] flex-col items-center justify-center gap-4 border-t border-slate-200 px-6 py-8"
    >
      <ul class="flex gap-4">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="font-medium hover:underline"
            :class="
              link.to === $route.path ? 'text-indigo-600' : 'text-slate-600'
            "
          >
            {{ link.text }}
          </NuxtLink>
        </li>
      </ul>
      <ul class="flex flex-wrap justify-center gap-4">
        <li v-for="social in socials" :key="social.to">
          <NuxtLink :to="social.to" class="group flex gap-2">
            <!-- <component
              style="fill: currentColor"
              class="h-6 w-6 text-indigo-500 group-hover:text-indigo-600"
              :is="social.icon"
            /> -->
            <Icon
              :name="social.icon"
              size="1.5rem"
              class="h-6 w-6 text-indigo-500 group-hover:text-indigo-600"
            />
            <span
              class="text-slate-700 group-hover:text-slate-800 group-hover:underline"
              >{{ social.name }}</span
            >
          </NuxtLink>
        </li>
      </ul>
      <p class="text-slate-600">© 2024 Ash. All rights reserved.</p>
    </footer>
  </div>
</template>
