<template>
  <el-row>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <sidebar-item v-for="route in routes" :key="route.name" :item="route"  ></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </el-row>
</template>

<script>
import SidebarItem from "./SidebarItem";
export default {
  name: "sidebar",
  provide (){
    return {
      defaultProps: this.defaultProps
    }
  },
  components: {
    SidebarItem
  },
  props: {
    defaultProps: {
      type: Object,
      default: () => {
        return {
          label: "label",
          children: "children"
        };
      }
    },
    routes: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  mounted() {
    // console.log( this.defaultProps )
  }
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo{
  height: 100vh;
}
</style>