
import VueRouter from 'vue-router'  //  this is very important to router 
// Pages    they are all page to show for user
import Home from './pages/Home'
import Register from './pages/Register'

import admin from './pages/admin'
import Login from './pages/Login'

// Routes
const routes = [  // in above to url in browser we must / .... or  /register
    {
        path: '/admin',
        name: 'admin',
        component: admin,
        meta: {
          auth: undefined
        }
      },
    {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      auth: undefined
    }
  },
  
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      auth: false
    }
  },
  
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      auth: false
    }
  }
  
]
const router = new VueRouter({
  history: true,
  mode: 'history',
  routes,
})
export default router

