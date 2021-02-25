import Vue from 'vue'
import Router from 'vue-router'
import Products from '@/components/Products'
import ProductPage from '@/components/ProductPage'
import Login from '@/components/Login'
import Register from '@/components/Register'
import ForgetPassword from '@/components/ForgetPassword'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Products',
      component: Products
    },
    {
      path: '/product/:id',
      name: 'ProductPage',
      component: ProductPage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/forgetpassward',
      name: 'forgetpassword',
      component: ForgetPassword
    }
  ]
})
