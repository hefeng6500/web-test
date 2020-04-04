import { observer } from './index'
// 定义响应式数据变化
export function defineReactive(data, key, value) {

  // 如果 value 还是一个对象，需要进行递归劫持
  observer(value)

  // Object.defineProperty 不支持 ie8 及以下浏览器
  Object.defineProperty(data, key, {
    get() {
      console.log("获取数据");
      return value
    },
    set(newVal) {
      console.log("设置数据");
      if (newVal === value) return
      value = newVal
    }
  })
}

class Observer {
  constructor(data) {
    this.walk(data)
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