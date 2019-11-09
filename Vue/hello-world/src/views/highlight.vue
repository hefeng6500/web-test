<template>
  <div>
    <h1 id="h1">Hello World!</h1>
    <button type="button" @click="btnClick">点击</button>
  </div>
</template>

<script>
import Highlighter from 'web-highlighter';
export default {
  name: "diff",
  data() {
    return {
      data: {
        start: 6,
        end: 8,
        text: "Wo",
        id: 'test'
      }
    };
  },
  methods: {
    btnClick() {
      let highlighter = new Highlighter()
      highlighter.fromStore(6, 8, 'Wo', 'test')
      // var h1 = document.getElementById("h1");
      // var length = h1.textContent.length;
      // var range1 = document.createRange();
      // console.log(range1);
      // range1.selectNode(h1);
      // window.getSelection().addRange(range1);
      // this.modifySelect(length - (this.data.end - 1));

      // window.getSelection().removeAllRanges()
      // var sele = window.getSelection().getRangeAt(0)

      // highlighter.fromRange(window.getSelection().getRangeAt(0))
    },
    modifySelect(times) {
      for (var i = 0; i < times; i++) {
        window.getSelection().modify("extend", "left", "character");
      }
    },
  },
  mounted() {}
};
</script>

<style  scoped>
</style>