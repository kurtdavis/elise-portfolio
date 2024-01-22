import {createRouter, createWebHistory} from 'vue-router'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: AboutView
    },
    // Lazy load w/imports here
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/Portfolio.vue')
    },
    {
      path: '/bakery',
      name: 'bakery',
      component: () => import('../views/Bakery.vue')
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('../views/Resume.vue')
    },
  ]
})

export default router
