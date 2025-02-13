<template>
  <nav
    class="absolute left-0 top-0 h-screen bg-black z-3 duration-600 transition-all ease-in-out"
    :class="isMenuOpen ? ' w-screen' : ' w-0 delay-0!'"
  >
    <div
      v-if="isMenuOpen"
      class="font-montreal-bold uppercase w-full h-full text-beige-100 flex flex-col items-center justify-between pb-8 pl-8 pt-32 pr-9 lg:pr-32"
    >
      <div
        class="w-full duration-500 transition-all delay-300"
        :class="isMenuOpen ? 'opacity-100' : 'opacity-0'"
      >
        <div class="w-full flex flex-col items-end">
          <NuxtLink
            id="contact"
            to="/contact"
            class="text-5xl sm:text-7xl lg:text-9xl pb-3 mt-8 lg:mt-0 transition"
            @mouseover="mouseOver('contact')"
            @mouseleave="mouseLeave"
          >
            Contact
          </NuxtLink>
          <div class="font-montreal-light text-xs sm:text-base">
            <a
              id="email"
              href="mailto:fridashlmn@gmail.com"
              target="_blank"
              class="mr-5"
              @mouseover="mouseOver('email')"
              @mouseleave="mouseLeave"
            >
              email
            </a>
            <a
              id="linkedin"
              href="https://www.linkedin.com/in/friederike-suhlmann/"
              target="_blank"
              class="mr-5"
              @click="toggleMenu"
              @mouseover="mouseOver('linkedin')"
              @mouseleave="mouseLeave"
            >
              linkedin
            </a>
            <a
              id="xing"
              href="https://www.xing.com/profile/Friederike_Suhlmann"
              target="_blank"
              @click="toggleMenu"
              @mouseover="mouseOver('xing')"
              @mouseleave="mouseLeave"
            >
              xing
            </a>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col sm:flex-row w-full justify-between transition-all delay-400"
        :class="
          isMenuOpen ? ' translate-y-0 opacity-100' : 'opacity-0 translate-y-5'
        "
      >
        <div class="flex flex-col">
          <NuxtLink
            id="portfolio"
            to="/portfolio"
            class="text-5xl sm:text-7xl lg:text-9xl"
            @mouseover="mouseOver('portfolio')"
            @mouseleave="mouseLeave"
          >
            portfolio
          </NuxtLink>
          <NuxtLink
            id="about"
            to="/about"
            class="text-5xl sm:text-7xl lg:text-9xl pb-3"
            @mouseover="mouseOver('about')"
            @mouseleave="mouseLeave"
          >
            about
          </NuxtLink>
          <NuxtLink
            id="impressum"
            to="/impressum"
            class="font-montreal-light"
            @mouseover="mouseOver('impressum')"
            @mouseleave="mouseLeave"
          >
            impressum
          </NuxtLink>
        </div>
        <div
          class="flex flex-col justify-end mb-12 text-xl sm:text-2xl lg:text-3xl text-right"
        >
          <NuxtLink
            id="gallery"
            to="/gallery"
            @mouseover="mouseOver('gallery')"
            @mouseleave="mouseLeave"
          >
            gallery
          </NuxtLink>
          <NuxtLink
            id="something"
            @mouseover="mouseOver('something')"
            @mouseleave="mouseLeave"
          >
            something else
          </NuxtLink>
          <a
            id="github"
            href="https://github.com/fridashlmn"
            target="_blank"
            @click="toggleMenu"
            @mouseover="mouseOver('github')"
            @mouseleave="mouseLeave"
          >
            github
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
interface Props {
  isMenuOpen: boolean
}
const props = defineProps<Props>()
const emit = defineEmits(['toggle-menu'])
const route = useRoute()

function toggleMenu(): void {
  emit('toggle-menu')
}

function mouseOver(id: string): void {
  let linkElements = document.getElementsByTagName('a')
  for (let i = 0; i < linkElements.length; i++) {
    if (linkElements[i].id != id) {
      linkElements[i].classList.add('hoverTransition')
    }
  }
}
function mouseLeave(): void {
  const linkElements = document.getElementsByTagName('a')
  for (let i = 0; i < linkElements.length; i++) {
    linkElements[i].classList.remove('hoverTransition')
  }
}

watch(route, () => {
  if (props.isMenuOpen) {
    toggleMenu()
  }
})
</script>
<style>
.hoverTransition {
  opacity: 25%;
  transition: all 0.6s cubic-bezier(0.24, 1, 0.52, 1);
}
</style>
