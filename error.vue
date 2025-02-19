<template>
  <NuxtLayout>
    <div class="max-w-screen min-h-screen w-screen">
      <video
        muted
        autoplay
        loop
        src="~/assets/video/ocean.mp4"
        id="fullVid"
        class="object-cover absolute w-screen h-screen top-0 left-0 z-1"
      />
      <main
        class="flex flex-col items-center justify-center absolute w-screen h-screen top-0 left-0 z-2 text-beige-100"
      >
        <h1 class="font-eikoh text-[20rem]">404</h1>
        <NuxtLink
          to="/"
          class="font-montreal-bold tracking-widest hover:underline! hover:underline-offset-4"
        >
          GO BACK HOME
        </NuxtLink>
      </main>
    </div>
  </NuxtLayout>
</template>
<script lang="ts" setup></script>
