<template>
  <button class="bg-primary-green rounded-full px-4 md:px-6 py-3 text-white">
    <text-small-md :text="text" />
  </button>
</template>

<script>
import TextSmallMd from '../Text/textSmallMd.vue'

export default {
  name: "ButtonPrimarySm",
  components: {
    TextSmallMd
  },
  props: {
    text: String
  }
}
</script>
