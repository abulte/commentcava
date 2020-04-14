<template>
  <img v-if="image.images" :src="image.images.fixed_height.url">
</template>

<script>

export default {
  name: 'LGTM',
  data () {
    return {
      image: {},
      limit: 1,
      // what giphy has to offer
      maxResults: 100,
      searches: ['clap clap', 'well done']
    }
  },
  computed: {
    query () {
      return this.searches[this.getRandomInt(this.searches.length)]
    },
    offset () {
      return this.page * this.limit
    },
    page () {
      return this.getRandomInt(this.maxResults / this.limit)
    }
  },
  methods: {
    getRandomInt (max) {
      return Math.floor(Math.random() * Math.floor(max))
    },
    shuffle (array) {
      return array.sort(() => Math.random() - 0.5)
    }
  },
  mounted () {
    const apiKey = '0aqJyd4OFUcq2tZ3tgAvDSC02DnEBgds'
    this.$http.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${this.query}&offset=${this.offset}&limit=${this.limit}`).then(res => {
      return res.json()
    }).then(res => {
      this.image = res.data.length > 0 ? res.data[0] : {}
    })
  }
}
</script>

<style>
</style>
