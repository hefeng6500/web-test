<template>
  <div>
    <h1>editor</h1>
    <router-link to="/editor/kindeditor">kindeditor</router-link>|
    <router-link to="/editor/wangeditor">wangeditor</router-link>|
    <router-link to="/editor/ueditor">ueditor</router-link> | 
    <router-link to="/editor/CKEditor5">CKEditor5</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "editor"
};
</script>

<style lang="scss" scoped>
</style>