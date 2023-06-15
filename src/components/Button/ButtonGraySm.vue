<template>
  <button class="bg-light-gray rounded-full px-4 md:px-6 py-3 text-dark">
    <text-small-md :text="text" />
  </button>
</template>

<script>
import TextSmallMd from '../Text/textSmallMd.vue'

export default {
  name: "ButtonGraySm",
  components: {
    TextSmallMd
  },
  props: {
    text: String
  }
}
</script>
