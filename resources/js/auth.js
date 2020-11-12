
import bearer from '@websanova/vue-auth/drivers/auth/bearer'
import axios from '@websanova/vue-auth/drivers/http/axios.1.x'
import router from '@websanova/vue-auth/drivers/router/vue-router.2.x'

/**
 * Authentication configuration, some of the options can be override in method calls
 * 
 * this page is a relation between Vue with Laravel Controller
 * 
 */
const config = {
  auth: bearer,
  http: axios,
  router: router,
  tokenDefaultName: 'laravel-jwt-auth',
  tokenStore: ['localStorage'],
  rolesVar: 'role', //User model field which contains the user role details.

  // API endpoints used in Vue Auth.
  registerData: {
    url: 'auth/register', 
    method: 'POST', 
    redirect: '/admin'
  },
  
  logoutData: {
    url: 'auth/logout', 
    method: 'POST', 
    redirect: '/', 
    makeRequest: true
  },
  fetchData: {
    url: 'auth/user', 
    method: 'GET', 
    enabled: true
  },
  refreshData: {
    url: 'auth/refresh', 
    method: 'GET', 
    enabled: true, 
    interval: 30
  }
}
export default config


//   write npm install vue-router
//   to Router 
//and its verry nedd

