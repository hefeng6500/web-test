/**
 * 对数组原生api重写
 * push()
 * shift()
 * pop()
 * unshift()
 * reverse()
 * sort()
 * splice()
 */

import { observer } from "./index"

let oldArrayPrototypeMethod = Array.prototype

export let arrayMethods = Object.create(oldArrayPrototypeMethod)
let methods = [
  'push',
  'shift',
  'pop',
  'unshift',
  'reverse',
  'sort',
  'splice'
]

methods.forEach(method => {
  arrayMethods[method] = function (...args) {
    oldArrayPrototypeMethod[method].apply(this, args)

    // 只对新增的属性进行观察，其他的方法没有新增属性
    let inserted
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.splice(2)
      default:
        break;
    }

    // 对数组新增的每一项进行观测
    if (inserted) observerArray(inserted)
    console.log('调用数组更新方法');

  }
})


export function observerArray(inserted) {
  for(let i=0;i<inserted.length;i++){
    observer(inserted[i])
  }
}
