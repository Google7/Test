// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
// 引用工具文件
import utils from '../../vue-test/src/utils/index.js'
// 引用API文件
import api from './api/index.js'
// 将API方法绑定到全局
Vue.prototype.$api = api

Vue.config.productionTip = false

// 将工具方法绑定到全局
Vue.prototype.$utils = utils

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: {
    App
  }
})
