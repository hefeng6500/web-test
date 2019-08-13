<template>
  <div class="header">
    <h1>header</h1>
  </div>
</template>

<script>
  export default {
    name: 'headers'
  }
</script>

<style lang="scss" scoped>
.header{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #999;
  color: #fff;
}
</style>