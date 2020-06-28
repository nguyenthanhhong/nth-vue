import {
    Bar,
    mixins
  } from 'vue-chartjs'
  
  export default {
    name: 'BarChart',
    extends: Bar,
    // mixins: [mixins.reactiveProp],
    props: ['chartData', 'options'],
    // data() {
    //   return {
    //     options: {
    //       responsive: true,
    //       maintainAspectRatio: false
    //     }
    //   }
    // },
    mounted() {
      this.renderChart(this.chartdata, this.options)
    }
  }