<template>
  <div class="relative">
    <header-component class="py-5 md:p-5 px-5" />
    <div class="relative pb-10">
      <img class="background-img" src="@/assets/images/background.png" alt="">
      <hero-section class="pt-32 md:pt-36 px-5 md:px-10 " />
    </div>
    <category-section class="pb-10 md:pb-24" />
    <trending-section class="px-5 md:px-10 pb-24" />

    <footer-menu class="block md:hidden" />
  </div>
</template>

<script>
import FooterMenu from '@/components/FooterMenu/FooterMenu.vue'
import HeaderComponent from "../../components/Header/Header.vue"
import HeroSection from '@/components/HeroSection/HeroSection.vue'
import CategorySection from '@/components/CategorySection/CategorySection.vue'
import TrendingSection from '@/components/TrendingSection/TrendingSection.vue'
export default {
  name: "MainPage",
  components: {
    HeaderComponent,
    FooterMenu,
    HeroSection,
    CategorySection,
    TrendingSection
  }

}
</script>

<style scoped>
.background-img {
  opacity: 0.1;
  position: absolute;
  left: 0;
  top: 0;
  width: auto;
  height: 100%;
  z-index: -1;
  object-fit: cover;
}
</style>
