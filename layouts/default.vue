<template>
  <div class="min-h-screen">
    <nav class="border-b border-slate-200 px-4 py-3">
      <div class="flex justify-between max-w-prose mx-auto">
        <p>ashondiscord</p>
        <ul class="flex gap-4">
          <li v-for="route in $router.options.routes.toReversed()">
            <NuxtLink :to="route.path">{{ route.name }}</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
    <div class="px-4 py-3 flex justify-center">
      <main class="max-w-prose flex-1">
        <slot />
      </main>
    </div>
  </div>
</template>
