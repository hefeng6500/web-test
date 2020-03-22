const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

class Promise {
  constructor(exector) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined

    // 成功存放的数组
    this.onResolvedCallbacks = [];
    // 失败存放法数组
    this.onRejectedCallbacks = [];

    const resolve = value => {
      if (this.status === PENDING) {
        this.value = value
        this.status = RESOLVED
        this.onResolvedCallbacks.forEach(fn => fn())
      }
    }

    const reject = reason => {
      if (this.status === PENDING) {
        this.reason = reason
        this.status = REJECTED
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }

    try {
      exector(resolve, reject)
    } catch (e) {
      console.log('try catch', e);
    }
  }

  then(onfulfilled, onrejected) {
    if (this.status === RESOLVED) {
      onfulfilled(this.value)
    }
    if (this.status === REJECTED) {
      onrejected(this.reason)
    }

    if(this.status === PENDING){
      this.onResolvedCallbacks.push(()=>{
        onfulfilled(this.value)
      })
      this.onRejectedCallbacks.push(()=>{
        onrejected(this.reason)
      })
    }
  }
}

module.exports = Promise