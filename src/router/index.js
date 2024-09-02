import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import ItemPage from '../views/ItemPage.vue';


const routes = [

  {
    path: '/vue-pages',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/item/:id',
    name: 'ItemPage',
    component: () => import('@/views/ItemPage.vue'),
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
