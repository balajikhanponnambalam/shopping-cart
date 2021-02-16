import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export function createRouter (url) {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
    ]
  })
}
