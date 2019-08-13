<template>
  <div>
    <el-container>
      <el-header>
        <header-top/>
      </el-header>
      <el-container>
        <el-aside>
          <sidebar/>
        </el-aside>
        <el-container>
          <breadcrumb class="breadcrumb"/>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HeaderTop from "./HeaderTop";
import Sidebar from "./Sidebar";
import Breadcrumb from "./Breadcrumb";

export default {
  components: {
    HeaderTop,
    Sidebar,
    Breadcrumb
  }
};
</script>

<style lang="scss" scoped>
/deep/ .el-header {
  background: #999;
}
.breadcrumb {
  padding-left: 20px;
  width: 100%;
  border-bottom: 1px solid #ddd;
}
</style>