import Vue from 'vue'
import Router from 'vue-router'
import { isArray, fromPairs, entries } from 'lodash'
import Home from './views/Home.vue'

Vue.use(Router)

function props({ name, params, query }) {
  debugger
  const newQuery = fromPairs(
    entries(query)
      .filter(([key]) => key.substr(-1) === 's')
      .map(([key, value]) => [key, isArray(value) ? value : [value]]),
  )
  return Object.assign({}, params, query, newQuery)
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/parent',
      name: 'parent',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "parent" */ './views/Parent.vue'),
      props,
      children: [
        {
          path: 'first-child',
          name: 'firstChild',
          component: () => import(/* webpackChunkName: "firstChild" */ '@/views/FirstChild.vue'),
          props
        },
        {
          path: 'second-child',
          name: 'secondChild',
          component: () => import(/* webpackChunkName: "secondChild" */ '@/views/SecondChild.vue'),
          props
        },
      ],
    },
  ]
})
