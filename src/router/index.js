import Vue from 'vue'
import Router from 'vue-router'
import Login from '../component/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login
    }
  ]
})
