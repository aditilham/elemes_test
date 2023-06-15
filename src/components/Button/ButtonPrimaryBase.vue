<template>
  <button class="bg-primary-green rounded-full px-10 py-5 text-white">
    <text-base :text="text" />
  </button>
</template>

<script>
import TextBase from './../Text/textBase.vue'

export default {
  name: "ButtonPrimaryBase",
  components: {
    TextBase
  },
  props: {
    text: String
  }
}
</script>
