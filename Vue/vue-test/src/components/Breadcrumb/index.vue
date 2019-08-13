<template>
  <div>
    <i class="el-icon-d-arrow-left" @click="changeCollapse"></i>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">活动管理</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
// import {mapState, mapActions} from 'vuex'

export default {
  name: "Breadcrumb",
  methods: {
    changeCollapse(){
      this.$store.dispatch("changeSidebar")
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/.el-breadcrumb {
  height: 40px;
  line-height: 40px;
  float: left;
}
[class^='el-icon-'] {
  float: left;
  height: 40px;
  line-height: 40px;
  margin-right: 20px;
  cursor: pointer;
}
</style>