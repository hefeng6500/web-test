
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
    this.getter()
  }



}

// 渲染、计算属性、vm.watch 都要用到它

export default Watcher