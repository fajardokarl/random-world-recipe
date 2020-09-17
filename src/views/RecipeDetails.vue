<template>
  <div id="recipeDetails">
    <transition name="fade">
      <LoadingScreen v-if="loading" />
    </transition>

    <div v-for="ing in 20" :key=ing>
      {{ selectedRecipeDetails[`strMeasure${ing}`] }} ---> {{ selectedRecipeDetails[`strIngredient${ing}`]}}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LoadingScreen from '@/components/LoadingScreen'

export default {
  name: 'RecipeDetails',
  components: {
    LoadingScreen
  },
  data() {
    return {
      loading: true
    }
  },
  watch: {
    selectedRecipeDetails (val) {
      console.log(val) // for testing
    },
  },
  methods: {
    ...mapActions([
      'selectRecipe'
    ])
  },
  computed: {
    ...mapGetters([
      'selectedRecipeDetails'
    ])
  },
  mounted() {
    console.log('loading')
    this.loading = true

    const recipeID = this.$route.params.recipe
    this.selectRecipe(recipeID).then(() => {
      this.loading = false
      console.log('done loading')
    })
  }
}
</script>

<style>
  .loading-screen {
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: 1000;
    background: red;
    top: 0;
    left: 0;
  }
</style>