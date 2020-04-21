import Vue from 'vue'
import VueRouter from 'vue-router'
import Items from '../views/Items.vue'
import wishList from '../views/wishList.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'items',
    component: Items
  },
  {
    path: '/wishlist',
    name: 'wish',
    component: wishList
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
