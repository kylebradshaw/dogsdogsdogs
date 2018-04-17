<template lang="pug">
  section.section
    .container
      .columns.is-gapless
        .column.pet
          span.species(v-if="$route.params.id === 'dog'") 🐺
          span.species(v-if="$route.params.id === 'cat'") 🙀
          span.male(v-if="animal('sex') === 'male'")
            | ♂️
          span.female(v-if="animal('sex') === 'female'")
            | ♀️
        .column
          dl
            dt Name
            dd {{animal('name')}} {{animal('$route.params.id')}}
            dt Age
            dd {{animal('age')}}
            dt Color
            dd {{animal('color')}}
            dt Neutered?
            dd(v-if="animal('neutered')") yes
            dd(v-else="animal('neutered')") no
            dt Parent?
            dd(v-if="animal('parent')") yes
            dd(v-else="animal('parent')") no
        .column.is-four-fifths
</template>

<script>
export default {
  methods: {
    animal(attr) {
      return this.pet[this.$route.params.id][attr]
    }
  },
  data() {
    return {
      pet: {
        dog: {
          name: `Porter`,
          sex: `male`,
          age: 8,
          color: `black`,
          neutered: true,
          parent: false
        },
        cat: {
          name: `MJ`,
          sex: `female`,
          age: 12,
          color: `calico`,
          neutered: true,
          parent: true
        }
      }
    }
  }
}
</script>

<style lang="stylus">
  .male
    font-size: 100px
    color: navy
  .female
    font-size: 100px
    color: magenta
  .male, .female
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.2)
  dt
    font-weight: bold
    font-style: italic
  .species
    display: block
    font-size: 3rem
  .pet
    text-align: center
</style>
