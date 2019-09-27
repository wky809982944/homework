import Vue from 'vue'
import Router from 'vue-router'
import home from "../views/home";
import search from "../views/search";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component:home
    },
    {
      path: '/search',
      name: search,
      component: search
    }
  ]
})
