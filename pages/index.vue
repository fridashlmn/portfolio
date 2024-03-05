<template>
  <header class="absolute w-100vw h-100vh top-0 left-0">
    <!--    <div
      class="absolute w-100vw h-100vh top-0 left-0 flex flex-col items-center justify-center z-2 text-white"
    >
      <h1>frida shlmn</h1>
      <h2>frontend developer</h2>
      <h2>hamburg, germany</h2>
    </div>-->

    <video
      muted
      autoplay
      loop
      src="~/assets/video/smoke.mp4"
      id="fullVid"
      class="object-cover absolute w-100vw h-100vh top-0 left-0 z-1"
    />
  </header>
</template>
<script lang="ts" setup></script>
<script lang="ts">
export default {
  name: 'HomePage',
}
</script>
