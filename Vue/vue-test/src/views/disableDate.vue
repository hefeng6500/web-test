<template>
  <div>
    <el-row>
      此示例展示Element UI 组件表格中添加 日期组件 批量设置disableDate的思路，采用focus改变每个 timeDisabled 从而实现日期disabled状态
    </el-row>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column label="新项目进场日期">
        <template slot-scope="scope">
          <div>
            <el-date-picker
              v-model="scope.row.nextWorkDate"
              :picker-options="{disabledDate: disabledDate}"
              @focus="dateFocus(scope.row)"
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { parseTime } from "../utils/parseTime";

export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          circleDate: "2019-01-01 ~ 2019-04-01"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          circleDate: "2019-05-01 ~ 2019-06-01"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          circleDate: "2019-07-01 ~ 2019-08-01"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      timeDisabled: ""
    };
  },
  mounted() {
    this.tableData.forEach(item => {
      if (typeof item.circleDate !== "undefined") {
        let next = new Date(item.circleDate.split(" ~ ")[1]).getTime();
        item.nextWorkDate = parseTime(next);
      } else {
        item.nextWorkDate = parseTime(Date.now());
      }
    });
  },
  methods: {
    dateFocus(row) {
      if (typeof row.circleDate !== 'undefined') {
        this.timeDisabled = row.circleDate.split(" ~ ")[1];
      }
    },
    disabledDate(time) {
      return (
        time.getTime() <
        new Date(this.timeDisabled).getTime() - 24 * 60 * 60 * 1000
      );
      // return time.getTime() < Date.now() - 24 * 60 * 60 * 1000;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>