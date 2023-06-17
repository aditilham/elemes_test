<template>
  <div class="relative">
    <div class="relative pb-10">
      <img class="background-img" src="@/assets/images/background.png" alt="">
      <hero-section class="pt-32 md:pt-36 px-5 md:px-10 " />
    </div>
    <category-section class="pb-10 md:pb-24" />
    <trending-section class="px-5 md:px-10 pb-24" />
  </div>
</template>

<script>
// C
import CategorySection from '@/components/CategorySection/CategorySection.vue'

// H
import HeroSection from '@/components/HeroSection/HeroSection.vue'

// T
import TrendingSection from '@/components/TrendingSection/TrendingSection.vue'

export default {
  name: "MainPage",
  components: {
    CategorySection,
    HeroSection,
    TrendingSection,
  }

}
</script>

<style scoped>
.background-img {
  opacity: 0.1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
}
</style>
