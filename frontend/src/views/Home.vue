<template>
  <div class="container mb-3">
    <h1>Comment ça va cette semaine&nbsp;?</h1>
    <div class="success" v-if="moodId">
      <b-alert variant="success" show>
        Merci&nbsp;! On dirait que ça a marché 🤞. Si jamais tu t'es trompé, tu peux réessayer en
        <a @click.prevent.stop="retry" href="">cliquant ici</a>, ça supprimera ton dernier essai. En revanche,
        si tu quittes cette page, plus moyen de revenir en arrière 😉.
      </b-alert>
      <LGTM></LGTM>
    </div>
    <a href="" @click.prevent.stop v-b-toggle.collapse-why variant="primary" v-if="!moodId">Pourquoi ce questionnaire&nbsp;?</a>
    <b-collapse id="collapse-why" class="mt-2" v-if="!moodId">
      <b-card>
        <p class="card-text">
          L'objectif principal de ce questionnaire est de mieux appréhender le moral à Etalab pendant le confinement, semaine par semaine. Un autre objectif est de permettre à chacun et chacune de s'exprimer de manière anonyme si il ou elle le souhaite.
        </p>
        <p class="card-text">
          A travers les résultats, nous cherchons notamment à identifier d'éventuelles baisses de moral collectives, voire individuelles à travers le champ texte libre.
        </p>
        <p class="card-text">
          Idéalement, les résultats du questionnaire peuvent servir de base de discussion pour identifier des actions concrètes à mettre en oeuvre.<br>
        </p>
        <p class="card-text">
          <a href="/report">Une visualisation des réponses agrégées est accessible à tous.</a> Les données quantitatives sont anonymes et les demandes d'aides ou problèmes qui pourraient réidentifier les répondants ne sont pas intégrés dans les résultats agrégés publics.
        </p>
        <p>Les résultats seront lus par la <em>task force</em> animation interne, actuellement composée de Alexandre, Soizic et Olivier. Des éléments précis peuvent être partagés avec Perica en cas de besoin.</p>
      </b-card>
    </b-collapse>
    <b-form @submit.prevent="onSubmit" v-if="!moodId">
      <b-form-group class="mt-3" label-size="lg" label="Mon moral" description="C'est le seul champ obligatoire 😉">
        <b-form-radio inline required name="mood" size="lg" v-model="form.mood" value="tres_bien">😀</b-form-radio>
        <b-form-radio inline required name="mood" size="lg" v-model="form.mood" value="bien">🙂</b-form-radio>
        <b-form-radio inline required name="mood" size="lg" v-model="form.mood" value="moyen">😐</b-form-radio>
        <b-form-radio inline required name="mood" size="lg" v-model="form.mood" value="pas_bien">🙁</b-form-radio>
      </b-form-group>

      <b-form-group class="" label-size="lg"
        label="Besoin d'aide ? Un problème ? Une suggestion ? Un coup de gueule ? C'est ici !"
        description="Ces commentaires ne sont pas publics."
      >
        <b-form-textarea
          v-model="form.thoughts"
          placeholder=""
          rows="3"
        ></b-form-textarea>
      </b-form-group>

      <div>Tu peux t'arrêter ici en cliquant sur Envoyer ou continuer et répondre à un peu plus de questions ⬇️</div>
      <b-button type="submit" variant="primary">Envoyer 🚀</b-button>

      <hr>

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

      <b-form-group class="" label-size="lg" label="Me sentir proche des autres membres de l’équipe Etalab est important pour moi">
        <b-form-radio inline name="proximity_etalab_important" v-model="form.proximity_etalab_important" value="very_no">Pas du tout d’accord</b-form-radio>
        <b-form-radio inline name="proximity_etalab_important" v-model="form.proximity_etalab_important" value="no">Pas d’accord</b-form-radio>
        <b-form-radio inline name="proximity_etalab_important" v-model="form.proximity_etalab_important" value="yes">D’accord</b-form-radio>
        <b-form-radio inline name="proximity_etalab_important" v-model="form.proximity_etalab_important" value="very_yes">Tout à fait d’accord</b-form-radio>
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
