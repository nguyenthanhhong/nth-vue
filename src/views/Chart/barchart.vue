<template>
  <div>
    <el-tabs v-model="activeName">
        <el-tab-pane label="Bar Chart" name="first">          
          <bar-chart
            type="bar"
            :width="500"
            :height="300"
            :labels="datacollection.labels"
            :datasets="datacollection.datasets"
            :options="options"
          ></bar-chart>
        </el-tab-pane>
        <el-tab-pane label="Horizontal Bar Chart" name="second">
          <bar-chart
            type="horizontalBar"
            :width="500"
            :height="300"
            :labels="datacollection.labels"
            :datasets="datacollection.datasets"
            :options="options"
          ></bar-chart>
        </el-tab-pane>
    </el-tabs>
    <el-col :span="4"><el-button @click="RandomizeData">Randomize Data</el-button></el-col>
    <el-col :span="4"><el-button @click="AddDataset">Add Dataset</el-button></el-col>
    <el-col :span="4"><el-button @click="RemoveDataset">Remove Dataset</el-button></el-col>
  </div>
</template>
<script>
  import BarChart from "@/components/Chart/ChartJs"
  import { randomInt } from '@/utils'
  
  export default {
    components: {
      BarChart
    },
    data() {
      return {
        activeName: 'first',
        datacollection: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              data: this.createArrayRandom()
            },
            {
              label: 'Data Two',
              backgroundColor: 'rgb(54, 162, 235)',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              data: this.createArrayRandom()
            }
          ]
			  },
        options: {
          responsive: true,
					legend: {
						position: 'top',
					},
					title: {
						display: true,
						text: 'Chart.js Bar Chart'
					}
        }
      };
    },
    methods: {
      createRandom() {
        return randomInt(-50, 50)
      },
      createArrayRandom() {
        let data = []
        for(let i=0; i < 12; i++){
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
      },
      AddDataset() {
        let dsColor = COLORS[Math.round(randomInt(0,9))]
        let data = this.createArrayRandom();
        let dataSet1 = {
          label: 'Dataset ' + (this.datacollection.datasets.length + 1),
          backgroundColor: dsColor,
          borderWidth: 1,
          data: data
        }
        this.datacollection.datasets.push(dataSet1)
      },
      RemoveDataset() {
        this.datacollection.datasets.pop()
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