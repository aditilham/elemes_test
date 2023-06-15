<template>
  <div>
    <h2 class="text-2xl md:text-[38px] text-dark font-bold py-5 leading-[30px] md:leading-[50px]">
      Browse Our Trending <br>
      <span class="text-primary-green">
        Receipt
      </span>
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-x-5 gap-y-10">
      <router-link :to="{name: 'ComingSoon'}" v-for="(item, index) in data" :key="index"  @mouseover="hoveredIndex = index" @mouseleave="hoveredIndex = null"
      class="w-full px-5 rounded-[17px] py-5 shadow-lg transform transition duration-500 relative" :style="`background-color: ${item.bgColor}`">
      <img v-if="getBackgroundStyle(index)" class="background-img" src="@/assets/images/background.png" alt="">
        <trending-card :item="item" />
      </router-link>
    </div>
    <div class="py-24 justify-center hidden md:flex">
      <router-link :to="{name: 'ComingSoon'}">
        <button-primary-base text="ALL Receipt" />
      </router-link>
    </div>
  </div>
</template>

<script>
import trendingData from '../../assets/json/trending.json'
import ButtonPrimaryBase from '../Button/ButtonPrimaryBase.vue'
import TrendingCard from '../Card/TrendingCard.vue'
export default {
  components: { TrendingCard, ButtonPrimaryBase },
  name: "TrendingSection",
  data() {
    return {
      data: trendingData,
      hoveredIndex: null
    }
  },
  methods: {
    getBackgroundStyle(index) {
      if (index === this.hoveredIndex) {
        return true;
      } else {
        return false;
      }
    }
  },
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
