import Vue from 'vue';
import App from './App.vue';

// import axios from 'axios';


import Vant from 'vant';
import 'vant/lib/index.css';

import router from './router';

import waterfall from "vue-waterfall2";




Vue.use(waterfall);
Vue.use(Vant)
Vue.config.productionTip = false

require('./mock.js')
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
