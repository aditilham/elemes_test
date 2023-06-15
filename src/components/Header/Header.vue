<template>
  <div :class="{ 'scrolled': !view.atTopOfPage, 'atTopNav': view.atTopOfPage }" class="w-full flex flex-wrap justify-between items-center fixed left-0 top-0 px-5 md:px-10 flex-wrap z-50">
    <div class="w-4/12 md:w-auto">
      <router-link :to="{name: 'Home'}">
        <img class="w-[150px] md:w-auto" src="../../assets/images/elemes-logo.png" alt="">
      </router-link>
    </div>
    <div class="w-auto hidden md:block">
      <nav class="">
        <div class="top-navbar inline-flex grow w-auto" id="navigation">
          <div v-bind:class="
          {
            'scrolled': !view.atTopOfPage,
            'atTopNav': view.atTopOfPage
          }
          "
          class="items-center inline-flex flex-row w-auto md:w-full relative bg-transparent left-0">
            <router-link v-for="menu in menus" v-bind:key="menu" v-smooth-scroll :to="{ name: menu.url}"
            class="text-center inline-flex w-auto px-3 py-3 md:py-2 items-center justify-right relative">
              <span v-if="menu.hot" class="absolute -top-2 right-4 px-2 py-1 rounded-lg bg-[#E7462D] text-white">
                <text-extra-extra-small-bold text="Hot" />
              </span>
              <span class="text-soft-gray text-sm px-4 font-medium">{{menu.title}}</span>
            </router-link>
          </div>
        </div>
      </nav>
    </div>
    <div class="w-auto md:flex md:space-x-5 md:items-center">
      <div class="hidden md:block">
        <router-link :to="{name: 'ComingSoon'}">
          <text-small-md class="text-dark" text="Masuk" />
        </router-link>
      </div>
      <div>
        <router-link :to="{name: 'ComingSoon'}">
          <button-primary-sm text="Daftar Sekarang" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// B
import ButtonPrimarySm from '../Button/ButtonPrimarySm.vue'

// T
import TextExtraExtraSmallBold from '../Text/textExtraExtraSmallBold.vue'
import textSmallMd from '../Text/textSmallMd.vue'

export default {
  components: { ButtonPrimarySm, TextExtraExtraSmallBold, textSmallMd },
  name: "HeaderComponent",
  data() {
    return {
        menus: [
          {url: 'Home', title:'Home', id:'home', hot: false},
          {url: 'ComingSoon', title:'About', id:'about', hot: false},
          {url: 'ComingSoon', title:'Promotions', id:'promotions', hot: true},
          {url: 'ComingSoon', title:'Blogs', id:'blogs', hot: false},
          {url: 'ComingSoon', title:'Contact Us', id:'contact', hot: false},
        ],
        view: {
          atTopOfPage: true
        },
      }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(){
      if (window.pageYOffset>100){
        if(this.view.atTopOfPage) this.view.atTopOfPage = false
      } else {
        if(!this.view.atTopOfPage) this.view.atTopOfPage = true
      }
    }
  },
}
</script>

<style scoped>
.scrolled {
  background-color: white;
  border-bottom: 0px;
}
@media only screen and (max-width: 1024px) {
  .atTopNav {
    background-color: transparent;
  }
}
</style>
