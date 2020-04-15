<script>
import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Bar,
  props: ['data'],
  mixins: [reactiveProp],
  mounted () {
    const options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
    this.renderChart(this.chartData, options)
  }
}
</script>
