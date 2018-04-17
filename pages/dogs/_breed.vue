<template lang="pug">
  section.section
    .container
      .portrait
        nuxt-link(ref="prev" class="toggle" :to="`/dogs/${dogIndex.prev}` || 'wolfhound'") &laquo;
        .cover
          img(:src="image" :alt="name")
        nuxt-link(ref="next" class="toggle" :to="`/dogs/${dogIndex.next}` || 'affenpinscher'") &raquo;
      h2.is-size-2 {{name.toUpperCase()}}
</template>

<script>
import axios from 'axios'
export default {
  async asyncData ({params}) {
    const { data } = await axios.get(`https://dog.ceo/api/breed/${params.breed}/images/random`)
    return { image: data.message, name: params.breed }
  },
  computed: {
    dogIndex() {
      return this.$store.getters.dogByIndex(this.$route.params.breed);
    }
  },
  mounted() {
    window.addEventListener('keyup', (e) =>  {
      if(this.$refs.prev && this.$refs.next) {
        switch(e.keyCode) {
          case 37: //left
            this.$refs.prev.$el.click();
            break;
          case 39: //right
            this.$refs.next.$el.click();
            break;
          default:
        }
      }
    });
  }
}
</script>

<style lang="stylus" scoped>
.toggle
  font-size: 70px
  padding: 0 10px
  display: inline-block
  text-align: center
img
  height: 220px
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.1)
  border: 1px solid rgba(255, 255, 255, 0.95)
.cover
  width: 360px
  object-fit: cover
  text-align: center
  display: inline-block
.portrait
  margin: 10% auto 0
  display: flex
  align-items: center
  justify-content center
  flex-direction: row
h2
  text-align: center;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1)
</style>
