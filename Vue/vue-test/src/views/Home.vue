<template>
  <div>
    <h1>Home</h1>
    <!-- <datePicker
      :options="calendarArr"
      class="calendar"
      @handleClickDay="handleClickDay"
      @handlePrevMonth="handlePrevMonth"
      @handleNextMonth="handleNextMonth"
    />-->
    <el-button type="primary" @click="selectTree">selectTree</el-button>
  </div>
</template>

<script>
import datePicker from "./components/date-picker";

export default {
  name: "date-picker",
  data() {
    return {
      calendarArr: {
        type: "combination",
        headStyle: {
          todayBtn: "right",
          combination: "center",
          checkBtn: "right"
        },
        viewStyle: {
          day: "right"
        },
        calendarData: []
      }
    };
  },
  components: {
    datePicker
  },
  methods: {
    handleClickDay() {
      console.log("handleClickDay");
    },
    handlePrevMonth() {},
    handleNextMonth() {},
    selectTree() {
      this.$router.push("/selectTree");
    }
  }
};
</script>

<style>
</style>