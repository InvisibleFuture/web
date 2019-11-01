import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/helloworld', component: () => import('./components/HelloWorld.vue')},
    { path: '/contact', component: () => import('./components/contact.vue')},
    { path: '/news', component: () => import('./components/news.vue')},
    { path: '/note', component: () => import('./components/note.vue')},
    { path: '/file', component: () => import('./components/file.vue')},
    { path: '/word', component: () => import('./components/word.vue')},
    { path: '/wiki', component: () => import('./components/wiki/list.vue')},
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
