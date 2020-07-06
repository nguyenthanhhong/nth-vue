<template>
  <div>
    <el-checkbox-group v-model="selectedYears">
      <el-checkbox label="2018"></el-checkbox>
      <el-checkbox label="2017"></el-checkbox>
    </el-checkbox-group>
    <line-chart
      type="line"
      :width="500"
      :height="300"
      :labels="['Jan', 'Feb', 'Mar', 'Apr', 'May']"
      :datasets="displayedDatasets"
    ></line-chart>
  </div>
</template>
<script>
  import LineChart from "@/components/Chart/ChartJs";
  export default {
    components: {
      LineChart
    },
    data() {
      return {
        selectedYears: ["2018", "2017"],
        datasets : {
          "2018":{
            label: '2018 Sales',
            borderColor: 'rgba(50, 115, 220, 0.5)',
            backgroundColor: 'rgba(50, 115, 220, 0.1)',
            data: [300, 700, 450, 750, 450]
          },
          "2017":{
            label: '2017 Sales',
            borderColor: 'rgba(255, 56, 96, 0.5)',
            backgroundColor: 'rgba(255, 56, 96, 0.1)',
            data: [600, 550, 750, 250, 700]
          }
        }
      };
    },
    computed: {
      displayedDatasets() {
        return this.selectedYears.map(year => this.datasets[year]);
      }
    },
  };
</script>