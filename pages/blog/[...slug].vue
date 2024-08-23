<script setup lang="ts">
const route = useRoute();

const content = ref<HTMLElement | null>(null);
const percentage = ref(0);
const atTop = ref(true);

const scrollListener = () => {
  // 0 to 1 scroll/read percentage of the content
  percentage.value =
    (window.scrollY - content.value!.offsetTop) /
    (content.value!.scrollHeight - window.innerHeight);

  atTop.value = window.scrollY === 0;
};

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", scrollListener);
  scrollListener();
});
onUnmounted(() => {
  window.removeEventListener("scroll", scrollListener);
});

defineExpose({
  content,
});
</script>

<template>
  <main class="h-full">
    <ContentDoc>
      <template #default="{ doc }">
        <div class="fixed left-0 top-0 w-full">
          <Transition
            enter-from-class="opacity-0 transition-all ease"
            enter-to-class="opacity-100 transition-all ease"
            leave-from-class="opacity-100 transition-all ease"
            leave-to-class="opacity-0 transition-all ease"
          >
            <UProgress
              v-if="percentage > 0 && !atTop"
              :value="percentage * 100"
              color="indigo"
              :ui="{
                progress: {
                  rounded: 'rounded-none',
                  bar: 'rounded-none [&::-webkit-progress-value]:rounded-none [&::-moz-progress-bar]:rounded-none',
                },
              }"
            />
          </Transition>
        </div>
        <article ref="content">
          <ContentRenderer
            class="prose prose-slate prose-pre:bg-[rgb(239,241,245)] prose-pre:text-[rgb(76,79,105)]"
            :value="doc"
          />
        </article>
        <Transition
          enter-from-class="opacity-0 transition-all ease"
          enter-to-class="opacity-100 transition-all ease"
          leave-from-class="opacity-100 transition-all ease"
          leave-to-class="opacity-0 transition-all ease"
        >
          <button
            v-if="percentage > 0 && !atTop"
            class="aspect-1 fixed bottom-8 right-8 flex items-center justify-center rounded-full bg-white p-2 shadow-lg ring-1 ring-indigo-500"
            @click="scrollTop"
          >
            <Icon name="radix-icons:arrow-up" class="text-slate-600" />
          </button>
        </Transition>
      </template>
      <template #not-found>
        <main
          class="max-w-520px z-20 m-auto flex h-full flex-col items-center justify-center text-center"
        >
          <h1 class="sm:text-10xl mb-8 text-8xl font-medium">404</h1>
          <p
            class="mb-16 px-8 text-xl font-light leading-tight sm:px-0 sm:text-4xl"
          >
            Blog not found: {{ route.params["slug"]![0] }}
          </p>
          <NuxtLink
            to="/blog"
            class="gradient-border text-md cursor-pointer px-4 py-2 sm:px-6 sm:py-3 sm:text-xl"
          >
            Go back to list
          </NuxtLink>
          <div class="spotlight fixed left-0 right-0 z-10" />
        </main>
      </template>
    </ContentDoc>
  </main>
</template>

<style scoped>
.gradient-border {
  position: relative;
  border-radius: 0.5rem;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}
@media (prefers-color-scheme: light) {
  .gradient-border {
    background-color: rgba(255, 255, 255, 0.3);
  }
  .gradient-border::before {
    background: linear-gradient(
      90deg,
      #e2e2e2 0%,
      #e2e2e2 25%,
      #3b82f6 50%,
      #6366f1 75%,
      #d946ef 100%
    );
  }
}
@media (prefers-color-scheme: dark) {
  .gradient-border {
    background-color: rgba(20, 20, 20, 0.3);
  }
  .gradient-border::before {
    background: linear-gradient(
      90deg,
      #303030 0%,
      #303030 25%,
      #3b82f6 50%,
      #6366f1 75%,
      #d946ef 100%
    );
  }
}
.gradient-border::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 0.5rem;
  padding: 2px;
  width: 100%;
  background-size: 400% auto;
  opacity: 0.5;
  transition:
    background-position 0.3s ease-in-out,
    opacity 0.2s ease-in-out;
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
.gradient-border:hover::before {
  background-position: -50% 0;
  opacity: 1;
}

.spotlight {
  background: linear-gradient(45deg, #3b82f6 0%, #6366f1 50%, #d946ef 100%);
  filter: blur(20vh);
  height: 40vh;
  bottom: -30vh;
  opacity: 0.5;
}
</style>
