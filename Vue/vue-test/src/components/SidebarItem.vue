<template>
  <div>
    <!-- 没有子节点 -->
    <template v-if="!item.children">
      <div>
        <a v-if="item.href" target="_blank" :href="item.href">
          <el-menu-item :index="item.index">{{ item[defaultProps.label] }} </el-menu-item>
        </a>
        
        <template v-else>
          <router-link v-if="item.path" :to="item.path">
            <el-menu-item :index="item.index">{{ item[defaultProps.label] }}  </el-menu-item>
          </router-link>
          <el-menu-item v-else :index="item.index">{{ item[defaultProps.label] }}</el-menu-item>
        </template>
      </div>
    </template>

    <!-- 有子节点 -->
    <template v-else>
      <div>
        <el-submenu :index="item.index">
          <template slot="title">
            <span>{{ item[defaultProps.label] }} </span>
          </template>
          <sidebar-item v-for="child in item.children" :key="child.index" :item="child"></sidebar-item>
        </el-submenu>
      </div>
    </template>
    <!-- <el-submenu v-for="item in routes" :key="item.index" :index="item.index">
      <template slot="title">
        <div>{{ item.label }} + {{ item.children }}</div>
      </template>

      <template>
        <div>
          <el-submenu v-for="child in item.children" :key="child.index" :index="child.index">
            <template slot="title">
              <div>{{ child.label }}</div>
            </template>
            <el-menu-item v-for="son in child.children" :key="son.index" :index="son.index">
              <template slot="title">
                <div>{{ son.label }}</div>
              </template>
            </el-menu-item>
          </el-submenu>
        </div>
      </template>
    </el-submenu>-->
  </div>
</template>

<script>
export default {
  name: "SidebarItem",
  inject: {
    defaultProps: {
      default: () => {
        return {
          label: "label",
          children: "children"
        };
      }
    }
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
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>