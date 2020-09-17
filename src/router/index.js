import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search'
import Recipe from '../views/RecipeDetails'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search/:searchString',
    name: 'Search',
    component: Search
  },
  {
    path: '/recipe/:recipe',
    name: 'Recipe',
    component: Recipe
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
