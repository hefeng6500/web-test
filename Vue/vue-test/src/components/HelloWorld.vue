<template>
  <div>
    <button @click="btnClick">btn</button>
    <span v-for="(item, index) in testData" :key="index">{{item}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testData: [1, 2, 3]
    };
  },
  methods: {
    btnClick() {
      let data = { ...this.testData };
      data[0] = 9;
      this.testData = data;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>