import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _12688ae2 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _eb0e64e6 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _30655376 = () => interopDefault(import('..\\pages\\chatroom\\index.vue' /* webpackChunkName: "pages/chatroom/index" */))
const _1e507be0 = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _660fa59a = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _3aea2155 = () => interopDefault(import('..\\pages\\message\\index.vue' /* webpackChunkName: "pages/message/index" */))
const _93260080 = () => interopDefault(import('..\\pages\\signup\\index.vue' /* webpackChunkName: "pages/signup/index" */))
const _d653b426 = () => interopDefault(import('..\\pages\\chatroom\\_id.vue' /* webpackChunkName: "pages/chatroom/_id" */))
const _586b1606 = () => interopDefault(import('..\\pages\\message\\_id.vue' /* webpackChunkName: "pages/message/_id" */))
const _0f9d7958 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _12688ae2,
    name: "about"
  }, {
    path: "/admin",
    component: _eb0e64e6,
    name: "admin"
  }, {
    path: "/chatroom",
    component: _30655376,
    name: "chatroom"
  }, {
    path: "/inspire",
    component: _1e507be0,
    name: "inspire"
  }, {
    path: "/login",
    component: _660fa59a,
    name: "login"
  }, {
    path: "/message",
    component: _3aea2155,
    name: "message"
  }, {
    path: "/signup",
    component: _93260080,
    name: "signup"
  }, {
    path: "/chatroom/:id",
    component: _d653b426,
    name: "chatroom-id"
  }, {
    path: "/message/:id",
    component: _586b1606,
    name: "message-id"
  }, {
    path: "/",
    component: _0f9d7958,
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
