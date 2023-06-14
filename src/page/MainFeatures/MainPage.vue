<template>
  <div class="px-5 md:px-10 relative">
    <HeaderComponent class="py-5 md:p-10" />
    <FooterMenu class="block md:hidden" />
  </div>
</template>

<script>
import FooterMenu from '@/components/FooterMenu/FooterMenu.vue'
import HeaderComponent from "../../components/Header/Header.vue"
export default {
  name: "MainPage",
  components: {
    HeaderComponent,
    FooterMenu
  }

}
</script>

<style>
</style>
