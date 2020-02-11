<template>
  <div>
    <div v-for="(item,index) in datas" :key="index">
      <slot name="header" :index="index"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [
        {index: 0, name: 'name0'},
        {index: 1, name: 'name1'}
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>