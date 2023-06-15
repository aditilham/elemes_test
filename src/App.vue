<template>
  <div class="relative">
    <header-component class="py-5 md:p-5 px-5" />
    <router-view />
    <footer-component class="hidden md:block px-10" />
    <footer-menu class="block md:hidden" />
  </div>
</template>

<script>
import FooterComponent from '@/components/Footer/Footer.vue'
import FooterMenu from '@/components/FooterMenu/FooterMenu.vue'
import HeaderComponent from "./components/Header/Header.vue"
export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterMenu,
    FooterComponent
  }
}
</script>

<style>
</style>
