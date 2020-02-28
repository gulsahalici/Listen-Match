import Vue from 'vue'
import App from './App.vue'
import {store} from "./store/store";

//Including Bootstrap and BootstrapVue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  store:store,
  render: h => h(App)
}).$mount('#app')
