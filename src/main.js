import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const config = {
  server: "http://127.0.0.1:8080"
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/cloud', component: () => import('./components/cloud.vue'), children: [
        { path: 'news', component: () => import('./components/news.vue') },
        { path: 'contact', component: () => import('./components/contact.vue') },
        { path: 'note', component: () => import('./components/note/list.vue') },
        { path: 'file', component: () => import('./components/file.vue') },
        { path: 'word', component: () => import('./components/word/list.vue') },
        { path: 'wiki', component: () => import('./components/wiki/list.vue') },
        { path: 'image', component: () => import('./components/image/list.vue') },
      ]
    },
    { path: '/helloworld', component: () => import('./components/HelloWorld.vue') },
    { path: '/user', component: () => import('./components/user/home.vue') },
  ]
})

new Vue({
  router,
  config,
  render: h => h(App),
}).$mount('#app')
