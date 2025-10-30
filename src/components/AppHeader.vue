<script setup>
import { RouterLink } from 'vue-router'
import logoUrl from '@/assets/svg/logo.svg?url'
</script>

<template>
  <header class=" main-container">
    <div class="mx-auto max-w-7xl px-4">
      <div class="flex items-center gap-16 justify-between mt-8">
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
          <a href="#contacts" class="hover:text-neutral-900 transition">Контакты</a>
        </nav>

        <!-- Right: CTA -->
        <div class="flex items-center">
          <RouterLink
            to="/result"
            class=" rounded-full bg-black px-6 py-3 text-base font-medium text-concrete whitespace-nowrap hover:bg-neutral-900 active:bg-neutral-800 transition"
          >
            Оставить заявку
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
  
</template>

