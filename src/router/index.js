import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HowItWorks from '../views/HowItWorks.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/howitworks',
    name: 'howitworks',
    component: HowItWorks
  },
  {
    path: '/team',
    name: 'team',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "team" */ '../views/Team.vue')
  },
  {
    path: '/team/:id',
    name: 'teamid',
    component: () =>
      import(/* webpackChunkName: "teamid" */ '../views/AmbassadorProfile.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import(/* webpackChunkName: "faq" */ '../views/FAQ.vue')
  },
  {
    path: '/tos',
    name: 'tos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "tos" */ '../views/ToS.vue')
  },
  {
    path: '/teamisset',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "teamisset" */ '../views/TeamSet.vue'),
    children: [
      {
        path: '',
        name: 'teamisset',
        component: () => import(/* webpackChunkName: "teamisset0" */ '../views/TeamSet0.vue')
      },
      {
        name: 'msg',
        path: 'msg',
        component: () => import(/* webpackChunkName: "teamisset1" */ '../views/TeamSet1.vue')
      },
      {
        name: 'final',
        path: 'final',
        component: () => import(/* webpackChunkName: "teamisse2" */ '../views/TeamSet2.vue')
      }
    ]
  }
];

const router = new VueRouter({
  routes
})

export default router
