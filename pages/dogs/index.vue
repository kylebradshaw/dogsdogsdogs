<template lang="pug">
  section.section
    .container
      h1.is-size-3 Dog Breeds
      ul
        li(v-for="breed in breeds" :key="breed" class="breed")
          nuxt-link(:to="`dogs/${breed}`") {{breed}}
</template>

<script>
import breedsData from '../../data/breeds';
// import axios from 'axios'

export default {
  data() {
    return {
      breeds: breedsData
    }
  }
  // async asyncData ({store}) {
  //   const { data } = await axios.get(`https://dog.ceo/api/breeds/list`)
  //   store.commit('add', data.message);
  //   return { breeds: data.message }
  // }
}

</script>

<style lang="stylus">
  .container
    margin: 20px
  ul
    list-style-type: none
    li
      display: inline-block
      margin: 10px
      border: 1px solid aliceblue
      border-radius: 3px
      a
        padding: 4px
        display: block
        &:hover
          background-color: aliceblue
          text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.1)
</style>
