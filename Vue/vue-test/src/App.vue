<template>
  <div class="app">
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
  export default {
    name: 'app',
    components: {
      HelloWorld
    }
  }
</script>

<style lang="scss" scoped>
.app{
  height: 100%;
}
</style>