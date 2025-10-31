<script setup>
import { ref } from 'vue'
import Faq from '@/components/faq.vue'
import Feedback from '@/components/Feedback.vue'

const showRegister = ref(false)
const openRegister = () => { showRegister.value = true }
const closeRegister = () => { showRegister.value = false }
</script>

<template>
  <section class=" mt-10 md:mt-24 relative ">
    <img src="@/assets/svg/left-zimran.svg" alt="left-zimran" class="absolute -top-10 left-0 hidden md:block"></img>
    <div class="main-container ">

        <div class="relative flex items-center justify-center gap-3 text-xs md:text-xl font-medium text-cornflower-blue p-2.5 border-2 border-dashed border-cornflower-blue md:w-fit mx-auto rounded-lg">
          <p class=" border border-cornflower-blue rounded-full px-2.5 md:px-4 py-2">
            29 ноября
          </p>
          <p class=" border border-cornflower-blue rounded-full px-2.5 md:px-4 py-2">
            10:30-16:00
          </p>
          <p class=" border border-cornflower-blue rounded-full px-2.5 md:px-4 py-2">
            Оффлайн Формат
          </p>
          <img src="@/assets/svg/chips.svg" alt="chips" class="absolute bottom-full left-0"></img>
        </div>
        <div class=" relative mt-20 md:mt-0">
    
          <h2 class=" text-[30px] leading-[30px] md:text-[90px] md:leading-[94px] font-bold text-center">Как через дизайн строить топ-1 продукты <span class=" whitespace-nowrap">в мире</span></h2>
          <p class=" text-center text-base md:text-2xl font-medium text-dove-gray mt-6">Разберём, как продуманный дизайн влияет на рост продукта — от первых гипотез до миллионов пользователей</p>
          <img src="/amplituda.png" alt="amplituda" class="absolute max-w-[284px] w-[170px] md:w-auto  -top-14 right-0"></img>
          <img src="@/assets/svg/left-zimran.svg" alt="left-zimran" class="absolute w-[30px] md:w-auto  -top-14 -left-4 md:hidden block"></img>
        </div>
          <div>
          <button
          type="button"
          @click="openRegister"
          class="block rounded-full bg-black md:w-lg mx-auto px-6 py-2 md:py-4 text-base text-center font-medium mt-8 text-concrete  hover:bg-black/0 hover:ring-1 hover:ring-black hover:text-black transition"
          >
          ЗАРЕГИСТРИРОВАТЬСЯ
        </button>
      </div>
    </div>

  </section>
  <section class="main-container mt-[100px] md:mt-[70px] relative ">


    <div class="items-wrap">
      <!-- <div class=""> -->
        <div class="items marquee  flex items-center gap-4 md:gap-10 justify-center md:-mx-40">
          <h2 class=" text-[50px] md:text-[175px] leading-[120%px] font-bold uppercase text-royal-blue">design</h2>
          <img src="@/assets/svg/zimran.svg" alt="zimran" class=" w-14 md:w-44" />
          <h2 class=" text-[50px] md:text-[175px] leading-[120%px] font-bold uppercase">meetup</h2>
        </div>
      <!-- </div> -->
      <!-- <div aria-hidden="true" class="items marquee"> -->
        <div  aria-hidden="true" class=" items marquee  flex items-center gap-4 md:gap-10 justify-center md:-mx-40">
          <h2 class=" text-[50px] md:text-[175px] leading-[120%px] font-bold uppercase text-royal-blue">design</h2>
          <img src="@/assets/svg/zimran.svg" alt="zimran" class=" w-14 md:w-44" />
          <h2 class=" text-[50px] md:text-[175px] leading-[120%px] font-bold uppercase">meetup</h2>
        </div>
      <!-- </div> -->
    </div>




    <!-- <div class="  flex items-center gap-4 md:gap-10 justify-center md:-mx-40">
      <h2 class=" text-[50px] md:text-[175px] leading-[120%px] font-bold uppercase text-royal-blue">design</h2>
      <img src="@/assets/svg/zimran.svg" alt="zimran" class=" w-14 md:w-44" />
      <h2 class=" text-[50px] md:text-[175px] leading-[120%px] font-bold uppercase">meetup</h2>
    </div> -->
    <img src="/figma-align.png" alt="figma-align" class="absolute max-w-[257px] w-[150px] md:w-auto -top-10 md:left-20 left-0" />
    <img src="/figma-jurttin.png" alt="figma-jurttin" class="absolute max-w-[190px] w-[100px] md:w-auto -top-10 md:right-20 right-10" />
    <img src="@/assets/svg/frame-border.svg" alt="frame-border" class="absolute w-[50px] md:w-auto  -top-20 md:-top-40 -right-5 md:-right-40 hidden md:block" />
    <img src="@/assets/svg/frame-border-small.svg" alt="frame-border-small"  class="absolute   -top-20 md:-top-40 -right-10   md:hidden" />

  </section>
 
  <section id="about" class=" mt-11 py-8 md:py-28 bg-image-gray relative">
    <div class="main-container">

      <p class=" text-2xl md:text-5xl font-bold text-center">Cобираем <span class=" text-royal-blue">
      <img src="@/assets/svg/zimran-heart.svg" alt="zimran-heart" class="absolute -top-10 right-0 w-[80px] md:w-auto" />
        дизайнеров, исследователей 
        и продуктовых лидеров,
      </span>
      чтобы обсудить, как дизайн влияет на успех продуктов</p>

      <div class=" mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-concrete">
        <div class=" py-8 px-6 rounded-3xl bg-card-1">
          <img src="@/assets/svg/card-1-icon.svg" alt="card-1-icon" width="115" height="115">
          <p class=" text-3xl font-bold md:font-medium mt-6">Knowledge sharing</p>
          <p class=" text-2xl font-medium mt-3">Разберём, как мы стали лидерами в одной из самых конкурентных ниш</p>
        </div>
        <div class=" py-8 px-6 rounded-3xl bg-card-2">
          <img src="@/assets/svg/card-2-icon.svg" alt="card-2-icon" width="115" height="115"></img>
          <p class=" text-3xl font-bold md:font-medium mt-6">Design Talk</p>
          <p class=" text-2xl font-medium mt-3">Живой диалог и обмен опытом, включая реальные кейсы и факапы</p>
        </div>
        <div class=" py-8 px-6 rounded-3xl bg-card-3">
          <img src="@/assets/svg/card-3-icon.svg" alt="card-3-icon" width="115" height="115"></img>
          <p class=" text-3xl font-medium mt-6">Networking</p>
          <p class=" text-2xl font-medium mt-3">Неформальное общение и новые знакомства </p>
        </div>
      </div>
    </div>

  </section>

  <section id="contacts" class=" bg-black  md:mt-0 relative">
    <div class="main-container text-concrete py-10 md:py-20">
      <div class=" w-fit">

      <h3 class=" text-5xl md:text-8xl font-medium  md:font-bold ">Где и Когда</h3>
      <p class=" text-xl md:text-2xl font-medium text-royal-blue mt-2">*Вход только по регистрации, места ограничены</p>

      <div class=" mt-12 space-y-3">
        <div class=" flex gap-6 items-center">
          <img src="@/assets/svg/check-icon.svg" alt="check-icon" width="55" height="55">
          <p class=" text-2xl md:text-4xl font-medium">29 ноября, 10:30</p>
        </div>
        <div class=" flex gap-6 items-center">
          <img src="@/assets/svg/check-icon.svg" alt="check-icon" width="55" height="55">
          <p class=" text-2xl md:text-4xl font-medium">Алматы, SmArt.Point</p>
        </div>
        <div class=" flex gap-6 items-center">
          <img src="@/assets/svg/check-icon.svg" alt="check-icon" width="55" height="55">
          <p class=" text-2xl md:text-4xl font-medium">Оффлайн</p>
        </div>
      </div>

      <button
            @click="openRegister"
            class=" block mt-12 rounded-full bg-royal-blue py-4 text-base font-medium w-full text-concrete text-center hover:bg-royal-blue/0 hover:ring-1 hover:ring-royal-blue hover:text-royal-blue transition"
          >
          ПРИНЯТЬ УЧАСТИЕ В МИТАПЕ
    </button>

    <img src="/meetup_phone.png" alt="meetup" class=" md:hidden mt-6 scale-110">
          
      </div>

    </div>

    <img src="/meetup.png" alt="meetup" class="absolute hidden md:block top-0 bottom-0 right-0 h-full">
    
  </section>

  <section id="who" class="main-container pt-8 md:pt-20 pb-10">
    <div class=" flex items-center gap-6 justify-center">
      <h2 class=" text-5xl md:text-8xl font-bold text-center">КТО МЫ</h2>
      <img src="@/assets/svg/idea.svg" alt="idea" width="78" height="78" class="w-[50px] md:w-[78px]">
    </div>

    <p class=" text-xl md:text-4xl font-medium text-center mt-6">Zimran — <span class=" text-royal-blue">people-powered system.</span>  Мы превращаем вклад каждого в новые возможности и создаём tech-продукты, где таланты растут и становятся лидерами.</p>

    <img src="/gallery.png" alt="gallery" class="mt-8 w-full hidden md:block">
    <img src="/gallery-small.png" alt="gallery-small" class="mt-8 w-full md:hidden">

    <div class="flex flex-col md:flex-row justify-between mt-10 gap-6 md:gap-0">

      <div class="">
        <p class=" text-2xl md:text-5xl font-medium md:font-bold">Хотите узнать нас лучше? </p>
        <p class=" text-2xl md:text-5xl font-medium md:font-bold ">Загляните к нам на сайт</p>
        <a
              href="https://zimran.io/"
              target="_blank"
              class=" block mt-6 rounded-full bg-royal-blue py-4 text-base font-medium text-concrete text-center max-w-lg hover:bg-royal-blue/0 hover:ring-1 hover:ring-royal-blue hover:text-royal-blue transition"
            >
            ПОСЕТИТЬ САЙТ
        </a>
      </div>
      <img src="@/assets/svg/zimran-text.svg" alt="zimran-text" class=" ">
    </div>

  </section>

  <section id="program" class=" text-concrete py-20 bg-program">
    <div class="main-container">
    <div class="flex items-center gap-6 justify-center">
      <h2 class=" text-5xl md:text-8xl font-medium md:font-bold text-center">ПРОГРАММА</h2>
      <img src="@/assets/svg/heart.svg" alt="heart"  class="w-[44px] md:w-[78px]">
    </div>

    <div class="relative mt-9">
      <div class=" w-1 top-0 bottom-0 absolute left-[30px] md:left-[35px] translate-x-[-50%] bg-concrete"></div>
      <div class=" flex gap-5 items-center">
        <div class=" program-ball text-xl font-medium text-black">10:30</div>
        <div class="flex items-center gap-1 ">
          <img src="@/assets/svg/pin.svg" alt="pin" width="24" height="24">
          <p class=" text-concrete text-xl md:text-2xl font-medium ">Welcome Coffee </p>
        </div>
      </div>
      
      <div class=" flex gap-5 items-start mt-8 ">
        <div class=" program-ball text-xl font-medium text-black">11:00</div>
        <div class=" p-4 md:p-6 rounded-3xl bg-concrete flex-1">
          <p class=" text-xl md:text-2xl font-medium text-black">Открытие</p>
          <div class=" mt-6 flex gap-3 md:gap-7">
            <video
              autoplay
              muted
              loop
              playsinline
              class=" w-[70px] h-[70px] md:w-[90px] md:h-[90px] object-cover rounded-2xl"
            >
              <source src="/video_mansur.mp4" type="video/mp4" />
            </video>
            <!-- <img src="/avatar.png" alt="avatar"  height="90" class=" max-h-[90px] w-auto"> -->
            <div >
              <p class=" text-lg md:text-2xl font-medium text-black">Абильмансур Омар</p>
              <p class=" text-xs md:text-base font-medium mt-1 text-dove-gray">Product Designer at Finelo</p>
              <a href="https://www.linkedin.com/in/mansur-omar-4559911a0/" target="_blank">
                <p class=" text-xs md:text-base font-medium mt-1 text-royal-blue flex items-center gap-1">
                  <img src="@/assets/svg/linked.svg" alt="linked" width="16" height="16">
                  Linkedin</p>
                </a>
            </div>
          </div>
        </div>
      </div>
      
      <div class=" flex gap-5 items-start mt-8 ">
        <div class=" program-ball text-xl font-medium text-black">11:15</div>
        <div class=" p-4 md:p-6 rounded-3xl bg-concrete flex-1">
          <p class=" text-xl md:text-2xl font-medium text-black">What 250,000+ Daily Users Teach You About Design?</p>
          <div class=" mt-6 flex gap-3 md:gap-7">
            <video
              autoplay
              muted
              loop
              playsinline
              class=" w-[70px] h-[70px] md:w-[90px] md:h-[90px] object-cover rounded-2xl"
            >
              <source src="/video_laura.mp4" type="video/mp4" />
            </video>
            <div >
              <p class=" text-xl md:text-2xl font-medium text-black">Лаура Рахимова</p>
              <p class=" text-xs md:text-base font-medium mt-1 text-dove-gray">Product Designer, Funnel Team</p>
              <a href="https://www.linkedin.com/in/laura-rakhimova-913810259/" target="_blank">
                <p class=" text-xs md:text-base font-medium mt-1 text-royal-blue flex items-center gap-1">
                <img src="@/assets/svg/linked.svg" alt="linked" width="16" height="16">
                Linkedin</p>
                </a>
            </div>
          </div>
        </div>
      </div>

      <div class=" flex gap-5 items-center mt-8">
        <div class=" program-ball text-xl font-medium text-black">11:45</div>
        <div class="flex items-center gap-1 ">
          <img src="@/assets/svg/pin.svg" alt="pin" width="24" height="24">
          <p class=" text-concrete text-xl md:text-2xl font-medium ">Break </p>
        </div>
      </div>

      <div class=" flex gap-5 items-start mt-8 ">
        <div class=" program-ball text-xl font-medium text-black">12:00</div>
        <div class=" p-4 md:p-6 rounded-3xl bg-concrete flex-1">
          <p class=" text-xl md:text-2xl font-medium text-black">Как Мы Искали Идеальный Первый Опыт?</p>
          <div class=" mt-6 flex gap-3 md:gap-7">
            <video
              autoplay
              muted
              loop
              playsinline
              class=" w-[70px] h-[70px] md:w-[90px] md:h-[90px] object-cover rounded-2xl"
            >
              <source src="/video_mansur.mp4" type="video/mp4" />
            </video>
            <div >
              <p class=" text-xl md:text-2xl font-medium text-black">Абильмансур Омар</p>
              <p class=" text-xs md:text-base font-medium mt-1 text-dove-gray">Product Designer at Finelo</p>
              <a href="https://www.linkedin.com/in/mansur-omar-4559911a0/" target="_blank">
              <p class=" text-xs md:text-base font-medium mt-1 text-royal-blue flex items-center gap-1">
                  <img src="@/assets/svg/linked.svg" alt="linked" width="16" height="16">
                  Linkedin</p>
                </a>
            </div>
          </div>
        </div>
      </div>

      <div class=" flex gap-5 items-center mt-8">
        <div class=" program-ball text-xl font-medium text-black">12:30</div>
        <div class="flex items-center gap-1 ">
          <img src="@/assets/svg/pin.svg" alt="pin" width="24" height="24">
          <p class=" text-concrete text-xl md:text-2xl font-medium ">Break </p>
        </div>
      </div>

      <div class=" flex gap-5 items-start mt-8 ">
        <div class=" program-ball text-xl font-medium text-black">12:45</div>
        <div class=" p-4 md:p-6 rounded-3xl bg-concrete flex-1">
          <p class=" text-xl md:text-2xl font-medium text-black">Как Превратить Хаос Обучения в Понятный Путь?
          </p>
          <div class=" mt-6 flex gap-3 md:gap-7">
            <video
              autoplay
              muted
              loop
              playsinline
              class=" w-[70px] h-[70px] md:w-[90px] md:h-[90px] object-cover rounded-2xl"
            >
              <source src="/video_asia.mp4" type="video/mp4" />
            </video>
            <div >
              <p class=" text-xl md:text-2xl font-medium text-black">Асия Сарсен</p>
              <p class=" text-xs md:text-base font-medium mt-1 text-dove-gray">Product Designer at Finelo</p>
              <a href="https://www.linkedin.com/in/assiya-sarsen-5661a2336/" target="_blank">

                <p class=" text-xs md:text-base font-medium mt-1 text-royal-blue flex items-center gap-1">
                  <img src="@/assets/svg/linked.svg" alt="linked" width="16" height="16">
                  Linkedin</p>
                </a>
            </div>
          </div>
        </div>
      </div>

      <div class=" flex gap-5 items-center mt-8">
        <div class=" program-ball text-xl font-medium text-black">13:15</div>
        <div class="flex items-center gap-1 ">
          <img src="@/assets/svg/pin.svg" alt="pin" width="24" height="24">
          <p class=" text-concrete text-xl md:text-2xl font-medium ">Break </p>
        </div>
      </div>

      <div class=" flex gap-5 items-start mt-8 ">
        <div class=" program-ball text-xl font-medium text-black">13:30</div>
        <div class=" p-4 md:p-6 rounded-3xl bg-concrete flex-1">
          <p class=" text-xl md:text-2xl font-medium text-black">One to 50</p>
          <div class=" mt-6 flex gap-3 md:gap-7">
            <video
              autoplay
              muted
              loop
              playsinline
              class=" w-[70px] h-[70px] md:w-[90px] md:h-[90px] object-cover rounded-2xl"
            >
              <source src="/video_arman.mp4" type="video/mp4" />
            </video>
            <div >
              <p class=" text-xl md:text-2xl font-medium text-black">Арман Кубенов</p>
              <p class=" text-xs md:text-base font-medium mt-1 text-dove-gray">Product Designer at Coursiv</p>
              <a href="https://www.linkedin.com/in/arman-kubenov-6260b3a7/" target="_blank">

                <p class=" text-xs md:text-base font-medium mt-1 text-royal-blue flex items-center gap-1">
                  <img src="@/assets/svg/linked.svg" alt="linked" width="16" height="16">
                  Linkedin</p>
                </a>
            </div>
          </div>
          <div class=" mt-8 flex gap-3 md:gap-7">
            <video
              autoplay
              muted
              loop
              playsinline
              class=" w-[70px] h-[70px] md:w-[90px] md:h-[90px] object-cover rounded-2xl"
            >
              <source src="/video_alina.mp4" type="video/mp4" />
            </video>
            <div >
              <p class=" text-xl md:text-2xl font-medium text-black">Алина Шишкова</p>
              <p class=" text-xs md:text-base font-medium mt-1 text-dove-gray">Product Designer at Coursiv</p>
              <a href="https://www.linkedin.com/in/alina-shishkova-67b510278/" target="_blank">

                <p class=" text-xs md:text-base font-medium mt-1 text-royal-blue flex items-center gap-1">
                  <img src="@/assets/svg/linked.svg" alt="linked" width="16" height="16">
                  Linkedin</p>
                </a>
            </div>
          </div>
        </div>
      </div>

      <div class=" flex gap-5 items-center mt-8">
        <div class=" program-ball text-base font-medium text-black">14:00 <br />15:00</div>
        <div class="flex items-center gap-1 ">
          <img src="@/assets/svg/pin.svg" alt="pin" width="24" height="24">
          <p class=" text-concrete text-xl md:text-2xl font-medium "> Networking </p>
        </div>
      </div>

    </div>
  </div>
  </section>

  

  <section class="bg-black py-10 md:py-20 text-concrete relative overflow-hidden">
    <div class="main-container">
      <div class="flex flex-col md:flex-row justify-between mt-0 gap-6  ">

        <div class="">
        <p class=" text-3xl md:text-5xl font-medium md:font-bold">Количество мест ограничено — успей занять своё! </p>

        <button
              @click="openRegister"
              class=" block mt-6 rounded-full bg-royal-blue py-4 text-base font-medium text-concrete text-center w-full max-w-lg hover:bg-royal-blue/0 hover:ring-1 hover:ring-royal-blue hover:text-royal-blue transition"
            >
            ЗАБРОНИРОВАТЬ МЕСТО
            </button>
        </div>
      <img src="@/assets/svg/logo-white.svg" alt="logo-white" class=" w-3/4 md:w-auto mx-auto md:mx-0 ">
        <img src="@/assets/svg/zimran-bron-icon.svg" alt="zimran-bron-icon" class=" absolute top-0 md:-bottom-24 md:top-auto -right-10 md:-right-24 w-[100px] md:w-auto ">
      </div>
    </div>
  </section>

  <!-- <Feedback /> -->
  <Faq />
  
  <!-- Modal: Registration Form -->
  <transition name="fade">
    <div v-if="showRegister" class="fixed inset-0 z-50 flex items-start md:items-center justify-center p-3 md:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto" @click.self="closeRegister">
      <div class="relative w-full max-w-3xl">
        <Feedback @close="closeRegister" />
      </div>
    </div>
  </transition>
  <section id="footer" class="bg-black py-10 md:py-20 text-concrete relative">
    <div class=" main-container flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0">
      <div >
        <p class=" text-2xl font-medium">Адрес:</p>
        <p class=" mt-3 text-base font-medium">SmArt.Point, Байзакова 280, 1 этаж</p>
        <p class=" text-2xl font-medium mt-8">Время проведения:</p>
        <p class=" mt-3 text-base font-medium">29 ноября, 10:30</p>
      </div>
        <div class=" flex gap-8 ">
          <a href="https://zimran.io/" target="_blank">
            <img src="@/assets/svg/social/linked.svg" alt="linked" width="60" height="60">
          </a>
          <a href="mailto:tech@zimran.io" target="_blank">
            <img src="@/assets/svg/social/mail.svg" alt="mail" width="60" height="60">
          </a>
          <a href="https://www.instagram.com/zimran.team?igsh=d3lpN3Fqc2k3Mm96" target="_blank">
            <img src="@/assets/svg/social/insta.svg" alt="telegram" width="60" height="60">
          </a>
        </div>
    </div>
      <img src="@/assets/svg/zimran-footer.svg" alt="zimran-footer" class="w-full mt-10 md:mt-20">
  </section>
</template>


<style scoped>
.bg-image-gray {
  background-image: url('@/assets/svg/bg-gray.svg');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
}

.bg-card-1 {
  background-color: black;
  background-image: url('@/assets/svg/bg-card-1.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.bg-card-2 {
  background-color: #5B42DC;
  background-image: url('@/assets/svg/bg-card-2.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.bg-card-3 {
  background-color: black;
  background-image: url('@/assets/svg/bg-card-3.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.bg-program {
  background-color: #5B42DC;

  background-image: url('@/assets/svg/bg-program.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.program-ball {
  display: block;
  background-color: #F2F2F2;
  border-radius: 100%;
  width: 60px;
  max-width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}



.items-wrap {
  position: relative;
  display: flex;
  /* overflow: hidden; */
  user-select: none;
  gap: 20px;
}

.items {
  flex-shrink: 0;
  display: flex;
  gap: 20px;
  justify-content: space-around;
  min-width: 100%;
}

.marquee {
  animation: scroll 20s linear infinite;
}


@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - 20px));
  }
}

@media (min-width: 768px) {
  .program-ball {
    width: 70px;
    max-width: 70px;
    height: 70px;
  }

  .items-wrap {
    gap: 400px;
  }
}

</style>