import Vue from 'vue'
import Router from 'vue-router'
import Products from '@/components/Products'
import ProductPage from '@/components/ProductPage'
import Login from '@/components/Login'
import Register from '@/components/Register'
import ForgetPassword from '@/components/ForgetPassword'
import userCreate from '@/pages/users/userCreate'
import userList from '@/pages/users/userList'
import userEdit from '@/pages/users/userEdit'
import ticketCreate from '@/pages/tickets/ticketCreate'
import ticketList from '@/pages/tickets/ticketList'
import ticketEdit from '@/pages/tickets/ticketEdit'
import deviceCreate from '@/pages/device/deviceCreate'
import deviceEdit from '@/pages/device/deviceEdit'
import deviceList from '@/pages/device/deviceList'
import categoriesCreate from '@/pages/categories/categoriesCreate'
import categoriesList from '@/pages/categories/categoriesList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/categorieslist/',
      name: 'categorieslist',
      component: categoriesList
    }, 
    {
      path: '/categoriescreate/',
      name: 'categoriescreate',
      component: categoriesCreate
    }, 
    {
      path: '/useredit/',
      name: 'useredit',
      component: userEdit
    },  
    {
      path: '/usercreate',
      name: 'usercreate',
      component: userCreate
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
      path: '/userlist',
      name: 'userlist',
      component: userList
    },
    { 
      path: '/ticketcreate',
      name: 'ticketcreate',
      component: ticketCreate
    },
    { 
      path: '/ticketlist',
      name: 'ticketlist',
      component: ticketList
    },
    { 
      path: '/ticketedit',
      name: 'ticketedit',
      component: ticketEdit
    },
    { 
      path: '/devicecreate',
      name: 'devicecreate',
      component: deviceCreate
    },
    { 
      path: '/devicelist',
      name: 'devicelist',
      component: deviceList
    },
    { 
      path: '/deviceedit',
      name: 'deviceedit',
      component: deviceEdit
    }
  ]
})
