<template>
  <div>
    <div v-click-outside="blur">
      <input type="text" v-focus @focus="focus"/>
      <el-button v-show="visible" type="primary">确定</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "directives",
  data() {
    return {
      visible: true,
      input: ""
    };
  },
  methods: {
    blur(){
      this.visible = false
    },
    focus(){
      this.visible = true
    }
  }
};
</script>

<style>
</style>