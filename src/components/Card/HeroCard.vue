<template>
  <div class="rounded-2xl flex flex-row space-x-5 px-5 py-3 bg-[#FFFFFF74] backdrop-blur-lg">
    <!-- <img :src="`@/assets/images/${data.image}.png`" width="53" height="53" alt=""> -->
    <img src="@/assets/images/salad.png" width="53" height="53" alt="">
    <div class="flex flex-col justify-between">
      <text-small-semi-bold :text="data.name" />
      <text-extra-small :text="data.category" />
      <div class="flex space-x-1">
        <yellow-star v-for="star in data.star" :key="star" />
        <gray-star v-for="n in 5-data.star" :key="n"/>
      </div>
    </div>
  </div>
</template>

<script>
import TextExtraSmall from '../Text/textExtraSmall.vue'
import textSmallSemiBold from '../Text/textSmallSemiBold.vue'
import YellowStar from '../Icons/YellowStar.vue'
import GrayStar from '../Icons/GrayStar.vue'
export default {
  components: { textSmallSemiBold, TextExtraSmall, YellowStar, GrayStar },
  name: "HeroCard",
  props: {
    data: Object
  },

}
</script>
