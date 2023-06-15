<template>
  <div>
    <h2 class="text-2xl md:text-[38px] text-dark font-bold px-5 md:px-10 py-5 leading-[30px] md:leading-[50px]">
      Browse Our Category <br>
      <span class="text-primary-green">
        Receipt
      </span>
    </h2>
    <div class="">
      <Carousel :breakpoints="breakpoints" :mouse-drag="false" :wrap-around="true">
        <Slide v-for="(item, index) in data" :key="index" @mouseover="hoveredIndex = index" @mouseleave="hoveredIndex = null">
          <router-link :to="{name: 'ComingSoon'}" :style="`background-color: ${item.bgColor}`"
          class="w-[230px] h-[173px] flex flex-col space-y-5 rounded-lg items-center justify-center transform transition duration-500 hover:scale-110 relative">
            <img v-if="getBackgroundStyle(index)" class="background-img" src="@/assets/images/background.png" alt="">
            <img width="50" height="50" :src="require('@/assets/icons/' + item.image)" alt="">
            <div class="flex flex-col space-y-1">
              <text-base-bold class="text-dark" :text="item.name" />
              <text-small class="text-dark" :text="item.total_item +  ` items`" />
            </div>
          </router-link>
          </Slide>

          <template #addons>
            <navigation class="">
              <template #next>
                <span class="flex items-center space-x-2">
                  <text-base text="Next" />
                  <span class="bg-white rounded-full px-2 text-base text-primary-green">
                    &gt;
                  </span>
                </span>
              </template>
              <template #prev>
                <span class="flex items-center space-x-2">
                  <span class="bg-white rounded-full px-2 text-base text-primary-green">
                    &lt;
                  </span>
                  <text-base text="Prev" />
                </span>
              </template>
            </navigation>
          </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import categoryData from '../../assets/json/category.json'
import { Carousel, Navigation, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';
import TextBase from '../Text/textBase.vue';
import TextSmall from '../Text/textSmall.vue';
import TextBaseBold from '../Text/textBaseBold.vue';

export default {
  name: "CategorySection",
  components: {
    Carousel,
    Slide,
    Navigation,
    TextSmall,
    TextBase,
    TextBaseBold,
  },
  data() {
    return {
      data: categoryData,
      hoveredIndex: null,
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 700px and up
        300: {
          itemsToShow: 2.3,
          snapAlign: 'center'
        },
        // 1024 and up
        1024: {
          itemsToShow: 6,
          snapAlign: 'center',
        },
      }
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
.carousel__item {
  min-height: 200px;
  width: 230px;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

:deep(.carousel__prev) {
  top: 120% !important;
  box-sizing: content-box;
  left: 85% !important;
  padding-right: 15px !important;
  width: 80px !important;
  height: 40px !important;
  border: 5px solid white;
  background-color: #8BAC3E !important;
}
:deep(.carousel__next) {
  top: 120% !important;
  box-sizing: content-box;
  padding-left: 15px !important;
  left: 85% !important;
  width: 80px !important;
  height: 40px !important;
  box-sizing: content-box;
  border: 5px solid white;
  background-color: #8BAC3E !important;
}
@media only screen and (max-width: 400px) {
  :deep(.carousel__prev) {
    display: none !important;
}
:deep(.carousel__next) {
  display: none !important;
}
}
</style>
