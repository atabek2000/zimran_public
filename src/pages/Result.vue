<script setup>
</script>

<template>
  <section class=" h-[calc(100vh-100px)] flex flex-col items-center justify-center">
    <h1 class=" text-5xl md:text-8xl font-medium text-center">Спасибо за регистрацию!</h1>
    <p class=" text-xl md:text-2xl font-medium text-center mt-6 text-dove-gray max-w-4xl">Мы отправили Вам письмо, проверьте почту и подтвердите участие. Если письма нет, загляните в папку «Спам». До встречи на митапе! </p>

    <RouterLink
      to="/"
      class=" block mt-6 rounded-full bg-black py-4 px-3 text-base font-medium text-concrete text-center max-w-lg w-full hover:bg-neutral-900 active:bg-neutral-800 transition"
    >
    ПОДТВЕРДИТЬ УЧАСТИЕ ПО ПОЧТЕ
    </RouterLink>
  </section>
  
</template>

<style scoped>
section {
  padding: 16px;
}
</style>


