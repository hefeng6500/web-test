<template>
  <div class="home">
    <Tree :data="data1"></Tree>
  </div>
</template>

<script>
import Tree from '../components/tree/tree'
export default {
  components: {
    Tree
  },
  data() {
    return {
      data1: [
        {
          title: "广东省",
          expand: true,
          children: [
            {
              title: "深圳",
              expand: true,
              children: [
                {
                  title: "福田区"
                },
                {
                  title: "南山区"
                }
              ]
            },
            {
              title: "广州",
              expand: true,
              children: [
                {
                  title: "白云区"
                },
                {
                  title: "天河区"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>

