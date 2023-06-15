<template>
  <div>
    <div class="w-full flex bg-soft-green space-x-10 rounded-[20px] p-10">
      <div class="w-1/3 flex flex-col space-y-5">
        <img class="w-52" src="../../assets/images/elemes-logo.png" alt="">
        <text-small class="text-soft-gray" text="Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950" />
        <div class="flex space-x-5">
          <a href="mailto:elemesid@gmail.com" class="p-3 rounded-full bg-white hover:bg-primary-green text-primary-green hover:text-white">
            <email class="w-full h-auto" />
          </a>
          <a href="tel:+6288811112222" class="p-3 rounded-full bg-white hover:bg-primary-green text-primary-green hover:text-white">
            <phone class="w-full h-auto" />
          </a>
          <a href="https://www.instagram.com/elemes.id/" target="_blank" class="p-3 rounded-full bg-white hover:bg-primary-green text-primary-green hover:text-white">
            <instagram class="w-full h-auto" />
          </a>
        </div>
      </div>
      <div v-if="categories" class="w-1/5 flex flex-col space-y-5">
        <text-large-bold text="Categories" />
        <div class="flex flex-col space-y-2">
          <router-link :to="{name: 'ComingSoon'}" v-for="(item, index) in categories" :key="index">
            <text-small class="text-soft-gray hover:text-primary-green" :text="item" />
          </router-link>
        </div>
        <div>
        </div>
      </div>
      <div class="w-1/5 flex flex-col space-y-5">
        <text-large-bold text="About Us" />
        <div class="flex flex-col space-y-2">
          <router-link :to="{name: item.url}" v-for="(item, index) in aboutUs" :key="index">
            <text-small class="text-soft-gray hover:text-primary-green" :text="item.name" />
          </router-link>
        </div>
      </div>
      <div class="w-1/5 flex flex-col space-y-5">
        <text-large-bold text="Newsletter" />
        <div class="flex flex-col space-y-2">
          <text-small class="text-soft-gray" text="Get now free 50% discount for all products on your first order" />
          <input-with-button placeholder="Your email address" inputType="email" buttonText="SEND" @submitted="submitEmail($event)" />
          <div class="flex flex-row flex-wrap items-center space-x-3">
            <a href="mailto:elemesid@gmail.com" class="text-primary-green">
              <email />
            </a>
            <text-small class="text-black pb-1.5" text="elemesid@gmail.com" />
          </div>
          <div class="flex flex-row flex-wrap items-center space-x-3">
            <a href="tel:+6288811112222" class="text-primary-green">
              <phone />
            </a>
            <text-small class="text-black" text="0888 1111 2222" />
          </div>
        </div>
      </div>
    </div>
    <text-extra-small class="text-center py-10 text-soft-gray" text="© 2021 Elemes id. All rights reserved" />
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
import categoryData from '../../assets/json/category.json'
import Email from '../Icons/Email.vue'
import Instagram from '../Icons/Instagram.vue'
import Phone from '../Icons/Phone.vue'
import InputWithButton from '../Input/InputWithButton.vue'
import textExtraSmall from '../Text/textExtraSmall.vue'
import TextLargeBold from '../Text/textLargeBold.vue'
import TextSmall from '../Text/textSmall.vue'
export default {
  setup() {
    const toast = useToast();
    return { toast };
  },
  components: { textExtraSmall, TextSmall, Instagram, Phone, Email, TextLargeBold, InputWithButton },
  name: "FooterComponent",
  data() {
    return {
      categoryData,
      categories: null,
      aboutUs: [
        {
          url: 'ComingSoon',
          name: 'About Us'
        },
        {
          url: 'ComingSoon',
          name: 'FAQ'
        },
        {
          url: 'ComingSoon',
          name: 'Report Problem'
        }
      ]
    }
  },
  methods: {
    setCategories() {
      let tempCategories = []
      for (let i = 0; i <this.categoryData.length; i++) {
        tempCategories.push(this.categoryData[i].name)
      }
      this.categories = [...new Set(tempCategories)]
    },
    submitEmail(event) {
      this.toast.success("Email has been sent to " + event, {
        position: "top-right",
        timeout: 3000,
        closeOnClick: true,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
        draggable: false,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: false,
        icon: true,
        rtl: false,
      });
    }
  },
  created() {
    this.setCategories();
  },
  mounted() {
    this.setCategories();
  },
}
</script>

<style scoped>
</style>
