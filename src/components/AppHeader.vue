<script setup>
import { RouterLink } from 'vue-router'
import logoUrl from '@/assets/svg/logo.svg?url'

import Feedback from '@/components/Feedback.vue'
import { ref } from 'vue'

const showRegister = ref(false)
const openRegister = () => { showRegister.value = true }
const closeRegister = () => { showRegister.value = false }
</script>

<template>
  <header class=" main-container">
    <div class="mx-auto max-w-7xl ">
      <div class="flex items-center gap-16 justify-between my-4 md:mt-8 md:mb-0">
        <!-- Left: Logo + badge -->
        <RouterLink to="/" class="">
          <img :src="logoUrl" alt="zimran" class="min-w-[170px] select-none" />
        </RouterLink>

        <!-- Center: Menu -->
        <nav class="hidden md:flex items-center w-full justify-around font-medium text-base text-dove-gray">
          <a href="#about" class="hover:text-neutral-900 transition">О митапе</a>
          <a href="#who" class="hover:text-neutral-900 transition">Кто мы?</a>
          <a href="#program" class="hover:text-neutral-900 transition">Программа</a>
          <a href="#faq" class="hover:text-neutral-900 transition">FAQ</a>
          <a href="#footer" class="hover:text-neutral-900 transition">Контакты</a>
        </nav>

        <!-- Right: CTA -->
        <div class="hidden md:flex items-center">
          <button
            type="button"
            @click="openRegister"
            class=" rounded-full bg-black px-6 py-3 text-base font-medium text-concrete whitespace-nowrap hover:bg-neutral-900 active:bg-neutral-800 transition"
          >
            Оставить заявку
          </button>
        </div>

        <img src="@/assets/svg/burger.svg" alt="burger" width="46" height="46" class="md:hidden">
      </div>
    </div>

     <!-- Modal: Registration Form -->
  <transition name="fade">
    <div v-if="showRegister" class="fixed inset-0 z-50 flex items-start md:items-center justify-center p-3 md:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto" @click.self="closeRegister">
      <div class="relative w-full max-w-3xl">
        <button type="button" @click="closeRegister" aria-label="Close" class="absolute -top-3 -right-3 md:-right-4 md:-top-4 z-10 bg-black text-concrete rounded-full w-10 h-10 flex items-center justify-center shadow-lg">×</button>
        <Feedback />
      </div>
    </div>
  </transition>

    
  </header>
  
</template>

