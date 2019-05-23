<template>
  <div class="home">
    <h1>
      <a href="https://github.com/ff755/vue-kindeditor#readme">vue-kindeditor</a>
    </h1>
    <editor
      id="editor_id"
      height="500px"
      width="100%"
      :content="editorText"
      :afterChange="afterChange()"
      pluginsPath="/static/kindeditor/plugins/"
      :loadStyleMode="false"
      @on-content-change="onContentChange"
    ></editor>
  </div>
</template>
<script>
export default {
  data() {
    return {
      editorText: ""
    };
  },
  methods: {
    onContentChange(val) {
      this.editorText = val;
    },
    afterChange() {}
  }
};
</script>
<style lang="scss">
</style>
