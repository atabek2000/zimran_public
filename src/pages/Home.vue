<script setup>
</script>

<template>
  <section class="mt-24 relative ">
    <img src="@/assets/svg/left-zimran.svg" alt="left-zimran" class="absolute -top-10 left-0"></img>
    <div class="main-container ">

        <div class="relative flex items-center justify-center gap-3 text-xl font-medium text-cornflower-blue p-2.5 border-2 border-dashed border-cornflower-blue w-fit mx-auto rounded-lg">
          <p class=" border border-cornflower-blue rounded-full px-4 py-2">
            29 ноября
          </p>
          <p class=" border border-cornflower-blue rounded-full px-4 py-2">
            10:30-16:00
          </p>
          <p class=" border border-cornflower-blue rounded-full px-4 py-2">
            Оффлайн Формат
          </p>
          <img src="@/assets/svg/chips.svg" alt="chips" class="absolute bottom-full left-0"></img>
        </div>
        <div class=" relative">
    
          <h2 class=" text-[90px] leading-[94px] font-medium text-center">Как через дизайн строить топ-1 продукты в мире</h2>
          <p class=" text-center text-2xl font-medium text-dove-gray mt-6">Поделимся экспертизой, как через дизайн строить продукты, <br /> которыми пользуются миллионы</p>
          <img src="@/assets/svg/amplituda.svg" alt="amplituda" class="absolute -top-14 right-0"></img>
        </div>
          <div>
            <RouterLink
          to="/result"
          class="block rounded-full bg-black w-lg mx-auto py-4 text-base text-center font-medium mt-8 text-concrete  hover:bg-neutral-900 active:bg-neutral-800 transition"
          >
          ЗАРЕГИСТРИРОВАТЬСЯ
        </RouterLink>
      </div>
    </div>

  </section>
  <section class="main-container mt-[70px] relative">
    <div class=" flex items-center gap-10 justify-center -mx-40">
      <h2 class=" text-[175px] leading-[120%px] font-medium uppercase text-royal-blue">design</h2>
      <img src="@/assets/svg/zimran.svg" alt="zimran" class=" w-44" />
      <h2 class=" text-[175px] leading-[120%px] font-medium uppercase">meetup</h2>
    </div>
    <img src="@/assets/svg/figma-align.svg" alt="figma-align" class="absolute -top-10 left-20" />
    <img src="@/assets/svg/figma-jurttin.svg" alt="figma-jurttin" class="absolute -top-10 right-20" />
    <img src="@/assets/svg/frame-border.svg" alt="frame-border" class="absolute -top-40 -right-5" />

  </section>
 
  <section class=" mt-11 py-28 bg-image-gray relative">
    <div class="main-container">

      <p class=" text-5xl font-medium text-center">Cобираем <span class=" text-royal-blue">
      <img src="@/assets/svg/zimran-heart.svg" alt="zimran-heart" class="absolute -top-10 right-0" />
        дизайнеров, исследователей 
        и продуктовых лидеров,
      </span>
      чтобы обсудить, как дизайн влияет на успех продуктов</p>

      <div class=" mt-12 grid grid-cols-3 gap-8 text-concrete">
        <div class=" py-8 px-6 rounded-3xl bg-card-1">
          <img src="@/assets/svg/card-1-icon.svg" alt="card-1-icon" width="115" height="115">
          <p class=" text-3xl font-medium mt-6">Knowledge sharing</p>
          <p class=" text-2xl font-medium mt-3">Разберём, как мы стали лидерами в одной из самых конкурентных ниш</p>
        </div>
        <div class=" py-8 px-6 rounded-3xl bg-card-2">
          <img src="@/assets/svg/card-2-icon.svg" alt="card-2-icon" width="115" height="115"></img>
          <p class=" text-3xl font-medium mt-6">Design Talk</p>
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

  <section class=" bg-black mt-11 relative">
    <div class="main-container text-concrete py-20">
      <div class=" w-fit">

      <h3 class=" text-8xl font-medium ">Где и Когда</h3>
      <p class=" text-2xl font-medium text-royal-blue mt-2">*Вход только по регистрации, места ограничены</p>

      <div class=" mt-12 space-y-3">
        <div class=" flex gap-6 items-center">
          <img src="@/assets/svg/check-icon.svg" alt="check-icon" width="55" height="55">
          <p class=" text-4xl font-medium">29 ноября, 10:30</p>
        </div>
        <div class=" flex gap-6 items-center">
          <img src="@/assets/svg/check-icon.svg" alt="check-icon" width="55" height="55">
          <p class=" text-4xl font-medium">Алматы, SmArt.Point</p>
        </div>
        <div class=" flex gap-6 items-center">
          <img src="@/assets/svg/check-icon.svg" alt="check-icon" width="55" height="55">
          <p class=" text-4xl font-medium">Оффлайн</p>
        </div>
      </div>

      <RouterLink
            to="/result"
            class=" block mt-12 rounded-full bg-royal-blue py-4 text-base font-medium text-concrete text-center hover:bg-neutral-900 active:bg-neutral-800 transition"
          >
          ПРИНЯТЬ УЧАСТИЕ В МИТАПЕ
          </RouterLink>
      </div>

    </div>

    <img src="/meetup.png" alt="meetup" class="absolute top-0 bottom-0 right-0 h-full">
    
  </section>

  <section class="main-container pt-20 pb-10">
    <div class=" flex items-center gap-6 justify-center">
      <h2 class=" text-8xl font-medium text-center">КТО МЫ</h2>
      <img src="@/assets/svg/idea.svg" alt="idea" width="78" height="78">
    </div>

    <p class=" text-4xl font-medium text-center mt-6">Zimran — <span class=" text-royal-blue">people-powered system.</span>  Мы создаём продукты и культуру для <span class=" text-royal-blue">«EXTRA людей»</span>, которые меняют мир</p>

    <img src="/gallery.png" alt="gallery" class="mt-8 w-full">

    <div class="flex justify-between mt-20">

      <div class="">
        <p class=" text-5xl font-medium">Хотите узнать нас лучше? </p>
        <p class=" text-5xl font-medium ">Загляните к нам на сайт</p>

      <RouterLink
            to="/result"
            class=" block mt-6 rounded-full bg-royal-blue py-4 text-base font-medium text-concrete text-center max-w-lg hover:bg-neutral-900 active:bg-neutral-800 transition"
          >
          ПОСЕТИТЬ САЙТ
          </RouterLink>
      </div>
      <img src="@/assets/svg/zimran-text.svg" alt="zimran-text" class=" ">
    </div>

  </section>

  <section class=" text-concrete py-20 bg-program">
    <div class="main-container">
    <div class="flex items-center gap-6 justify-center">
      <h2 class=" text-8xl font-medium text-center">ПРОГРАММА</h2>
      <img src="@/assets/svg/heart.svg" alt="heart" width="78" height="78">
    </div>

    <div class="relative mt-9">
      <div class=" w-1 top-0 bottom-0 absolute left-[35px] bg-concrete"></div>
      <div class=" flex gap-5 items-center">
        <div class=" program-ball text-xl font-medium text-black">10:30</div>
        <div class="flex items-center gap-1 ">
          <img src="@/assets/svg/pin.svg" alt="pin" width="24" height="24">
          <p class=" text-concrete text-2xl font-medium ">Welcome Coffee </p>
        </div>
      </div>
      
      <div class=" flex gap-5 items-start mt-8 ">
        <div class=" program-ball text-xl font-medium text-black">11:00</div>
        <div class=" p-6 rounded-3xl bg-concrete flex-1">
          <p class=" text-2xl font-medium text-black">Открытие</p>
          <div class=" mt-6 flex gap-7">
            <img src="/avatar.png" alt="avatar"  height="90" class=" max-h-[90px] w-auto">
            <div >
              <p class=" text-2xl font-medium text-black">Абильмансур Омар</p>
              <p class=" text-base font-medium mt-1 text-dove-gray">Product Designer at Finelo</p>
              <p class=" text-base font-medium mt-1 text-royal-blue flex items-center gap-1">
                <img src="@/assets/svg/linked.svg" alt="linked" width="16" height="16">
                Linkedin</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class=" flex gap-5 items-start mt-8 ">
        <div class=" program-ball text-xl font-medium text-black">11:15</div>
        <div class=" p-6 rounded-3xl bg-concrete flex-1">
          <p class=" text-2xl font-medium text-black">What 250,000+ Daily Users Teach You About Design?</p>
          <div class=" mt-6 flex gap-7">
            <img src="/avatar.png" alt="avatar"  height="90" class=" max-h-[90px] w-auto">
            <div >
              <p class=" text-2xl font-medium text-black">Лаура Рахимова</p>
              <p class=" text-base font-medium mt-1 text-dove-gray">Product Designer, Funnel Team</p>
              <p class=" text-base font-medium mt-1 text-royal-blue flex items-center gap-1">
                <img src="@/assets/svg/linked.svg" alt="linked" width="16" height="16">
                Linkedin</p>
            </div>
          </div>
        </div>
      </div>

      <div class=" flex gap-5 items-center mt-8">
        <div class=" program-ball text-xl font-medium text-black">11:45</div>
        <div class="flex items-center gap-1 ">
          <img src="@/assets/svg/pin.svg" alt="pin" width="24" height="24">
          <p class=" text-concrete text-2xl font-medium ">Break </p>
        </div>
      </div>

      <div class=" flex gap-5 items-start mt-8 ">
        <div class=" program-ball text-xl font-medium text-black">12:00</div>
        <div class=" p-6 rounded-3xl bg-concrete flex-1">
          <p class=" text-2xl font-medium text-black">Как мы искали идеальный первый опыт?</p>
          <div class=" mt-6 flex gap-7">
            <img src="/avatar.png" alt="avatar"  height="90" class=" max-h-[90px] w-auto">
            <div >
              <p class=" text-2xl font-medium text-black">Абильмансур Омар</p>
              <p class=" text-base font-medium mt-1 text-dove-gray">Product Designer at Finelo</p>
              <p class=" text-base font-medium mt-1 text-royal-blue flex items-center gap-1">
                <img src="@/assets/svg/linked.svg" alt="linked" width="16" height="16">
                Linkedin</p>
            </div>
          </div>
        </div>
      </div>

      <div class=" flex gap-5 items-center mt-8">
        <div class=" program-ball text-xl font-medium text-black">12:30</div>
        <div class="flex items-center gap-1 ">
          <img src="@/assets/svg/pin.svg" alt="pin" width="24" height="24">
          <p class=" text-concrete text-2xl font-medium ">Break </p>
        </div>
      </div>

      <div class=" flex gap-5 items-start mt-8 ">
        <div class=" program-ball text-xl font-medium text-black">12:45</div>
        <div class=" p-6 rounded-3xl bg-concrete flex-1">
          <p class=" text-2xl font-medium text-black">Learning Pathways</p>
          <div class=" mt-6 flex gap-7">
            <img src="/avatar.png" alt="avatar"  height="90" class=" max-h-[90px] w-auto">
            <div >
              <p class=" text-2xl font-medium text-black">Асия Сарсен</p>
              <p class=" text-base font-medium mt-1 text-dove-gray">Product Designer at Finelo</p>
              <p class=" text-base font-medium mt-1 text-royal-blue flex items-center gap-1">
                <img src="@/assets/svg/linked.svg" alt="linked" width="16" height="16">
                Linkedin</p>
            </div>
          </div>
        </div>
      </div>

      <div class=" flex gap-5 items-center mt-8">
        <div class=" program-ball text-xl font-medium text-black">13:15</div>
        <div class="flex items-center gap-1 ">
          <img src="@/assets/svg/pin.svg" alt="pin" width="24" height="24">
          <p class=" text-concrete text-2xl font-medium ">Break&Dinner </p>
        </div>
      </div>

      <div class=" flex gap-5 items-start mt-8 ">
        <div class=" program-ball text-xl font-medium text-black">13:30</div>
        <div class=" p-6 rounded-3xl bg-concrete flex-1">
          <p class=" text-2xl font-medium text-black">Habit Formation</p>
          <div class=" mt-6 flex gap-7">
            <img src="/avatar.png" alt="avatar"  height="90" class=" max-h-[90px] w-auto">
            <div >
              <p class=" text-2xl font-medium text-black">Арман Кубенов</p>
              <p class=" text-base font-medium mt-1 text-dove-gray">Product Designer at Coursiv</p>
              <p class=" text-base font-medium mt-1 text-royal-blue flex items-center gap-1">
                <img src="@/assets/svg/linked.svg" alt="linked" width="16" height="16">
                Linkedin</p>
            </div>
          </div>
          <div class=" mt-8 flex gap-7">
            <img src="/avatar.png" alt="avatar"  height="90" class=" max-h-[90px] w-auto">
            <div >
              <p class=" text-2xl font-medium text-black">Алина Шишкова</p>
              <p class=" text-base font-medium mt-1 text-dove-gray">Product Designer at Coursiv</p>
              <p class=" text-base font-medium mt-1 text-royal-blue flex items-center gap-1">
                <img src="@/assets/svg/linked.svg" alt="linked" width="16" height="16">
                Linkedin</p>
            </div>
          </div>
        </div>
      </div>

      <div class=" flex gap-5 items-center mt-8">
        <div class=" program-ball text-base font-medium text-black">14:00 <br />15:40</div>
        <div class="flex items-center gap-1 ">
          <img src="@/assets/svg/pin.svg" alt="pin" width="24" height="24">
          <p class=" text-concrete text-2xl font-medium ">Panel Session & Networking </p>
        </div>
      </div>

    </div>
  </div>
  </section>

  <section class="bg-black py-20 text-concrete relative">
    <div class="main-container">
    <div class="flex justify-between mt-20">

<div class="">
  <p class=" text-5xl font-medium">Количество мест ограничено — успей занять своё! </p>

<RouterLink
      to="/result"
      class=" block mt-6 rounded-full bg-royal-blue py-4 text-base font-medium text-concrete text-center max-w-lg hover:bg-neutral-900 active:bg-neutral-800 transition"
    >
    ЗАБРОНИРОВАТЬ МЕСТО
    </RouterLink>
</div>
<img src="@/assets/svg/logo-white.svg" alt="logo-white" class=" ">
<img src="@/assets/svg/zimran-bron-icon.svg" alt="zimran-bron-icon" class=" absolute bottom-0 right-0">
</div>
</div>
  </section>
  
</template>


<style scoped>
.bg-image-gray {
  background-image: url('@/assets/svg/bg-gray.svg');
  background-size: cover;
  background-position: center;
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

@media (min-width: 768px) {
  .program-ball {
    width: 70px;
    max-width: 70px;
    height: 70px;
  }
}

</style>