<template>
  <div class="app">
    <hello-world>
      <template slot="header" slot-scope="scope">
        <div>
          header
          <h1>{{scope.index}}</h1>
        </div>
      </template>
    </hello-world>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss" scoped>
.app {
  height: 100%;
}
</style>