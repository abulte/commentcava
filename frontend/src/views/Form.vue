<template>
  <div class="container mb-3">
    <div v-if="loading" class="d-flex justify-content-center mb-3 align-items-center" style="height: 100vh;">
      <b-spinner variant="primary" label="Loading..."></b-spinner>
    </div>
    <div v-if="!loading">
      <h1 v-html="formStructure.title"></h1>
      <!-- thank you -->
      <div class="success" v-if="moodId">
        <b-alert variant="success" show>
          Merci&nbsp;! On dirait que ça a marché 🤞. Si jamais tu t'es trompé, tu peux réessayer en
          <a @click.prevent.stop="retry" href="">cliquant ici</a>, ça supprimera ton dernier essai. En revanche,
          si tu quittes cette page, plus moyen de revenir en arrière 😉.
        </b-alert>
        <LGTM></LGTM>
      </div>
      <!-- why -->
      <a href="" @click.prevent.stop v-b-toggle.collapse-why variant="primary" v-if="!moodId">Pourquoi ce questionnaire&nbsp;?</a>
      <b-collapse id="collapse-why" class="mt-2" v-if="!moodId">
        <b-card>
          <p class="card-text" v-html="line" v-for="line in formStructure.why" :key="line.$index"></p>
        </b-card>
      </b-collapse>
      <!-- form -->
      <b-form @submit.prevent="onSubmit" v-if="!moodId">
        <!-- form.top -->
        <FormSection :fields="formStructure.top" :form="form.top"></FormSection>
        <!-- fold -->
        <div v-if="hasBelow">Tu peux t'arrêter ici en cliquant sur Envoyer ou continuer et répondre à un peu plus de questions ⬇️</div>
        <b-button type="submit" variant="primary">Envoyer 🚀</b-button>
        <!-- form.below -->
        <hr v-if="hasBelow">
        <FormSection v-if="hasBelow" :fields="formStructure.below" :form="form.below"></FormSection>
        <b-button v-if="hasBelow" type="submit" variant="primary">Envoyer 🚀</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import LGTM from '@/components/LGTM.vue'
import FormSection from '@/components/FormSection.vue'

const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : ''
const FORM_META_STRUCTURE = {
  top: {},
  below: {}
}

export default {
  name: 'Home',
  components: { LGTM, FormSection },
  data () {
    return {
      loading: true,
      moodId: '',
      random: this.getRandomString(),
      form: Object.assign({}, FORM_META_STRUCTURE),
      formStructure: ''
    }
  },
  mounted () {
    this.$http.get(`${BASE_URL}/api/structure`).then(res => {
      this.formStructure = res.body
      this.loading = false
    })
  },
  computed: {
    hasBelow () {
      return this.formStructure.below.length > 0
    }
  },
  methods: {
    onSubmit () {
      const data = Object.assign({}, this.form.top, this.form.below)
      data.random = this.random
      this.$http.post(`${BASE_URL}/api/mood`, data).then(res => {
        this.moodId = res.body.id
      })
    },
    retry () {
      this.$http.delete(`${BASE_URL}/api/mood/${this.moodId}?random=${this.random}`).then(res => {
        this.form = Object.assign({}, FORM_META_STRUCTURE)
        this.moodId = ''
      })
    },
    getRandomString () {
      return Math.random().toString(36).replace(/[^a-z]+/g, '')
    }
  }
}
</script>
