let id = 0

class Dep {
  constructor() {
    this.id = id++
    this.subs = []
  }

  addSub(watcher) {
    this.subs.push(watcher)
  }

  notify() {
    this.subs.forEach(watcher => watcher.update())
  }
}

// 用来保存当前的 watcher
let stack = []
export function pushTarget(watcher) {
  Dep.target = watcher
  stack.push(watcher)
}

export function popTarget(watcher) {
  debugger
  stack.pop(watcher)
  Dep.target = stack[stack.length - 1]
}

// 用来收集依赖，收集的是一个个 watcher
export default Dep
