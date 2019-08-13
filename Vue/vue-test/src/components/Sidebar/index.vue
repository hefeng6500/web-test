<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
      :collapse="isCollapse"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <sidebar-item v-for="route in routes" :key="route.label" :item="route"></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem.vue'
import {mapState} from 'vuex'

export default {
  name: "sidebar",
  components: {
    SidebarItem,
  },
  data(){
    return {
      routes: [
        {
          id: '1',
          label: '首页',
          icon: 'el-icon-location'
        },
        {
          id: '2',
          label: '前端',
          icon: 'el-icon-location',
          children: [
            {
              id: '21',
              label: 'JavaScript',
              icon: 'el-icon-location',
              children: [
                {
                  id: '211',
                  label: 'dom',
                  icon: 'el-icon-location'
                }
              ]
            },
            {
              id: '22',
              label: 'HTML',
              icon: 'el-icon-location',
            },
            {
              id: '23',
              label: 'CSS',
              icon: 'el-icon-location',
            }
          ]
        }
      ]
    }
  },
  computed: {
    ...mapState({
      isCollapse: (state) =>state.app.sidebar
    })
  },
  props: {
    
  }
};
</script>

<style lang="scss" scoped>
</style>