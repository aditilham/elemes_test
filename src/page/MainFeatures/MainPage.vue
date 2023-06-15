<template>
  <div class="px-5 md:px-10 relative">
    <header-component class="py-5 md:p-10" />
    <img class="background-img" src="@/assets/images/background.png" alt="">
    <hero-section class="pt-32 md:pt-36 pb-96" />
    <footer-menu class="block md:hidden" />
  </div>
</template>

<script>
import FooterMenu from '@/components/FooterMenu/FooterMenu.vue'
import HeaderComponent from "../../components/Header/Header.vue"
import HeroSection from '@/components/HeroSection/HeroSection.vue'
export default {
  name: "MainPage",
  components: {
    HeaderComponent,
    FooterMenu,
    HeroSection
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
  height: 70%;
  z-index: -1;
  object-fit: cover;
}
</style>
