<template>
  <div class="container">
    <b-form class="pt-2">
      <b-form-group
        label-cols="1"
        label="Du"
      >
        <b-form-datepicker start-weekday="monday" v-model="startDate" :max="new Date()" locale="fr"></b-form-datepicker>
      </b-form-group>
      <b-form-group
        label-cols="1"
        label="Au"
      >
        <b-form-datepicker start-weekday="monday" v-model="endDate" :max="new Date()" locale="fr"></b-form-datepicker>
      </b-form-group>
      <b-button @click.prevent="compute" variant="primary" size="sm">Calculer 🚀</b-button>
    </b-form>
    <b-row v-if="chartIndicators.length" class="mt-4">
      <b-col cols="4" sm="12" md="4" v-for="indic in chartIndicators" :key="indic.$index">
        <BarChart :chart-data="indic"></BarChart>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import BarChart from '@/components/BarChart.vue'

const INDICATORS = {
  mood: '',
  mood_vs_last_week: '',
  fatigue: '',
  fatigue_vs_last_week: '',
  workload: '',
  proximity_project: '',
  proximity_etalab: ''
}
const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : ''

export default {
  name: 'Report',
  components: { BarChart },
  data () {
    return {
      startDate: this.monday(),
      endDate: this.dateToISO(new Date()),
      data: [],
      indicators: Object.assign({}, INDICATORS),
      chartIndicators: []
    }
  },
  computed: {
  },
  methods: {
    computeChartIndicators () {
      this.chartIndicators = Object.keys(this.indicators).map(indic => {
        return {
          labels: this.indicators[indic].map(i => i[indic]),
          datasets: [
            {
              label: indic,
              backgroundColor: '#f87979',
              data: this.indicators[indic].map(i => i.count)
            }
          ]
        }
      })
    },
    monday () {
      const d = new Date()
      const day = d.getDay()
      const diff = d.getDate() - day + (day === 0 ? -6 : 1)
      return this.dateToISO(new Date(d.setDate(diff)))
    },
    dateToISO (date) {
      return date.toISOString().split('T')[0]
    },
    getDataForIndicator (indicator) {
      return this.$http.get(`${BASE_URL}/api/moods/${indicator}?start=${this.startDate}&end=${this.endDate}`).then(res => {
        this.indicators[indicator] = res.body
      })
    },
    getData () {
      return this.$http.get(`${BASE_URL}/api/moods?start=${this.startDate}&end=${this.endDate}`).then(res => {
        this.data = res.body
      })
    },
    compute () {
      Promise.all(Object.keys(INDICATORS).map(indic => {
        return this.getDataForIndicator(indic)
      })).then(() => {
        this.computeChartIndicators()
      })
    }
  },
  mounted () {
    this.compute()
  }
}
</script>
