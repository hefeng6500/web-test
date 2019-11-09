<template>
  <div>
    <h1 id="h1">Hello World!</h1>
    <button type="button" @click="btnClick">点击</button>
  </div>
</template>

<script>
import Range from "../utils/range/Range";
export default {
  name: "diff",
  data() {
    return {
      data: {
        start: 6,
        end: 8,
        content: "Wo"
      }
    };
  },
  methods: {
    btnClick() {
      // 1、全部选择，移动至尾部位置
      var h1 = document.getElementById("h1");
      var length = h1.textContent.length;
      var range1 = document.createRange();
      console.log(range1);
      range1.selectNode(h1);
      window.getSelection().addRange(range1);
      this.modifySelect(length - (this.data.end - 1));

      // 2、剪切下range对象，加上标签放回
      var range2 = this.getRange();
      var className = "range_insert";
      range2.applyInlineStyle("span", {
        id: "t01",
        class: className
      });
      range2.select();

      // 3、在新标签后面追加一个 <span id="anchor">0</span>
      var t01 = document.getElementById("t01");
      var frag = document.createDocumentFragment("span");
      debugger
      t01.appendChild(frag)
      // this.insertAfter(frag, t01);

      // var anchor = document.getElementById('anchor')
      // var range3 = document.createRange()
      // range3.selectNode(anchor)
      // window.getSelection().addRange(range3)
    },
    modifySelect(times) {
      for (var i = 0; i < times; i++) {
        window.getSelection().modify("extend", "left", "character");
      }
    },
    getRange() {
      var me = window;
      var range = new Range(me.document);

      var sel = window.getSelection();
      if (sel && sel.rangeCount) {
        var firstRange = sel.getRangeAt(0);
        var lastRange = sel.getRangeAt(sel.rangeCount - 1);
        range
          .setStart(firstRange.startContainer, firstRange.startOffset)
          .setEnd(lastRange.endContainer, lastRange.endOffset);
      }
      return range;
    },
    insertAfter(newElement, targetElement) {
      var parent = targetElement.parentNode;
      if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
      } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
      }
    }
  },
  mounted() {}
};
</script>

<style  scoped>
</style>