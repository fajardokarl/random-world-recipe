<template>
  <div class="search">
    <!-- <input
      type="text"
      v-model="searchString"
      @keyup.enter="handleOnSearch"
    >
    <button
      @click="handleOnSearch"
    >
      SEARCH
    </button> -->
    <div class="header__container">
      <div class="header__interactions">
        <img class="header__icon" src="@/assets/undraw_cooking_lyxy.svg" alt="">
        <div class="header__input-container">
          <input
            class="header__input"
            type="text"
            v-model="searchString"
            @keyup.enter="handleOnSearch"
          >
          <button class="header__search-btn" @click="handleOnSearch">
            <img src="@/assets/Icon - Search - Sharp.svg">
          </button>
        </div>
        <div class="header__random-container">
          <button class="header__random">
            Go Random
          </button>
        </div>
      </div>
      <div class="search-by">
        <SearchBy
          displayText="Recipe Name"
          query="recipe"
          :searchString="oldSearchString"
          class='search-by__searchables'
          :class="{isActive: activeQuery === 'recipe'}"
        />

        <SearchBy
          displayText="Area"
          query="area"
          :searchString="oldSearchString"
          class='search-by__searchables'
          :class="{isActive: activeQuery === 'area'}"
        />

        <SearchBy
          displayText="Category"
          query="category"
          :searchString="oldSearchString"
          class='search-by__searchables'
          :class="{isActive: activeQuery === 'category'}"
        />

        <SearchBy
          displayText="Ingredient"
          query="ingredient"
          :searchString="oldSearchString"
          class='search-by__searchables'
          :class="{isActive: activeQuery === 'ingredient'}"
        />
      </div>
    </div>
    <hr />
    
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
import SearchBy from '@/components/SearchBy'
import FoodCard from '@/components/FoodCard'

export default {
  components: {
    SearchBy,
    FoodCard
  },
  data() {
    return {
      searchString: this.$route.params.searchString,
      activeQuery: 'recipe',
      oldSearchString: ''
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        this.activeQuery = to.query.by
        this.searchString = this.$route.params.searchString
        this.oldSearchString = this.searchString

        switch(this.activeQuery) {
          case 'recipe':
            this.searchRecipeByName(this.oldSearchString)
            break
          
          case 'area':
            this.searchRecipeByArea(this.oldSearchString)
            break
          
          case 'category':
            this.searchRecipeByCat(this.oldSearchString)
            break

          case 'ingredient':
            this.searchRecipeByIng(this.oldSearchString)
            break
        }
      }
    }
  },
  methods: {
    ...mapActions([
      'searchRecipeByName',
      'searchRecipeByArea',
      'searchRecipeByCat',
      'searchRecipeByIng',
    ]),
    handleOnSearch () {
      if (this.oldSearchString !== this.searchString) {
        this.$router.push({name: 'Search', params: { searchString: this.searchString}, query: {by: this.activeQuery} }).catch(()=>{})
        this.oldSearchString = this.searchString
      }
    },
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

.header__container {
  position: fixed;
  z-index: 20;
  width: 100%;
  min-height: 200px;
  background: #FEFDF8;
  top: 0;
  left: 0;
}

.header__interactions {
  padding-top: 30px;
  display: grid;
  grid-template-columns: 100px 3fr 2fr;
  grid-column-gap: 15px;
  align-items: center;
}

.header__icon {
  max-width: 80px;
  margin-bottom: 20px;
}

.header__input-container {
  /* display: flex;
  justify-content: space-between; */
  position: relative;
}

.header__input {
  padding: 8px;
  font-size: 22px;
  border: solid 2px var(--main-dark);
  border-radius: 5px; 
  width: calc(100% - 55px);
  flex: 4;
}

.header__input:focus {
  outline: none !important;
  border: solid 2px var(--accent-color);
}

.header__search-btn {
  position: absolute;
  display: flex;
  align-items: center;
  right: 0;
  top: 0;
  height: 45px;
  padding: 8px 18px;
  border-radius: 0 5px 5px 0;
  background: var(--accent-color);
  border: none;
  cursor: pointer;
}

.header__random-container {
  display: flex;
  justify-content: flex-end;
}

.header__random {
  align-items: center;
  right: 0;
  top: 0;
  height: 45px;
  padding: 8px 18px;
  border-radius: 50px;
  background: #fff;
  border: 3px solid var(--accent-color);
  color: var(--accent-color);
  font-weight: 800;
  cursor: pointer;
  transition: background 400ms ease-in-out;
  line-break: none;
}

.header__random:hover {
  background: #FFFBE7 !important;
}

.search-by {
  display: flex;
  justify-content: left;
  position: absolute;
  bottom: 0;
}

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
.header__interactions, .search-by {
  margin: 0 30px;
}

</style>