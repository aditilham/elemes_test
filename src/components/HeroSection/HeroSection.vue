<template>
  <div class="w-full flex flex-col space-y-5 md:flex-row px-5 e">
    <div class="w-full md:w-1/2 flex flex-col justify-center space-y-7">
      <h1 class="text-[48px] md:text-[64px] font-bold text-primary-green leading-[64px]">
        Good Food Us Good Mood
      </h1>
      <text-large class="text-justify leading-7 text-[#757575] hidden md:block" text="I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy." />
      <div class="space-x-5 hidden md:flex">
        <router-link :to="{name: 'ComingSoon'}">
          <button-primary-sm text="Daftar Sekarang" />
        </router-link>
        <router-link :to="{name: 'ComingSoon'}">
          <button-gray-sm text="About Us" />
        </router-link>
      </div>
    </div>
    <div class="w-full md:w-1/2 flex flex-col md:flex-row space-y-10 md:space-y-0 justify-center relative">
      <div>
        <!-- <img :src="`../../assets/images/${heroData.image}.png`" alt=""> -->
        <img class="w-[300px] md:w-auto rounded-full bg-[#C4C4C440] p-10" src="../../assets/images/salad.png" alt="">
      </div>
      <text-large class="text-justify leading-7 text-[#757575] block md:hidden" text="I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy." />
      <div class="space-x-5 flex md:hidden">
        <router-link :to="{name: 'ComingSoon'}">
          <button-primary-sm text="Daftar Sekarang" />
        </router-link>
        <router-link :to="{name: 'ComingSoon'}">
          <button-gray-sm text="About Us" />
        </router-link>
      </div>
      <div class="absolute max-w-max bottom-64 md:bottom-5 md:left-2 right-5 md:-right-0">
        <router-link :to="{name: 'ComingSoon'}">
          <hero-card class="transform transition duration-500 hover:scale-110" :data="heroData" />
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
import heroData from '../../assets/json/heroSection.json'
import ButtonGraySm from '../Button/ButtonGraySm.vue'
import ButtonPrimarySm from '../Button/ButtonPrimarySm.vue'
import HeroCard from '../Card/HeroCard.vue'
import TextLarge from '../Text/textLarge.vue'
export default {
  components: {TextLarge, ButtonPrimarySm, ButtonGraySm,HeroCard  },
  name: "HeroSection",
  data() {
    return {
      heroData,
    }
  },
}
</script>

<style scoped>
</style>
