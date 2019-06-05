<template>
  <div>
    <el-button type="primary">
      <a href="https://vue-treeselect.js.org/" target="_blank">treeselect</a>
    </el-button>
    id: {{ value }}
    <el-row>
      <el-col :span="8">
        <treeselect
          :multiple="true"
          :options="options"
          :value-consists-of="valueConsistsOf"
          :normalizer="normalizer"
          v-model="value"
        />
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
export default {
  data() {
    return {
      valueConsistsOf: "LEAF_PRIORITY",
      normalizer(node) {
        return {
          id: node.key,
          label: node.name,
          children: node.subOptions
        };
      },
      // define default value
      value: null,
      // define options
      options: [
        {
          key: "company",
          name: "Company 🏢",
          subOptions: [
            {
              key: "team-i",
              name: "Team I 👥",
              subOptions: [
                {
                  key: "person-a",
                  name: "Person A 👱"
                },
                {
                  key: "person-b",
                  name: "Person B 🧔"
                }
              ]
            },
            {
              key: "team-ii",
              name: "Team II 👥",
              subOptions: [
                {
                  key: "person-c",
                  name: "Person C 👳"
                },
                {
                  key: "person-d",
                  name: "Person D 👧"
                }
              ]
            },
            {
              key: "person-e",
              name: "Person E 👩"
            }
          ]
        },
        {
          key: "company2",
          name: "Company2 🏢",
          subOptions: [
            {
              key: "team-i2",
              name: "Team I2 👥",
              subOptions: [
                {
                  key: "person-a2",
                  name: "Person A2 👱"
                },
                {
                  key: "person-b2",
                  name: "Person B2 🧔"
                }
              ]
            },
            {
              key: "team-ii2",
              name: "Team II2 👥",
              subOptions: [
                {
                  key: "person-c2",
                  name: "Person C2 👳"
                },
                {
                  key: "person-d2",
                  name: "Person D2 👧"
                }
              ]
            },
            {
              key: "person-e2",
              name: "Person E2 👩"
            }
          ]
        }
      ]
    };
  },
  components: {
    Treeselect
  },
};
</script>

<style lang="scss" scoped>
</style>