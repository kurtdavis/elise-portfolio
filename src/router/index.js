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
    {
      path: '/portfolio',
      name: 'portfolio',
      // Lazy load w/import here
      component: () => import('../views/Portfolio.vue')
    },
    {
      path: '/bakery',
      name: 'bakery',
      // Lazy load w/import here
      component: () => import('../views/Bakery.vue')
    },
    {
      path: '/resume',
      name: 'resume',
      // Lazy load w/import here
      component: () => import('../views/Resume.vue')
    },
    //   default route
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: AboutView
    }
  ]
})

export default router
