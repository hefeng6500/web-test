const Promise = require('./Promise/index.js')

let promise = new Promise((resolve, reject) => {

  // throw new Error('这是错误哦')
  resolve('data')
  // reject('data')

  // setTimeout(() => {
  //   reject('data')
  // }, 1000);

})

let p = promise.then(res => {
  // console.log("resolve", res);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('hello')
    }, 1000);
  })
})

// p.then(res => {
//   console.log("res", res);

// }, err => {
//   console.log("err", err);

// }).then(()=>{

// })
p.then().then().then(data => { 
  console.log(data);
  
}, err => {
  console.log(err);

})

