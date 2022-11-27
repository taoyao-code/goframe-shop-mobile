import App from './App'

import uView from '@/uni_modules/uview-ui'
Vue.use(uView)


import store from '@/store';


let vuexStore = require("@/store/$u.mixin.js");
Vue.mixin(vuexStore);


// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	store,
    ...App
})
app.$mount()
// #endif