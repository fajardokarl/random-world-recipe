<template>
  <div id="recipeDetails">
    <LoadingScreen v-if="loading" />
    <SearchHeader />
    <div class="recipe__container">
      <div class="recipe__details">
        <div class="recipe__left">
          <div class="recipe__thumbnail">
            <img :src="selectedRecipeDetails.strMealThumb" alt="">
          </div>
          <div class="recipe__ingredients">
            <h1> {{ selectedRecipeDetails.strMeal }} </h1>
            <h3>Ingredients</h3>
            <!-- replace with ul li -->
              <div v-for="ing in 20" :key=ing> 
                <span v-if="selectedRecipeDetails[`strIngredient${ing}`]">
                  {{ selectedRecipeDetails[`strMeasure${ing}`] }} {{ selectedRecipeDetails[`strIngredient${ing}`]}}
                </span>
              </div>
          </div>
        </div>
        <div class="recipe__right">
          <div class="recipe__instructions">
            <h1> {{ selectedRecipeDetails.strMeal }} </h1>
            <p>{{ selectedRecipeDetails.strInstructions }}</p>
          </div>
          <div class="recipe__tutorial">
            <h2>Video Tutorial</h2>
            <!-- <embed src="" type=""> -->
            <iframe :src="embedYoutube(selectedRecipeDetails.strYoutube)" frameborder="0"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LoadingScreen from '@/components/LoadingScreen'
import SearchHeader from '@/components/SearchHeader'

export default {
  name: 'RecipeDetails',
  components: {
    LoadingScreen,
    SearchHeader
  },
  data() {
    return {
      loading: null,
      imageLoad: false
    }
  },
  watch: {
    selectedRecipeDetails: {
      deep: true,
      immediate: true,
      handler(val) {
        // const recipeID = this.$route.params.recipe
        // if (Object.keys(val).length < 1) {
        //   this.loading = true
        //   this.imageLoad = true
        //   this.selectRecipe(recipeID).then(() => {
        //     this.loading = false
        //   })
        // }
      }
    },
    $route: {
      immediate: true,
      handler(to, from) {
        const recipeID = this.$route.params.recipe
        this.loading = true
        this.selectRecipe(recipeID).then(() => {
          this.loading = false
          this.imageLoad = true
        })
      }
    }
  },
  methods: {
    ...mapActions([
      'selectRecipe',
    ]),
    embedYoutube (val) {
      if (val) {
        return val.replace('watch?v=', 'embed/')
      }
    }
  },
  computed: {
    ...mapGetters([
      'selectedRecipeDetails'
    ]),
  },
  mounted() {
    this.loading = true
  }
}
</script>

<style>
.recipe__container {
  margin-top: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #555;
}

.recipe__details {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 2rem;
  max-width: 1080px;
}

.recipe__thumbnail {
  position: relative;
}

.recipe__thumbnail img {
  width: 100%;
}


.recipe__ingredients ul  {
  padding-left: 20px;
}

.recipe__ingredients, .recipe__instructions p {
  font-size: 20px;
  line-height: 2;
}

.recipe__tutorial {
  display: flex;
  flex-direction: column;
  height: 450px;
  padding: 30px 0;
}

.recipe__tutorial iframe {
  flex-grow: 1;
  position: relative;
  height: 100%;
  width: 100%;
}

</style>