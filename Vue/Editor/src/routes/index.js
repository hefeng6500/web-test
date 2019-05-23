import Vue from 'vue'
import Router from 'vue-router'

import index from '../views/index.vue'
import editor from '../views/editor/index.vue'
import kindeditor from '../views/editor/kindeditor.vue'
import wangeditor from '../views/editor/wangeditor.vue'
import ueditor from '../views/editor/ueditor.vue'
import CKEditor5 from '../views/editor/CKEditor5/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/editor',
      name: 'editor',
      redirect: {name: 'kindeditor'},
      component: editor,
      children: [
        {
          path: 'kindeditor',
          name: 'kindeditor',
          component: kindeditor
        },
        {
          path: 'wangeditor',
          name: 'wangeditor',
          component: wangeditor
        },
        {
          path: 'ueditor',
          name: 'ueditor',
          component: ueditor
        },
        {
          path: 'CKEditor5',
          name: 'CKEditor5',
          component: CKEditor5
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
