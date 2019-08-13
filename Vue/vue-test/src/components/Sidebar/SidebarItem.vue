<template>
  <div>
    <!-- 没有子节点 -->
    <template v-if="!item.children">
      <div>
        <el-menu-item>
          <i :class="item.icon"></i>
          <span slot="title">{{ item.label }}</span>
        </el-menu-item>
      </div>
    </template>

    <!-- 有子节点 -->
    <template v-else>
      <div>
        <el-submenu :index="item.id">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{ item.label }} </span>
          </template>
          <sidebar-item v-for="route in item.children" :key="route.id" :item="route"></sidebar-item>
        </el-submenu>
      </div>
    </template>


  </div>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>