import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import { axios } from 'axios'
import '../src/index.css'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
