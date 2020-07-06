<template>
  <div>
    <pie-chart
      type="pie"
      :width="500"
      :height="300"
      :labels="datacollection.labels"
      :datasets="datacollection.datasets"
      :options="options"
    ></pie-chart>
    <el-col :span="4"><el-button @click="RandomizeData">Randomize Data</el-button></el-col>
  </div>
</template>
<script>
  import PieChart from "@/components/Chart/ChartJs"
  import { randomInt } from '@/utils'

  export default {
    components: {
      PieChart
    },
    data() {
      return {
        datacollection: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            data: [
              this.createRandom(),
              this.createRandom(),
              this.createRandom(),
              this.createRandom(),
              this.createRandom(),
              this.createRandom(),
              this.createRandom(),
            ],
            backgroundColor: COLORS,
            label: 'Dataset 1'
          }],
			  },
        options: {
          responsive: true,
					legend: {
						position: 'top',
					},
					title: {
						display: true,
						text: 'Chart.js Pie Chart'
					}
        }
      };
    },
    methods: {
      createRandom() {
        return randomInt(0, 50)
      },
      createArrayRandom() {
        let data = []
        for(let i=0; i < 7; i++){
          data.push(this.createRandom())
        }
        return data
      },
      RandomizeData() {
        let datasets = this.datacollection.datasets.map( (el) => ({
          ...el,
          data: this.createArrayRandom()
        }))
        
        this.datacollection.datasets = datasets
      }
    }
  };
  const COLORS = [
		'#4dc9f6',
		'#f67019',
		'#f53794',
		'#537bc4',
		'#acc236',
		'#166a8f',
		'#00a950',
		'#58595b',
		'#8549ba'
	];
</script>