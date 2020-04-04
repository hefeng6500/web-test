import Vue from 'vue'

let vm = new Vue({
  el: '#app',
  data() {
    return {
      msg: 'hello world!',
      school: {
        name: 'hefeng',
        age: 18
      },
      arr: [1, 2, 3]
    }
  },
  computed: {

  },
  watch: {

  }
})

// vm._data.msg = 'learning Vue'
// console.log(vm._data.msg);

vm.msg = 'learning Vue'
console.log(vm.msg);
