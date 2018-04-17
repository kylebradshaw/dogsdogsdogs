<template lang="pug">
  nav.navbar
    .navbar-brand
      nuxt-link(to="/") 🐕&middot;🌭&middot;🐩
    .navbar-menu
      .navbar-end
        nuxt-link.navbar-item(to="/about") About
        nuxt-link.navbar-item(to="/about/dog") My Dog
        nuxt-link.navbar-item(to="/about/cat") My Cat
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="stylus">
  .navbar-brand a
    line-height: 3rem
    padding: 0 1rem
    color: #222
    font-size: 2rem
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2)
  .nuxt-link-exact-active
    border-bottom: 3px solid black
</style>
