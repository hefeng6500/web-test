const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

class Promise {
  constructor(exector) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined

    const resolve = value => {
      if (this.status === PENDING) {
        this.value = value
        this.status = RESOLVED
      }
    }

    const reject = reason => {
      if (this.status === PENDING) {
        this.reason = reason
        this.status = REJECTED
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
  }
}

module.exports = Promise