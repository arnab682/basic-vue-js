// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

window.jQuery = window.$ = require('jquery')

// import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.min.js';

Vue.config.productionTip = false

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import { routes } from './router/index'
// import { routes } from 'https://unpkg.com/vue-router@3'

const router = new VueRouter({
  /* mode: 'history'. */
  routes
})

import Vuex from 'vuex'

Vue.use(Vuex)

// import {storage} from './store/index'
import { storage } from './store/index'

const store = new Vuex.Store(storage)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, store,
  components: { App },
  template: '<App/>'
})
