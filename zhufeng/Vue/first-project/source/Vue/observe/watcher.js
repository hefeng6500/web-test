import Dep, { pushTarget, popTarget } from './dep'

let id = 0
class Watcher {
  /**
   * 
   * @param {*} vm 当前组件的实例
   * @param {*} exprOrFn 用户可能传入的是一个表达式，也可能传入的是一个函数
   * @param {*} cb 用户传入的回调函数
   * @param {*} opts 一些其他参数
   */
  constructor(vm, exprOrFn, cb = () => { }, opts) {
    this.vm = vm
    this.exprOrFn = exprOrFn
    if (typeof exprOrFn === 'function') {
      this.getter = exprOrFn
    }
    this.cb = cb
    this.opts = opts
    this.id = id++

    this.get()
  }

  get(){
    // this 指的是当前的 watcher 
    // 渲染 watcher ， Dep.watcher = watcher
    pushTarget(this)

    // 创建 watcher 会默认执行
    this.getter()
    popTarget()
    Dep.target
    debugger
  }

  update(){
    this.get()
  }



}

// 渲染、计算属性、vm.watch 都要用到它

export default Watcher