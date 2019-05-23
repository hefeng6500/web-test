function Vue(){
  console.log(this)
  if(!(this instanceof Vue)){
    throw 'Vue is a constructor and should be called with the `new` keyword'
  }
}

new Vue()