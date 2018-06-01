import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Hash from './components/Hash.vue'
import Bip39 from './components/Bip39.vue'
import Eth from './components/Eth.vue'
import First from './components/First.vue'
import Profile from './components/Profile.vue'

import VueClipboard from 'vue-clipboard2'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.min.css';


import WeVue from 'we-vue'
import 'we-vue/lib/style.css'
Vue.use(WeVue)

import { Icon } from 'we-vue'
Vue.use(Icon)

Vue.use(Mint);
Vue.use(VueClipboard)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/hash', component: Hash },
  { path: '/bip39', component: Bip39 },
  { path: '/eth', component: Eth },
  { path: '/first', component: First },
  { path: '/profile', component: Profile }
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
