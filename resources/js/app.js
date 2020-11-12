/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import 'es6-promise/auto'  //  Promises are a way to implement async programming in JavaScript(ES6). A Promise will become a container for future value
import axios from 'axios'  //  Axios is a great http client library. 
import Vue from 'vue'
import VueAuth from '@websanova/vue-auth'   // this is A simple light-weight authentication library for Vue.js
import VueAxios from 'vue-axios'      // this is a great http client library
import VueRouter from 'vue-router'   // this is very important to transfer All Pages 
import Index from './Index'     /// this come frome index.js
import auth from './auth'    /// this come frome auth.js
import router from './router'

// Set Vue globally
window.Vue = Vue

// Set Vue router
Vue.router = router
Vue.use(VueRouter)

// Set Vue authentication
Vue.use(VueAxios, axios)
axios.defaults.baseURL = `${process.env.MIX_APP_URL}/api/v1` 
Vue.use(VueAuth, auth)

// Load Index
Vue.component('index', Index)
const app = new Vue({
  el: '#app',
  router
})