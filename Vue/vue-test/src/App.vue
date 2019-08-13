<template>
  <div class="app">
    <Layout />
  </div>
</template>

<script>
import Layout from '@/components/Layout'
  export default {
    name: 'app',
    components: {
      Layout
    }
  }
</script>

<style lang="scss" scoped>
.app{
  height: 100%;
}
</style>