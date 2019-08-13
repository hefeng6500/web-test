import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store/index'

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
