// 首先看下原生的js的call()
var obj = {
  name: 'Nicholas S.Zakas',
  age: 41,
  from: 'America',
  getName: function (prefix) {
    // console.log(prefix + this.name)
    return prefix + this.name
  }
}

var obj2 = {
  name: 'Evan You',
  age: '35',
  from: 'China'
}

console.log(obj.getName.call(obj2, 'hello, everyone, i am '))
// hello, everyone, i am Evan You

// call()做了什么?
// 1、将调用call的函数的this指向call函数的第一个参数
// 2、将call()第一个参数后的参数作为调用call函数的形参
Function.prototype._call = function (context) {
  var result
  var args = [].slice.apply(arguments, [1])
  context.fn = this
  result = context.fn(...args)
  delete context.fn
  return result
}

// 不使用call函数的实现
Function.prototype._newCall = function (context) {
  var args = []
  var result
  for (var i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }
  context.fn = this
  result = eval('context.fn(' + args + ')')
  delete context.fn
  return result
}

console.log(obj.getName._newCall(obj2, 'hello, everyone, i am '));
// hello, everyone, i am Evan You

// ECMAScript6 的实现
Function.prototype._es6Call = function (context, ...args) {
  var result
  context.fn = this
  result = context.fn(...args)
  delete context.fn
  return result
}

console.log(obj.getName._es6Call(obj2, 'hello, everyone, i am '));
 // hello, everyone, i am Evan You

