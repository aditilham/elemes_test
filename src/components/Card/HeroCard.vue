<template>
  <div class="rounded-2xl flex flex-row space-x-5 px-5 py-3 bg-[#FFFFFF74] backdrop-blur-lg">
    <img :src="require('@/assets/images/' + data.image)" width="53" height="53" alt="">
    <div class="flex flex-col justify-between">
      <text-small-semi-bold :text="data.name" />
      <text-extra-small class="text-soft-gray" :text="data.category" />
      <div class="flex space-x-1">
        <yellow-star v-for="star in data.star" :key="star" />
        <gray-star v-for="n in 5-data.star" :key="n"/>
      </div>
    </div>
  </div>
</template>

<script>
// G
import GrayStar from '../Icons/GrayStar.vue'

// T
import TextExtraSmall from '../Text/textExtraSmall.vue'
import textSmallSemiBold from '../Text/textSmallSemiBold.vue'

// Y
import YellowStar from '../Icons/YellowStar.vue'

export default {
  components: {
    GrayStar,
    TextExtraSmall,
    textSmallSemiBold,
    YellowStar
  },
  name: "HeroCard",
  props: {
    data: Object
  },

}
</script>
