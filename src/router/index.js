import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HowItWorks from '../views/HowItWorks.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { readableName: 'Home' },
    component: Home
  },
  {
    path: '/howitworks',
    name: 'howitworks',
    meta: { readableName: 'How It Works' },
    component: HowItWorks
  },
  {
    path: '/team',
    name: 'team',
    meta: { readableName: 'Team' },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "team" */ '../views/Team.vue')
  },
  {
    path: '/team/:id',
    name: 'teamid',
    meta: { readableName: 'Ambassador Profile' },
    component: () =>
      import(/* webpackChunkName: "teamid" */ '../views/AmbassadorProfile.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    meta: { readableName: 'FAQ & Contacts' },
    component: () => import(/* webpackChunkName: "faq" */ '../views/FAQ.vue')
  },
  {
    path: '/tos',
    name: 'tos',
    meta: { readableName: 'Terms of Service' },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "tos" */ '../views/ToS.vue')
  },
  {
    path: '/teamisset',
    meta: { readableName: 'Final Steps' },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "teamisset" */ '../views/TeamSet.vue'),
    children: [
      {
        path: '',
        name: 'teamisset',
        meta: { readableName: '(1/3) Final Steps' },
        component: () => import(/* webpackChunkName: "teamisset0" */ '../views/TeamSet0.vue')
      },
      {
        path: 'msg',
        meta: { readableName: '(2/3) Final Steps' },
        component: () => import(/* webpackChunkName: "teamisset1" */ '../views/TeamSet1.vue')
      },
      {
        path: 'final',
        meta: { readableName: '(3/3) Final Steps' },
        component: () => import(/* webpackChunkName: "teamisse2" */ '../views/TeamSet2.vue')
      }
    ]
  }
];

const router = new VueRouter({
  routes
})

export default router
