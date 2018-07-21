import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import jQuery from 'jquery' 
import popper from 'popper.js'

global.jQuery = jQuery  
global.Popper = popper

import 'bootstrap' //js
 

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
