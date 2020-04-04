import Observer from './Observer'

export function initState(vm) {
  let opts = vm.$options

  if (opts.data) {
    initData(vm)
  }
  if (opts.computed) {
    initComputed()
  }
  if (opts.watch) {
    initWatch()
  }
}

export function observer(data) {
  // data 不是对象或者为 null
  if (typeof data !== 'object' || data === null) {
    return
  }
  return new Observer(data)

}

function proxy(vm, source, key) {
  Object.defineProperty(vm, key, {
    get() {
      return vm[source][key]
    },
    set(newVal) {
      vm[source][key] = newVal
    }
  })
}

function initData(vm) {
  // 对用户插入的数据使用 Object.defineProperty() 重新定义
  let data = vm.$options.data
  data = vm._data = typeof data === 'function' ? data.call(vm) : data || {}

  // 将 vm.data.msg 代理给 vm.msg
  for (let key in data) {
    proxy(vm, '_data', key)
  }

  // 观察数据
  observer(vm._data)
}

function initComputed() {

}

function initWatch() {

}


