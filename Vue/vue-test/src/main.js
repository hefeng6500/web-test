import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './styles/reset.css'

Vue.use(ElementUI)
// Vue.use(iView);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
