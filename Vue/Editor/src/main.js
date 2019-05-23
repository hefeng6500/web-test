import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './stores/store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

/** 使用VueKindEditor  */
import VueKindEditor from 'vue-kindeditor'
import 'kindeditor/kindeditor-all-min.js'
import 'kindeditor/themes/default/default.css'

import CKEditor from '@ckeditor/ckeditor5-vue'

Vue.use(VueKindEditor)
Vue.use(CKEditor)


Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
