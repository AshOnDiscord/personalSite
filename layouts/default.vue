<template>
  <div class="min-h-screen">
    <nav class="border-b border-slate-200 px-4 py-3">
      <div class="mx-auto flex max-w-prose justify-between">
        <p>ashondiscord</p>
        <ul class="flex gap-4">
          <!-- Replace this with fixed routes later, this is just a quick lazy hack -->
          <li v-for="route in $router.options.routes.toReversed()">
            <NuxtLink :to="route.path">{{
              route.name === "index" ? "home" : route.name
            }}</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
    <div class="flex justify-center px-4 py-3">
      <main class="max-w-prose flex-1">
        <slot />
      </main>
    </div>
  </div>
</template>
