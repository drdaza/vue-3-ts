import { createRouter, createWebHistory } from 'vue-router'
import { COUNTER_VIEW, ABOUT_VIEW, HOME_VIEW } from '@/router/routeNames'
import HomeView from '../views/HomeView.vue'
import { pokemonRoute } from '@/pokemons/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: HOME_VIEW.path,
      name: HOME_VIEW.name,
      component: HomeView
    },
    {
      path: ABOUT_VIEW.path,
      name: ABOUT_VIEW.name,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      ...pokemonRoute,
    },
    {
      path: COUNTER_VIEW.path,
      name: COUNTER_VIEW.name,
      component: () => import('@/counter/CounterView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: () => ({name: 'home'})
    }
  ]
})

export default router
