<script setup>
</script>

<template>
  <section class=" h-[calc(100vh-96px)] flex flex-col items-center justify-center ">
    <h1 class=" text-2xl md:text-8xl font-medium md:font-bold text-center">Спасибо за регистрацию!</h1>
    <p class=" text-base md:text-2xl font-medium text-center mt-2 md:mt-6 text-dove-gray max-w-4xl">Мы отправили Вам письмо, проверьте почту и подтвердите участие. Если письма нет, загляните в папку «Спам». До встречи на митапе! </p>

    <a
      href="https://mail.google.com/" target="_blank"
      class=" block mt-6 rounded-full bg-black py-4 px-3 text-base font-medium text-concrete text-center max-w-lg w-full  hover:bg-black/0 hover:ring-1 hover:ring-black hover:text-black transition-all duration-300"
    >
    ПОДТВЕРДИТЬ УЧАСТИЕ ПО ПОЧТЕ
  </a>

    <img src="@/assets/svg/zimran_success.svg" alt="zimran_success" class="absolute bottom-0 left-0 w-[200px] md:w-[400px]">
  </section>
  
</template>

<style scoped>
section {
  padding: 16px;
}
</style>


