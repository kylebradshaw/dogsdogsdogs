<template lang="pug">
  div
    navbar
    nuxt
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  components: {
    navbar: NavBar
  }
}
</script>


<style lang="stylus">
  html
    height: 100%
    font-family: Roboto, "Helvetica Neue", sans-serif
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  body
    min-height: 100%
</style>
