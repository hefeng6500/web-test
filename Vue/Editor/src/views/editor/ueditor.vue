<template>
  <div>
    <h1>
      <a href="https://github.com/caiya/vue-neditor-wrap"> Neditor 基于百度富文本编辑器 vue-neditor-wrap</a>
    </h1>
    <vue-neditor-wrap v-model="content" :config="myConfig" :destroy="false" @ready="ready"></vue-neditor-wrap>

    <hr />
    <div v-html="content"></div>
  </div>
</template>

<script>
import VueNeditorWrap from "vue-neditor-wrap";

export default {
  data() {
    return {
      myConfig: {
        // 如果需要上传功能,找后端小伙伴要服务器接口地址
        serverUrl: "/api/web/upload/ueditor",
        // 你的UEditor资源存放的路径,相对于打包后的index.html
        UEDITOR_HOME_URL: "/NEditor/",
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: 240,
        // 初始容器宽度
        initialFrameWidth: "100%",
        // 关闭自动保存
        enableAutoSave: false
      },
      content: ""
    };
  },
  watch: {
    "content": function (newVal, oldVal) {
      console.log(newVal)
    }
  },
  components: {
    VueNeditorWrap
  },
  mounted() {
    
  },
  methods: {
    ready(){

    }
  }
};
</script>

<style lang="scss" scoped>
</style>