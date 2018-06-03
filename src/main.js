import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import View from './components/View.vue'
import About from './components/About.vue'
import Hash from './components/Hash.vue'
import Bip39 from './components/Bip39.vue'
import Eth from './components/Eth.vue'
import First from './components/First.vue'
import Profile from './components/Profile.vue'

import VueClipboard from 'vue-clipboard2'

import MuseUI from 'muse-ui';
import css from 'muse-ui/dist/muse-ui.css';
Vue.use(MuseUI);

import MintUI from 'mint-ui'


Vue.use(MintUI)

import VueResource from 'vue-resource';
Vue.use(VueResource)

Vue.use(VueClipboard)
Vue.use(VueRouter)
Vue.config.productionTip = false

Vue.http.options.emulateJSON = true
Vue.http.options.xhr = { withCredentials: true }
Vue.http.options.crossOrigin = true
Vue.http.options.emulateHTTP

const routes = [
  { path: '/', component: Home },
  { path: '/view/:id', component: View },
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
