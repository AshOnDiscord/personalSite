<script setup lang="ts">
const { data } = await useAsyncData(() => queryContent("blog").find());
</script>

<template>
  <div>
    <h1 class="mb-2 text-2xl font-semibold">
      Blog Posts -
      <span>{{ data!.length }} Post{{ data!.length !== 1 ? "s" : "" }}</span>
    </h1>
    <p class="mb-6">
      All of my random blog posts about random topics I'm currently interested
      in.
    </p>

    <ul class="flex flex-col gap-8">
      <li v-for="post in data" :key="post['slug']">
        <NuxtLink :to="post._path!" class="group">
          <h1 class="font-semibold text-slate-800 group-hover:text-indigo-500">
            {{ post.title }}
          </h1>
          <p class="text-slate-700">{{ post["description"] }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
