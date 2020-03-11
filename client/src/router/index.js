import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Fitness from '../views/Fitness.vue'
import { CurrentUser } from '../models/Users';

Vue.use(VueRouter)

const routes = [
  { path: '/',name: 'Home',component: Home },
  { path: '/login',name: 'Login',component: Login },
  { path: '/fitness',name: 'Fitness',component: Fitness, meta: { isSecret: true } },


  {
    path: '/about', name: 'About',
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

router.beforeEach( (to, from, next) => {
  if( to.meta.isSecret && !CurrentUser) next('/login');
  else next();
});

export default router
