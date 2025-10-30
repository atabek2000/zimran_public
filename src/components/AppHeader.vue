<script setup>
import { RouterLink } from 'vue-router'
import logoUrl from '@/assets/svg/logo.svg?url'

import Feedback from '@/components/Feedback.vue'
import { ref } from 'vue'

const showRegister = ref(false)
const showMobileMenu = ref(false)
const openRegister = () => { showRegister.value = true }
const closeRegister = () => { showRegister.value = false }
const openMobileMenu = () => { showMobileMenu.value = true }
const closeMobileMenu = () => { showMobileMenu.value = false }
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

        <button type="button" class="md:hidden" @click="openMobileMenu" aria-label="Открыть меню">
          <img src="@/assets/svg/burger.svg" alt="burger" width="46" height="46">
        </button>
      </div>
    </div>

     <!-- Modal: Registration Form -->
  <transition name="fade">
    <div v-if="showRegister" class="fixed inset-0 z-50 flex items-start md:items-center justify-center p-3 md:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto" @click.self="closeRegister">
      <div class="relative w-full max-w-3xl">
        <Feedback @close="closeRegister" />
      </div>
    </div>
  </transition>

  <!-- Mobile Slideover Menu -->
  <div class="md:hidden">
    <!-- Overlay -->
    <div
      v-show="showMobileMenu"
      class="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px] transition-opacity"
      @click="closeMobileMenu"
    ></div>

    <!-- Panel -->
    <div
      class="fixed inset-y-0 right-0 z-50 w-full max-w-full bg-white shadow-xl transform transition-transform duration-300 ease-out flex flex-col"
      :class="showMobileMenu ? 'translate-x-0' : 'translate-x-full'"
      role="dialog"
      aria-modal="true"
    >
      <div class="flex items-center justify-between p-4 ">
        <RouterLink to="/" @click.native="closeMobileMenu" class="shrink-0">
          <img :src="logoUrl" alt="zimran" class="min-w-[170px] select-none" />
        </RouterLink>
        <button type="button" aria-label="Закрыть меню" @click="closeMobileMenu" class="w-10 h-10 rounded-full flex items-center justify-center text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200">
          <img src="@/assets/svg/x.svg" alt="x" width="46" height="46">
        </button>
      </div>

      <nav class="p-4 flex-1 text-3xl font-medium text-black">
        <a href="#about" @click="closeMobileMenu" class="block py-3 px-2 rounded hover:bg-neutral-100 active:bg-neutral-200 transition">О митапе</a>
        <a href="#who" @click="closeMobileMenu" class="block py-3 px-2 rounded hover:bg-neutral-100 active:bg-neutral-200 transition">Кто мы?</a>
        <a href="#program" @click="closeMobileMenu" class="block py-3 px-2 rounded hover:bg-neutral-100 active:bg-neutral-200 transition">Программа</a>
        <a href="#faq" @click="closeMobileMenu" class="block py-3 px-2 rounded hover:bg-neutral-100 active:bg-neutral-200 transition">FAQ</a>
        <a href="#footer" @click="closeMobileMenu" class="block py-3 px-2 rounded hover:bg-neutral-100 active:bg-neutral-200 transition">Контакты</a>
      </nav>

     
    </div>
  </div>

    
  </header>
  
</template>

