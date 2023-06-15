<template>
  <form @submit.prevent="submitEmail()" class="flex">
    <input :type="inputType" v-model="userEmail" :placeholder="placeholder" class="border border-r-0 text-sm border-black rounded-l-lg py-1 px-2">
    <button>
      <text-small-semi-bold :text="buttonText" class="border border-l-0 border-primary-green bg-primary-green rounded-r-lg py-2 px-3 text-white" type="submit"/>
    </button>
  </form>
</template>

<script>
import textSmallSemiBold from '../Text/textSmallSemiBold.vue'

export default {
  components: { textSmallSemiBold },
  name: "InputWithButton",
  props: {
    placeholder: String,
    inputType: String,
    buttonText: String,
  },
  data() {
    return {
      userEmail: null
    }
  },
  methods: {
    submitEmail() {
      this.$emit('submitted', this.userEmail)
      this.userEmail = null
    }
  },
}
</script>
