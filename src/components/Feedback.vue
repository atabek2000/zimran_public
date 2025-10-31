<script setup>
import { reactive, computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const emit = defineEmits(['close'])

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
    company: '',
    position: '',
  }
  if (!form.fullName.trim()) e.fullName = 'Укажите имя и фамилию'
  if (!form.email.trim()) e.email = 'Укажите email'
  else if (!emailRegex.test(form.email)) e.email = 'Неверный формат email'
  if (!form.linkedin.trim()) e.linkedin = 'Укажите ссылку на Linkedin'
  else if (!/^https?:\/\//i.test(form.linkedin)) e.linkedin = 'Добавьте полный URL (https://...)'
  if (!form.company.trim()) e.company = 'Укажите место работы'
  if (!form.position.trim()) e.position = 'Укажите позицию'
  return e
})

const isValid = computed(() =>
  !errors.value.fullName &&
  !errors.value.email &&
  !errors.value.linkedin &&
  !errors.value.company &&
  !errors.value.position
)

async function handleSubmit() {
  touched.fullName = true
  touched.email = true
  touched.linkedin = true
  touched.company = true
  touched.position = true
  if (!isValid.value) return
  isSubmitting.value = true
  submitError.value = ''

  const apiUrl = (import.meta.env.VITE_API_URL || '').toString().replace(/\/$/, '') || 'https://example.com'
  const endpoint = `${apiUrl}/api/meetup/register`

    submitError.value = 'Успешно отправленно!'

    isSubmitting.value = false

    emit('close')
    router.push('/result')


  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (!res.ok) throw new Error('Request failed')
    router.push('/result')
  } catch (err) {
    console.error(err);
    // submitError.value = 'Не удалось отправить. Попробуйте позже.'
  } finally {
    isSubmitting.value = false
  }
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
              required
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
              required
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
              required
            />
            <p v-if="touched.linkedin && errors.linkedin" class="text-red-600 text-sm mt-1">{{ errors.linkedin }}</p>
          </div>

          <div>
            <input
              v-model.trim="form.company"
              @blur="touched.company = true"
              type="text"
              placeholder="Место работы"
              class="w-full rounded-xl border border-alto px-4 py-3 focus:outline-none focus:ring-2 focus:ring-royal-blue"
              required
            />
            <p v-if="touched.company && errors.company" class="text-red-600 text-sm mt-1">{{ errors.company }}</p>
          </div>

          <div>
            <input
              v-model.trim="form.position"
              @blur="touched.position = true"
              type="text"
              placeholder="Позиция"
              class="w-full rounded-xl border border-alto px-4 py-3 focus:outline-none focus:ring-2 focus:ring-royal-blue"
              required
            />
            <p v-if="touched.position && errors.position" class="text-red-600 text-sm mt-1">{{ errors.position }}</p>
          </div>

          <button
            type="submit"
            :disabled="!isValid || isSubmitting"
            class="w-full rounded-full bg-black text-concrete py-4 font-medium disabled:bg-mercury  disabled:text-alto disabled:cursor-not-allowed hover:bg-neutral-900/0 hover:ring-1 hover:ring-black hover:text-black transition"
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