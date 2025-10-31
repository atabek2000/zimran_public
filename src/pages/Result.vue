<script setup>
</script>

<template>
  <section class=" h-[calc(100vh-196px)] md:h-[calc(100vh-188px)] flex flex-col items-center justify-center ">
    <h1 class=" text-2xl md:text-8xl font-medium md:font-bold text-center">Спасибо за регистрацию!</h1>
    <p class=" text-base md:text-2xl font-medium text-center mt-2 md:mt-6 text-dove-gray max-w-4xl">Письмо со статусом заявки и деталями придет на почту ближе к дате митапа. Stay tuned!    </p>
 
    <RouterLink
      to="/"
      class=" block mt-6 rounded-full bg-black py-4 px-3 text-base font-medium text-concrete text-center max-w-lg w-full  hover:bg-black/0 hover:ring-1 hover:ring-black hover:text-black transition-all duration-300"
    >
    ВЕРНУТЬСЯ НА ГЛАВНУЮ
  </RouterLink>

    <img src="@/assets/svg/zimran_success.svg" alt="zimran_success" class="fixed bottom-0 left-0 w-[200px] md:w-[400px]">
  </section>
  
</template>

<style scoped>
section {
  padding: 16px;
}
</style>


