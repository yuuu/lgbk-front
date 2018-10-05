import Vue from 'vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueRouter from 'vue-router';
import router from '@router/router'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
