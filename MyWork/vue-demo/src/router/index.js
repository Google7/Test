import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Select from '../page/select.vue'
import Insert from '../page/insert.vue'
import Update from '../page/update.vue'
import Delete from '../page/delete.vue'
import Demo from '../page/demo.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: HelloWorld
  }, {
    path: '/select',
    component: Select
  }, {
    path: '/insert',
    component: Insert
  }, {
    path: '/update',
    component: Update
  }, {
    path: '/delete',
    component: Delete
  }, {
    path: '/demo',
    component: Demo
  }]
})
