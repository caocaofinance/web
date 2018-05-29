import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Hash from './components/Hash.vue'
import Bip39 from './components/Bip39.vue'
import Eth from './components/Eth.vue'
import First from './components/First.vue'
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/hash', component: Hash },
  { path: '/bip39', component: Bip39 },
  { path: '/eth', component: Eth },
  { path: '/first', component: First }
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
