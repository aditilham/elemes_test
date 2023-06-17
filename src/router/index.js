import { createRouter, createWebHistory } from "vue-router";

// Error Page
// import errornotfound from "../page/404Features/404Page.vue";

// Coming Soon
import ComingSoon from "../page/ComingSoonFeatures/ComingSoonPage.vue";

// Main Page
import MainPage from "../page/MainFeatures/MainPage.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: MainPage
  },

  // Coming Soon Page
  {
    path: "/coming-soon",
    name: "ComingSoon",
    component: ComingSoon,
  },

  // Error Page
  {
    path: "/:catchAll(.*)",
    redirect: '/'
    // name: "errornotfound",
    // component: errornotfound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: "/",
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active",
  scrollBehavior(savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        selector: window.scrollTo(0, 0),
        behavior: "smooth",
      };
    }
  },
});

export default router;
