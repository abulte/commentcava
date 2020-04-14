<template>
  <div class="container">
    <h1>Comment ça va cette semaine&nbsp;?</h1>
    <div class="success" v-if="moodId">
      <b-alert variant="success" show>
        Merci&nbsp;! On dirait que ça a marché 🤞. Si jamais tu t'es trompé, tu peux réessayer en
        <a @click.stop="retry" href="">cliquant ici</a>, ça supprimera ton dernier essai. En revanche,
        si tu quittes cette page, plus moyen de revenir en arrière 😉.
      </b-alert>
      <LGTM></LGTM>
    </div>
    <b-form @submit.prevent="onSubmit" v-if="!moodId">
      <b-form-group label="Mon humeur">
        <b-form-radio required name="mood" size="lg" v-model="form.mood" value="tres_bien">😀</b-form-radio>
        <b-form-radio required name="mood" size="lg" v-model="form.mood" value="bien">🙂</b-form-radio>
        <b-form-radio required name="mood" size="lg" v-model="form.mood" value="moyen">😐</b-form-radio>
        <b-form-radio required name="mood" size="lg" v-model="form.mood" value="pas_bien">🙁</b-form-radio>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Envoyer 🚀</b-button>
    </b-form>
  </div>
</template>

<script>
import LGTM from '@/components/LGTM.vue'

const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : ''

export default {
  name: 'Home',
  components: { LGTM },
  data () {
    return {
      moodId: '',
      random: this.getRandomString(),
      form: {
        mood: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.form.random = this.random
      this.$http.post(`${BASE_URL}/api/mood`, this.form).then(res => {
        this.moodId = res.body.id
      })
    },
    retry () {
      this.$http.delete(`${BASE_URL}/api/mood/${this.moodId}?random=${this.random}`).then(res => {
        // FIXME:
        this.form = {}
        this.moodId = ''
      })
    },
    getRandomString () {
      return Math.random().toString(36).replace(/[^a-z]+/g, '')
    }
  }
}
</script>
