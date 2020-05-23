export default Vue => {
  Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
      // 聚焦元素
      el.focus()
    }
  })

  Vue.directive('clickOutside', {
    // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
    bind(el, bindings, vnode) {
      el.handler = e => {
        if (!el.contains(e.target)) {
          let method = bindings.expression
          vnode.context[method]()
        }
      }
      document.addEventListener('click', el.handler)
    },
    // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
    inserted() {

    },
    update() {

    },
    componentUpdated() {

    },
    unbind(el) {
      document.removeEventListener('click', el.handler)
    }
  })
}