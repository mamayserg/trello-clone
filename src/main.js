import Vue from 'vue';
import App from './components/app/app';
import { createStore } from './store/store';

Vue.config.productionTip = false
Vue.use(VueMaterial.default)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  store: createStore(),
  template: '<App/>'
})
