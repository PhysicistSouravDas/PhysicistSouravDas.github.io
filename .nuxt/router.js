import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _35b87778 = () => interopDefault(import('../pages/Blog/index.vue' /* webpackChunkName: "pages/Blog/index" */))
const _21cd966f = () => interopDefault(import('../pages/hello.vue' /* webpackChunkName: "pages/hello" */))
const _19988192 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _bd8d8a2a = () => interopDefault(import('../pages/vuetify.vue' /* webpackChunkName: "pages/vuetify" */))
const _739aa67d = () => interopDefault(import('../pages/Blog/_year/_slug.vue' /* webpackChunkName: "pages/Blog/_year/_slug" */))
const _ab50b322 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Blog",
    component: _35b87778,
    name: "Blog"
  }, {
    path: "/hello",
    component: _21cd966f,
    name: "hello"
  }, {
    path: "/inspire",
    component: _19988192,
    name: "inspire"
  }, {
    path: "/vuetify",
    component: _bd8d8a2a,
    name: "vuetify"
  }, {
    path: "/Blog/:year/:slug?",
    component: _739aa67d,
    name: "Blog-year-slug"
  }, {
    path: "/",
    component: _ab50b322,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
