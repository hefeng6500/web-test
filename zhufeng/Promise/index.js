const Promise = require('./Promise/index.js')

let promise = new Promise((resolve, reject) => {
  
  // throw new Error('这是错误哦')
  // resolve('data')
  // reject('data')

  setTimeout(() => {
    reject('data')
  }, 1000);

})

promise.then(res => {
  console.log("resolve", res);

}, err => {
  console.log("reject", err);

})