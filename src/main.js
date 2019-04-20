/* import css */
import '~/style/reset.css';
import '~/style/globalConfig.css';
import '~/style/override.css';
import '~/style/common.css';

/* import vue */
import Vue from 'vue';
import App from '~/App.vue';
import VueCookie from 'vue-cookie/src/vue-cookie';
Vue.use(VueCookie);

/* vuex & vue-router */
import store from '~/store';
import router from '~/router/router.js';

/* notification */
import notifications from 'vue-notification';
Vue.use (notifications);

/* polyfill */
import ES6Promise from 'es6-promise';
ES6Promise.polyfill()

/* import external module */
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render : h => h(App)
}).$mount('#app')
