<template>
  <div class="about">
    <h1>This is an SEARCH page</h1>
    <input
      type="text"
      v-model="searchString"
      @keyup.enter="handleOnSearch"
    >
    <button
      @click="handleOnSearch"
    >
      SEARCH
    </button>

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
    <hr />
    <div v-for="recipe in recipeResults" :key="recipe.idMeal">
      {{ recipe.strMeal }} 
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SearchBy from '@/components/SearchBy'

export default {
  components: {
    SearchBy
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
        console.log(to)
        this.activeQuery = to.query.by
        this.searchString = this.$route.params.searchString
        this.oldSearchString = this.searchString

        console.log(this.activeQuery)

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
      'searchRecipeByIng'
    ]),
    handleOnSearch () {
      if (this.oldSearchString !== this.searchString) {
        this.$router.push({name: 'Search', params: { searchString: this.searchString}, query: {by: this.activeQuery} }).catch(()=>{})
        this.oldSearchString = this.searchString
        this.searchRecipeByName(this.searchString)
      }
    },
    
  },
  computed: mapGetters([
    'recipeResults'
  ]),
  created() {
    // console.log('ok', this.searchString)
  },
}
</script>

<style>


.search-by {
  display: flex;
  justify-content: left;
}
/* 
.search-by__searchables {
} */
</style>