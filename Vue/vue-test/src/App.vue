<template>
  <div>
    <el-row>
      <el-col :span="4">
        <sidebar :routes="data" :defaultProps="defaultProps"/>
      </el-col>
      <el-col :span="20">
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Sidebar from "./components/Sidebar";
import router from "./routes/index.js";

export default {
  components: {
    Sidebar
  },
  data() {
    return {
      defaultProps: {
        label: "title",
        children: "children"
      },
      data: [
        {
          name: "sysManage",
          title: "系统管理",
          index: "1",
          path: "/sysManage",
          children: [
            {
              name: "userManage",
              title: "用户管理",
              index: "1-1",
              path: "/sysManage/userManage"
            },
            {
              name: "roleManage",
              title: "角色管理",
              index: "1-2",
              path: "/sysManage/roleManage",
              children: [
                {
                  name: "inRole",
                  title: "内部角色",
                  index: "1-2-1",
                  path: "/sysManage/roleManage/inRole"
                },
                {
                  name: "outRole",
                  title: "外部角色",
                  index: "1-2-2",
                  path: "/sysManage/roleManage/outRole"
                }
              ]
            }
          ]
        },
        {
          name: "orderManage",
          title: "订单管理",
          index: "2",
          path: "/orderManage"
        }
      ]
    };
  },
  mounted() {
    this.renderRouter();
  },
  methods: {
    async renderRouter() {
      const accessRoutes = await this.$store.dispatch(
        "generateRoutes",
        this.data
      );
      console.log(router);
      console.log(accessRoutes);
      router.addRoutes(accessRoutes);
      this.data = this.$store.state.routes
    }
  }
};
</script>
<style lang='scss'>
</style>
