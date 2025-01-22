<script setup lang="ts">
const slug = useRoute().params.slug as string;
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection("blog").path(`/blog/${slug}`).first();
});
</script>

<template>
  <!-- Render the blog post as Prose & Vue components -->
  <ContentRenderer
    v-if="post"
    :value="post"
    class="prose prose-slate mt-16 prose-pre:bg-[rgb(239,241,245)] prose-pre:text-[rgb(76,79,105)]"
    :prose="true"
  />
  <div v-else class="flex h-full flex-col items-center justify-center">
    <h1 class="font-mono text-8xl text-indigo-500">404</h1>
    <p class="text-4xl">No Post Found</p>
    <NuxtLink
      to="/blogs"
      class="mt-2 rounded-lg bg-indigo-500 px-4 py-2 text-white !no-underline shadow"
      >Go Back</NuxtLink
    >
  </div>
</template>
