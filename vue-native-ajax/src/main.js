import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Install from './install/index.js'
Vue.use(Install)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
