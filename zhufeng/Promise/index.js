

const Promise = require('./Promise/index.js')

let promise = new Promise((resolve, reject) => {

  /** 同步Promise */
  // throw new Error('this is a error')
  resolve('data')
  // reject('err')

  /** 异步 Promise */
  // setTimeout(() => {
  //   throw 'err'
  // }, 0);


})

let promise2 = promise.then(res => {
  console.log(res);
  // return res
  throw new Error('this is a error')
  // return res
  /** return Promise */
  // return new Promise((resolve, reject)=>{
  //   resolve(res)
  // })

}, err => {
  console.log(err);

})
