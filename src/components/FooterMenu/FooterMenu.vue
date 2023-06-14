<template>
  <div class="w-full px-5 py-2 fixed bottom-0 left-0 flex justify-between items-center border-t">
    <div v-for="(item, index) in menus" :key="index" class="flex flex-col items-center space-y-2">
      <burger-menu />
      <text-small class="text-[#757575]" :text="item.title" />
    </div>
  </div>
</template>

<script>
import BurgerMenu from '../Icons/BurgerMenu.vue'
import TextSmall from '../Text/textSmall.vue'
export default {
  components: { BurgerMenu, TextSmall },
  name: "FooterMenu",
  data() {
    return {
      menus: [
        {url: 'Home', title:'Home', id:'home'},
        {url: 'ComingSoon', title:'Promotions', id:'promotions'},
        {url: 'ComingSoon', title:'Others', id:'others'},
      ],
    }
  },
}
</script>

<style>
</style>
