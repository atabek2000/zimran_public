<script setup>
import AppHeader from '@/components/AppHeader.vue'
</script>

<template>
  <div class="">
    <AppHeader />
    <main class=" mt-[136px] md:mt-[156px]">
      <slot />
    </main>
  </div>
  
</template>

<style scoped>
</style>


