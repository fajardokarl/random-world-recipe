<template>
  <div class="search">
    <SearchHeader />
    <div class="results-container">
      <!-- <div class="results__count">
        <h3>{{this.recipeResults.length || 0}} Results</h3>
      </div> -->
      <div class="recipe-results">
        <FoodCard v-for="recipe in recipeResults" :key="recipe.idMeal"
          :recipeName="recipe.strMeal"
          :imgURL="recipe.strMealThumb"
          :recipeID="recipe.idMeal"
        />
      </div>
    </div>
    
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SearchHeader from '@/components/SearchHeader'
import FoodCard from '@/components/FoodCard'

export default {
  components: {
    FoodCard,
    SearchHeader
  },
  computed: {
    ...mapGetters([
      'recipeResults'
    ]),
  },
  created() {
  },
}
</script>

<style>
.results-container {
  margin-top: 200px ;
}

.results__count {
  /* max-width: 1280px; */
  padding: 20px 30px;
  color: var(--main-dark)
}

.recipe-results {
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 35px;
  padding: 0 30px;
  /* margin: 0 60px; */
}

</style>