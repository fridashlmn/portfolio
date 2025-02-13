<template>
  <div class="bg-beige-bg flex flex-col justify-between">
    <h1
      class="font-eiko uppercase text-3xl sm:text-5xl lg:text-7xl m-8 md:m-12 text-grey-900"
    >
      connect with me
    </h1>
    <div class="w-full uppercase p-4 md:p-8">
      <form
        v-if="!showSuccessMessage"
        class="flex flex-col w-full"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        method="POST"
        name="contact"
        @submit.prevent="handleSubmit"
      >
        <input name="form-name" type="hidden" value="contact" />
        <div class="relative w-full mb-10 text-xl md:text-3xl">
          <input
            type="text"
            name="name"
            required
            placeholder=""
            class="pt-3 pb-2 pl-3 block w-full px-0 mt-0 border-0 border-b-1 appearance-none focus:outline-none focus:ring-0 focus:border-black border-beige-100"
          />
          <label for="name" class="absolute duration-300 top-3">name</label>
        </div>
        <div class="relative w-full mb-10 text-xl md:text-3xl">
          <input
            type="email"
            name="email"
            required
            placeholder=""
            class="pt-3 pb-2 pl-3 block w-full px-0 mt-0 border-0 border-b-1 appearance-none focus:outline-none focus:ring-0 focus:border-black border-beige-100"
          />
          <label for="email" class="absolute duration-300 top-3">email</label>
        </div>
        <div class="relative w-full mb-10 text-xl md:text-3xl">
          <input
            type="text"
            name="message"
            required
            placeholder=""
            class="pt-3 pb-2 pl-3 block w-full px-0 mt-0 border-0 border-b-1 appearance-none focus:outline-none focus:ring-0 focus:border-black border-beige-100"
          />
          <label for="message" class="absolute duration-300 top-3">
            message
          </label>
        </div>
        <div
          class="flex flex-col sm:flex-row md:mt-12 justify-between items-start sm:items-center"
        >
          <label
            class="flex items-baseline w-[350px] pl-8 relative hover:opacity-100! text-grey-900"
          >
            <input
              id="agb"
              class="hidden checkboxInput"
              name="agb"
              required
              type="checkbox"
            />
            <div class="checkboxBox" />
            <span class="uppercase w-[350px] text-xs font-montreal-light">
              I consent for the information submitted above to be recorded and
              stored for the purposes of providing services relating to my
              inquiry. I agree that registration on or use of this site
              constitutes agreement to its User Agreement & Privacy Policy
            </span>
          </label>
          <button class="flex items-center cursor-pointer">
            <span
              class="text-xl md:text-3xl text-grey-900 font-montreal-bold uppercase"
            >
              send
            </span>
            <ArrowRight class="w-24 h-24" />
          </button>
        </div>
      </form>
      <div v-else class="text-3xl font-montreal-bold justify-self-end">
        thanks!
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ArrowRight from '~/assets/icons/arrow-right.svg?component'
const showSuccessMessage = ref<boolean>(false)

const handleSubmit = (event: Event) => {
  const myForm: HTMLFormElement = event.target as HTMLFormElement
  if (myForm) {
    const formData = new FormData(myForm)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => (showSuccessMessage.value = true))
      .catch((error) => alert(error))
  }
}
</script>
