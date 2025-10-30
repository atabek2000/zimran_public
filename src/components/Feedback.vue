<script setup>
import { reactive, computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
  fullName: '',
  email: '',
  linkedin: '',
  company: '',
  position: '',
})

const touched = reactive({
  fullName: false,
  email: false,
  linkedin: false,
  company: false,
  position: false,
})

const isSubmitting = ref(false)
const submitError = ref('')

const emailRegex = /^(?:[a-zA-Z0-9_'^&/+-])+(?:\.(?:[a-zA-Z0-9_'^&/+-])+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/

const errors = computed(() => {
  const e = {
    fullName: '',
    email: '',
    linkedin: '',
  }
  if (!form.fullName.trim()) e.fullName = 'Укажите имя и фамилию'
  if (!form.email.trim()) e.email = 'Укажите email'
  else if (!emailRegex.test(form.email)) e.email = 'Неверный формат email'
  if (form.linkedin && !/^https?:\/\//i.test(form.linkedin)) e.linkedin = 'Добавьте полный URL (https://...)'
  return e
})

const isValid = computed(() => !errors.value.fullName && !errors.value.email && !errors.value.linkedin)

async function handleSubmit() {
  touched.fullName = true
  touched.email = true
  touched.linkedin = true
  if (!isValid.value) return
  isSubmitting.value = true
  submitError.value = ''

  const apiUrl = (import.meta.env.VITE_API_URL || '').toString().replace(/\/$/, '') || 'https://example.com'
  const endpoint = `${apiUrl}/api/meetup/register`

    submitError.value = 'Успешно отправленно!'

    isSubmitting.value = false

//   try {
//     const res = await fetch(endpoint, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(form),
//     })
//     if (!res.ok) throw new Error('Request failed')
//     router.push('/result')
//   } catch (err) {
//     submitError.value = 'Не удалось отправить. Попробуйте позже.'
//   } finally {
//     isSubmitting.value = false
//   }
}
</script>

<template>
  <section class="relative " id="register">
      <div class=" bg-white rounded-xl p-6 md:p-10">
        <h3 class="text-[28px] md:text-[48px] font-medium text-center">Записаться на митап</h3>

        <form class="mt-6 space-y-4" @submit.prevent="handleSubmit">
          <div>
            <label class="block text-sm md:text-base font-medium">Как вас зовут?</label>
            <input
              v-model.trim="form.fullName"
              @blur="touched.fullName = true"
              type="text"
              placeholder="Введите ваше Имя и Фамилию"
              class="w-full rounded-xl border border-alto px-4 py-3 focus:outline-none focus:ring-2 focus:ring-royal-blue"
            />
            <p v-if="touched.fullName && errors.fullName" class="text-red-600 text-sm mt-1">{{ errors.fullName }}</p>
          </div>

          <div>
            <label class="block text-sm md:text-base font-medium">Email для подтверждения участия</label>
            <input
              v-model.trim="form.email"
              @blur="touched.email = true"
              type="email"
              placeholder="Введите ваш email"
              class="w-full rounded-xl border border-alto px-4 py-3 focus:outline-none focus:ring-2 focus:ring-royal-blue"
            />
            <p v-if="touched.email && errors.email" class="text-red-600 text-sm mt-1">{{ errors.email }}</p>
          </div>

          <div>
            <p class="text-sm md:text-base font-medium">Заполните следующие данные, чтобы мы узнали вас получше</p>
          </div>

          <div>
            <input
              v-model.trim="form.linkedin"
              @blur="touched.linkedin = true"
              type="url"
              placeholder="Ссылка на ваш Linkedin"
              class="w-full rounded-xl border border-alto px-4 py-3 focus:outline-none focus:ring-2 focus:ring-royal-blue"
            />
            <p v-if="touched.linkedin && errors.linkedin" class="text-red-600 text-sm mt-1">{{ errors.linkedin }}</p>
          </div>

          <input
            v-model.trim="form.company"
            type="text"
            placeholder="Место работы"
            class="w-full rounded-xl border border-alto px-4 py-3 focus:outline-none focus:ring-2 focus:ring-royal-blue"
          />

          <input
            v-model.trim="form.position"
            type="text"
            placeholder="Должность"
            class="w-full rounded-xl border border-alto px-4 py-3 focus:outline-none focus:ring-2 focus:ring-royal-blue"
          />

          <button
            type="submit"
            :disabled="!isValid || isSubmitting"
            class="w-full rounded-full bg-black text-concrete py-4 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-900 active:bg-neutral-800 transition"
          >
            {{ isSubmitting ? 'Отправка...' : 'ОСТАВИТЬ ЗАЯВКУ' }}
          </button>

          <p v-if="submitError" class="text-green-600 text-sm text-center">{{ submitError }}</p>
          <p class="text-center text-base  text-royal-blue">Нажимая кнопку Вы даете согласие на обработку персональных данных</p>
        </form>
      </div>
  </section>
</template>

<style scoped>
</style>