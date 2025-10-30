<script setup>
import { ref } from 'vue'

const faqs = [
  {
    q: 'Для кого этот митап?',
    a: 'Митап для продуктовых дизайнеров, лидов и продактов, которым интересно, как мы создаём и развиваем продукт'
  },
  {
    q: 'Сколько стоит участие?',
    a: 'Бесплатно по регистрации. Количество мест ограничено.'
  },
  {
    q: 'Будет ли блок для обсуждения и разбора вопросов?',
    a: 'Да. После каждого блока и во время нетворкинга будет Q&A, где мы ответим на ваши вопросы и обсудим отдельные ситуации из нашей практики.'
  },
  {
    q: 'Можно ли на месте обсудить карьерные возможности?',
    a: 'Да. На митапе будут HR и представители команд — можно пообщаться, задать вопросы о вакансиях и подаче, а также обсудить, как присоединиться к Zimran.'
  },
  {
    q: 'Можно ли прийти на митап без регистрации?',
    a: 'Нет. Участие только по предварительной регистрации.'
  },
  {
    q: 'Можно ли принять участие онлайн и будет ли запись?',
    a: 'Нет. Митап пройдёт в формате живого участия.'
  },
  {
    q: 'Когда будет обратная связь по заявке?',
    a: 'Подтверждение успешной регистрации мы вышлем ближе к дате.'
  },
  {
    q: 'Как связаться с организаторами?',
    a: 'Можно написать на почту: tech@zimran.io'
  }
]

 const openedSet = ref(new Set())
 const toggle = (idx) => {
   const next = new Set(openedSet.value)
   if (next.has(idx)) {
     next.delete(idx)
   } else {
     next.add(idx)
   }
   openedSet.value = next
 }
</script>

<template>
  <section id="faq" class="relative py-24 ">
 <img src="@/assets/svg/bg-extra.svg" alt="bg-extra" class="absolute top-0 left-0 right-0 md:right-auto select-none pointer-events-none" />
 <img src="@/assets/svg/bg-extra-bottom.svg" alt="bg-extra-bottom" class="absolute bottom-0 left-0 select-none pointer-events-none" />
    <div class="main-container grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div class=" mt-10 md:mt-[250px]">
        <img src="@/assets/svg/question.svg" alt="question" class="w-20 h-20">
        <h3 class=" text-[50px] md:text-[64px] leading-[1.05] font-medium uppercase text-royal-blue mt-4">
          ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
        </h3>
      </div>

      <div class="space-y-2 md:min-h-[950px]">
        <div
          v-for="(item, idx) in faqs"
          :key="item.q"
          class="border-b border-alto  overflow-hidden bg-white"
        >
          <button
            type="button"
            class="w-full flex items-center cursor-pointer justify-between gap-4 px-6 py-5 text-left"
            @click="toggle(idx)"
          >
            <span class="text-2xl font-medium">{{ item.q }}</span>
             <div class=" transition-all duration-300" :class="{'rotate-180': openedSet.has(idx)}" >

                 <img src="@/assets/svg/plus.svg" alt="plus" v-if="!openedSet.has(idx)" width="35" height="35" class=" min-w-[35px] min-h-[35px]">
                 <img src="@/assets/svg/minus.svg" alt="minus" v-else width="35" height="35" class=" min-w-[35px] min-h-[35px]">
            </div>
          </button>
          <transition name="faq-reveal">
             <div v-show="openedSet.has(idx)" class="px-6 pb-6 -mt-2">
              <p class="text-lg text-mid-gray font-normal" >{{ item.a }}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-reveal-enter-from,
.faq-reveal-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
.faq-reveal-enter-active,
.faq-reveal-leave-active {
  transition: all 160ms ease;
}

.bg-extra {
  background-image: url('@/assets/svg/bg-extra.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>