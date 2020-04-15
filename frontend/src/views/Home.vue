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
      <b-form-group class="mt-3" label-size="lg" label="Mon humeur" description="C'est le seul champ obligatoire 😉">
        <b-form-radio inline required name="mood" size="lg" v-model="form.mood" value="tres_bien">😀</b-form-radio>
        <b-form-radio inline required name="mood" size="lg" v-model="form.mood" value="bien">🙂</b-form-radio>
        <b-form-radio inline required name="mood" size="lg" v-model="form.mood" value="moyen">😐</b-form-radio>
        <b-form-radio inline required name="mood" size="lg" v-model="form.mood" value="pas_bien">🙁</b-form-radio>
      </b-form-group>

      <b-form-group class="" label-size="lg"
        label="Ton nom"
        description="Pour qu'on puisse agir sur d'éventuelles alertes, mais ce n'est pas obligé du tout !"
      >
        <b-form-input
          v-model="form.name"
          type="text"
          placeholder="Anonymous"
        ></b-form-input>
      </b-form-group>

      <b-form-group class="" label-size="lg" label="Par rapport à la semaine dernière, je vais…">
        <b-form-radio inline name="mood_vs_last_week" v-model="form.mood_vs_last_week" value="same">Pareil</b-form-radio>
        <b-form-radio inline name="mood_vs_last_week" v-model="form.mood_vs_last_week" value="better">Mieux</b-form-radio>
        <b-form-radio inline name="mood_vs_last_week" v-model="form.mood_vs_last_week" value="worse">Moins bien</b-form-radio>
      </b-form-group>

      <b-form-group class="" label-size="lg" label="Mon état de fatigue">
        <b-form-radio inline name="fatigue" v-model="form.fatigue" value="not_tired">Pas fatigué du tout</b-form-radio>
        <b-form-radio inline name="fatigue" v-model="form.fatigue" value="a_little_tired">Un peu fatigué</b-form-radio>
        <b-form-radio inline name="fatigue" v-model="form.fatigue" value="tired">Fatigué</b-form-radio>
        <b-form-radio inline name="fatigue" v-model="form.fatigue" value="very_tired">Très fatigué</b-form-radio>
      </b-form-group>

      <b-form-group class="" label-size="lg" label="Par rapport à la semaine dernière, je suis…">
        <b-form-radio inline name="fatigue_vs_last_week" v-model="form.fatigue_vs_last_week" value="same">Aussi fatigué</b-form-radio>
        <b-form-radio inline name="fatigue_vs_last_week" v-model="form.fatigue_vs_last_week" value="worse">Plus fatigué</b-form-radio>
        <b-form-radio inline name="fatigue_vs_last_week" v-model="form.fatigue_vs_last_week" value="better">Moins fatigué</b-form-radio>
      </b-form-group>

      <b-form-group class="" label-size="lg" label="Ma charge de travail cette semaine a été…">
        <b-form-radio inline name="workload" v-model="form.workload" value="good">Adaptée</b-form-radio>
        <b-form-radio inline name="workload" v-model="form.workload" value="too_much">Trop importante (je me suis senti dépassé.e)</b-form-radio>
        <b-form-radio inline name="workload" v-model="form.workload" value="not_enough">Pas assez importante (je me suis senti désoeuvré.e)</b-form-radio>
      </b-form-group>

      <b-form-group class="" label-size="lg" label="J’ai l’impression de me sentir proche des autres membres de mon équipe projet">
        <b-form-radio inline name="proximity_project" v-model="form.proximity_project" value="very_no">Pas du tout d’accord</b-form-radio>
        <b-form-radio inline name="proximity_project" v-model="form.proximity_project" value="no">Pas d’accord</b-form-radio>
        <b-form-radio inline name="proximity_project" v-model="form.proximity_project" value="yes">D’accord</b-form-radio>
        <b-form-radio inline name="proximity_project" v-model="form.proximity_project" value="very_yes">Tout à fait d’accord</b-form-radio>
      </b-form-group>

      <b-form-group class="" label-size="lg" label="J’ai l’impression de me sentir proche des autres membres de l’équipe Etalab">
        <b-form-radio inline name="proximity_etalab" v-model="form.proximity_etalab" value="very_no">Pas du tout d’accord</b-form-radio>
        <b-form-radio inline name="proximity_etalab" v-model="form.proximity_etalab" value="no">Pas d’accord</b-form-radio>
        <b-form-radio inline name="proximity_etalab" v-model="form.proximity_etalab" value="yes">D’accord</b-form-radio>
        <b-form-radio inline name="proximity_etalab" v-model="form.proximity_etalab" value="very_yes">Tout à fait d’accord</b-form-radio>
      </b-form-group>

      <b-form-group class="" label-size="lg" label="Une idée ? Un problème ? Une suggestion ? Un coup de gueule ? Un haïku ? C'est ici !">
        <b-form-textarea
          v-model="form.thoughts"
          placeholder="Un vieil étang
Une grenouille qui plonge,
Le bruit de l'eau."
          rows="3"
        ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="primary">Envoyer 🚀</b-button>
    </b-form>
  </div>
</template>

<script>
import LGTM from '@/components/LGTM.vue'

const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : ''
const FORM_STRUCTURE = {
  mood: '',
  name: '',
  mood_vs_last_week: '',
  fatigue: '',
  fatigue_vs_last_week: '',
  workload: '',
  proximity_project: '',
  proximity_etalab: '',
  thoughts: ''
}

export default {
  name: 'Home',
  components: { LGTM },
  data () {
    return {
      moodId: '',
      random: this.getRandomString(),
      form: Object.assign({}, FORM_STRUCTURE)
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
        this.form = Object.assign({}, FORM_STRUCTURE)
        this.moodId = ''
      })
    },
    getRandomString () {
      return Math.random().toString(36).replace(/[^a-z]+/g, '')
    }
  }
}
</script>

<style scoped>

</style>
