import { observer } from './index'
import { arrayMethods, observerArray } from './array'
import Dep from './dep'


// 定义响应式数据变化
export function defineReactive(data, key, value) {

  // 如果 value 还是一个对象，需要进行递归劫持
  observer(value)

  // dep 可以收集依赖
  let dep = new Dep()
  // Object.defineProperty 不支持 ie8 及以下浏览器
  Object.defineProperty(data, key, {
    get() {
      if(Dep.target){
        dep.addSub(Dep.target)
      }
      console.log("获取数据");
      return value
    },
    set(newVal) {
      if (newVal === value) return
      observer(newVal)
      console.log("设置数据");
      value = newVal
      dep.notify()
    }
  })
}

class Observer {
  constructor(data) {
    if (Array.isArray(data)) {
      data.__proto__ = arrayMethods
      observerArray(data) // 深度观测数组里面的每一项
    } else {
      this.walk(data)
    }
  }

  walk(data) {
    let keys = Object.keys(data)
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i]
      let value = data[keys[i]]
      defineReactive(data, key, value)
    }
  }

}

export default Observer