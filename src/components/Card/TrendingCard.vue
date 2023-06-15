<template>
  <div class="flex flex-col justify-between space-y-3 relative">
    <img width="120" height="120" class="rounded-[6px]" :src="require('@/assets/images/' + item.image)" :alt="item.name">
        <h3 class="text-[26px] font-bold">
          {{ item.name }}
        </h3>
        <text-large-bold class="text-primary-green" :text="item.category" />
        <div class="flex space-x-1">
          <yellow-star v-for="star in item.star" :key="star" />
          <gray-star v-for="n in 5-item.star" :key="n"/>
        </div>
  </div>
</template>

<script>
// G
import GrayStar from '../Icons/GrayStar.vue'

// T
import textLargeBold from '../Text/textLargeBold.vue'

// Y
import YellowStar from '../Icons/YellowStar.vue'

export default {
  components: { textLargeBold, YellowStar, GrayStar },
  name: "TrendingCard",
  props: {
    item: Object,
  },

}
</script>

<style scoped>
</style>
