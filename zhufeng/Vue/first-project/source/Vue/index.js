import {initState} from './observe/index'

function Vue(options) {
  this._init(options)

}

Vue.prototype._init = function (options) {
  let vm = this
  vm.$options = options

  // MVVM 原理，需要数据初始化
  initState(vm)

}

export default Vue
