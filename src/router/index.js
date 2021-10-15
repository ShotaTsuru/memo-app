import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import New from '../views/New.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/New',
    name: 'New',
    component: New
  },
  {
    path: '/memo/:id',
    name: 'Memo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Memo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
