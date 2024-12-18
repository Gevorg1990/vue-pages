import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },  {
    path: '/Wishlist',
    name: 'Wishlist',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Wishlist.vue'),
  },
  {
    path: `/tartalet/:id`, // Use the global translation function
    name: 'tartaletcakePage',
    component: () => import('@/views/TartaletcakePage.vue'),
  },
  {
    path: `/cheesecake/:id`,
    name: 'cheesecakePage',
    component: () => import('@/views/CheesecakePage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
