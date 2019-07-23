import Vue from 'vue';
import './plugins/vuetify';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import router from './router';
import store from './store';
import languages from './languages';

Vue.config.productionTip = true;
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  messages: languages,
});

new Vue({
  router,
  i18n,
  store,
  render: h => h(App),
}).$mount('#app');
