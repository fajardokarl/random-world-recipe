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
            <h2> {{ selectedRecipeDetails.strMeal }} </h2>
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
            <h2>Instruction</h2>
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
    $route: {
      immediate: true,
      handler(to, from) {
        const recipeID = this.$route.params.recipe
        this.loading = true
        this.selectRecipe(recipeID).then(() => {
          this.loading = false
          this.imageLoad = true
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

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
      'selectedRecipeDetails',
      'getActiveQuery'
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

.recipe__ingredients h2 {
  display: none;
}

.recipe__instructions h2 {
  margin-top: 45px;
}

.recipe__tutorial {
  display: flex;
  flex-direction: column;
  height: 450px;
  padding: 30px 0;
}

.recipe__tutorial h2 {
  margin-bottom: 20px;
}

.recipe__tutorial iframe {
  flex-grow: 1;
  position: relative;
  height: 100%;
  width: 100%;
}

@media (max-width: 480px) {
  .recipe__details {
    grid-template-columns: 1fr;
    margin: 15px;
  }

  .recipe__instructions h1 {
    display: none;
  }
  
  .recipe__ingredients h2 {
    display: inline-block;
  }
}

</style>