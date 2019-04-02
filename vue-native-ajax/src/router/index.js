import Vue from 'vue'
import Router from 'vue-router'
import Demo1 from './../view/demo1.vue'
import Demo2 from './../view/demo2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/demo1',
      component: Demo1
    },
    {
      path: '/demo2',
      component: Demo2
    }
  ]
})
