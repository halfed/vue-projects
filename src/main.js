import Vue from 'vue';
import App from './App';
import router from './router';
import components from './components';
import ability from '@/controllers/ability';
import { abilitiesPlugin } from '@casl/vue';

components.forEach(component => Vue.component(component.name, component));

Vue.config.productionTip = false;
Vue.use(abilitiesPlugin, ability);

/* eslint-disable no-new */
new Vue({
  
  el: '#app',
  router,
  render: h => h(App)
});