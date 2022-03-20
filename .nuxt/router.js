import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ac7bb084 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _7e37fb18 = () => interopDefault(import('..\\pages\\chatroom\\index.vue' /* webpackChunkName: "pages/chatroom/index" */))
const _4351c70f = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _277cf138 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _a5749974 = () => interopDefault(import('..\\pages\\message\\index.vue' /* webpackChunkName: "pages/message/index" */))
const _ff6228a2 = () => interopDefault(import('..\\pages\\signup\\index.vue' /* webpackChunkName: "pages/signup/index" */))
const _5eb811dc = () => interopDefault(import('..\\pages\\chatroom\\_id.vue' /* webpackChunkName: "pages/chatroom/_id" */))
const _19d861a4 = () => interopDefault(import('..\\pages\\message\\_id.vue' /* webpackChunkName: "pages/message/_id" */))
const _0d85c447 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _ac7bb084,
    name: "admin"
  }, {
    path: "/chatroom",
    component: _7e37fb18,
    name: "chatroom"
  }, {
    path: "/inspire",
    component: _4351c70f,
    name: "inspire"
  }, {
    path: "/login",
    component: _277cf138,
    name: "login"
  }, {
    path: "/message",
    component: _a5749974,
    name: "message"
  }, {
    path: "/signup",
    component: _ff6228a2,
    name: "signup"
  }, {
    path: "/chatroom/:id",
    component: _5eb811dc,
    name: "chatroom-id"
  }, {
    path: "/message/:id",
    component: _19d861a4,
    name: "message-id"
  }, {
    path: "/",
    component: _0d85c447,
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
