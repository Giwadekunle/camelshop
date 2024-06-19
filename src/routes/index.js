import {createRouter, createWebHistory} from 'vue-router'

import Homepage from "./../components/Homepage.vue"
import products from "./../components/products.vue"
import aboutus from "../components/aboutus.vue"
import Contactus from "./../components/contactus.vue"
import service from "./../components/service.vue"
import cart from "./../components/cart.vue"


const routes = [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
        path: '/aboutus',
        name: 'aboutus',
        component: aboutus,
      },
      {
        path: '/products',
        name: 'products',
        component: products,
      },
      {
        path: '/service',
        name: 'service',
        component: service,
      },
      {
        path: '/cart',
        name: 'cart',
        component: cart,
      },
      {
        path: '/contactus',
        name: 'contactus',
        component: Contactus,
      },

]
const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router