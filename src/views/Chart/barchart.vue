<template>
  <bar-chart :chart-data="datacollection" :options="options"></bar-chart>
</template>
<script>
  import BarChart from "@/components/Chart/BarChart.js";
  export default {
    components: {
      BarChart
    },
    data() {
      return {
        datacollection: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
            }
          ]
			  },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: false
          },
          tooltips: {
            enabled: true,
            mode: 'single',
            callbacks: {
              label: function(tooltipItems, data) {
                return '$' + tooltipItems.yLabel;
              }
            }
          },
          responsive: true,
          maintainAspectRatio: false,
          height: 200
        }
      };
    }
  };
</script>