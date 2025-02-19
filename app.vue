<template>
  <div class="max-w-screen min-h-screen w-screen">
    <video
      muted
      autoplay
      loop
      src="~/assets/video/blueBlack.mp4"
      id="fullVid"
      class="object-cover absolute w-screen h-screen top-0 left-0 z-1"
    />
    <div class="flex">
      <NuxtLink
        to="/"
        class="absolute top-[1%] left-[3%] font-montreal-bold text-xl sm:text-2xl lg:text-3xl z-4 text-beige-100 mix-blend-difference"
        @click="isMenuOpen = false"
      >
        fridashlmn
      </NuxtLink>
      <div
        class="mix-blend-difference absolute uppercase h-14 w-14 top-[6%] right-[4%] z-4 font-montreal-bold text-xl sm:text-2xl lg:text-3xl rotate-[90deg]"
        @click="toggleMenu"
      >
        <button
          v-if="!isMenuOpen"
          class="text-beige-100 mix-blend-difference"
        >
          open
        </button>
        <button v-else class="text-beige-100">close</button>
      </div>
    </div>
    <SideBarMenu :isMenuOpen="isMenuOpen" @toggle-menu="toggleMenu" />
    <main class="absolute w-screen h-screen top-0 left-0 z-2">
      <div
        class="absolute left-[3%] top-[5%] w-[94%] h-[1px] bg-black z-3 opacity-45"
      />
      <div
        class="absolute right-[3%] top-[5%] w-[1px] h-[90%] bg-black z-3 opacity-45"
      />
      <NuxtPage
        class="absolute top-[5%] left-[3%] w-[94%] h-[90%] my-0 mx-auto"
      />
      <div
        class="absolute left-[3%] bottom-[5%] w-[94%] h-[1px] bg-black z-3 opacity-45"
      />
      <div
        class="absolute left-[3%] top-[5%] w-[1px] h-[90%] bg-black z-3 opacity-45"
      />
    </main>
  </div>
</template>
<script setup lang="ts">
import SideBarMenu from '~/components/SideBarMenu.vue'

useHead({
  title: 'fridashlmn',
  meta: [
    {
      name: 'description',
      content: 'frontend developer portfolio',
    },
  ],
  htmlAttrs: {
    lang: 'en',
  },
})

useSeoMeta({
  title: 'fridashlmn',
  ogTitle: 'fridashlmn',
  description: 'frontend developer portfolio',
  ogDescription: 'frontend developer portfolio',
})

const isMenuOpen = ref<boolean>(false)

function toggleMenu(): void {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
