import { initState } from './observe/index'
import Watcher from './observe/watcher'

function Vue(options) {
  this._init(options)

}

Vue.prototype._init = function (options) {
  let vm = this
  vm.$options = options

  // MVVM 原理，需要数据初始化
  initState(vm)

  if (vm.$options.el) {
    vm.$mount()
  }

}

Vue.prototype.$mount = function () {
  let vm = this
  let el = vm.$options.el
  el = vm.$el = query(el)


  // 渲染时时通过 watcher 来渲染


  // 更新组件、渲染组件逻辑
  let updateComponent = () => {
    console.log('zhixing');
    // 更新组件
    vm._update()

  }
  // 渲染watcher;
  // 默认调用 updateComponent()
  new Watcher(vm, updateComponent)

}

Vue.prototype._update = function () {
  let vm = this
  let el = vm.$el

  // 循环这个元素将里面的内容换成我们的数据, Vue1.x使用的 createDocumentFragment
  let node = document.createDocumentFragment()
  let firstChild
  while (firstChild = el.firstChild) {
    node.appendChild(firstChild)
  }
  // console.log(node);
  compiler(node, vm)
  el.appendChild(node)

}

function query(el) {
  if (typeof el === 'string') {
    return document.querySelector(el)
  }
  return el
}
// 模板编译基于正则 ?: 匹配不捕获
const defaultRE = /\{\{((?:.|\r?\n)+?)\}\}/g
const util = {
  getValue(vm, expr) {
    let keys = expr.split('.')
    console.log("keys", keys);
    
    return keys.reduce((acc, cur) => {
      acc = acc[cur.replace(/\s+/g,"")]
      return acc
    }, vm)
  },
  compilerText(node, vm) {
    // console.log(node);

    node.textContent = node.textContent.replace(defaultRE, function (...args) {
      console.log(args);
      return util.getValue(vm, args[1])

    })
  }
}

function compiler(node, vm) {
  let childNodes = node.childNodes
  Array.from(childNodes).forEach(child => {
    // 1元素 3文本
    if (child.nodeType === 1) {
      compiler(child, vm)
    } else if (child.nodeType === 3) {
      util.compilerText(child, vm)
    }
  })
}

export default Vue
