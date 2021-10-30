<template>
  <div class="header__container">
    <div class="header__interactions">
      <a class="header__back-home" href="/">
        <img
          class="header__icon"
          src="@/assets/undraw_cooking_lyxy.svg"
          alt="icon"
        >
      </a>
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
        <button class="header__random" @click="getRandomRecipe">
          Go Random
        </button>
      </div>
    </div>
    <div class="search-by" v-if="$route.name === 'Search'">
      <SearchBy
        displayText="Recipe Name"
        query="recipe"
        :searchString="oldSearchString"
        class='search-by__searchables'
        :class="{isActive: getActiveQuery === 'recipe'}"
      />

      <SearchBy
        displayText="Area"
        query="area"
        :searchString="oldSearchString"
        class='search-by__searchables'
        :class="{isActive: getActiveQuery === 'area'}"
      />

      <SearchBy
        displayText="Category"
        query="category"
        :searchString="oldSearchString"
        class='search-by__searchables'
        :class="{isActive: getActiveQuery === 'category'}"
      />

      <SearchBy
        displayText="Ingredient"
        query="ingredient"
        :searchString="oldSearchString"
        class='search-by__searchables'
        :class="{isActive: getActiveQuery === 'ingredient'}"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SearchBy from './SearchBy'


export default {
  name: "SearchHeader",
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
        this.handleActiveQuery(to.query.by ?? 'recipe')
        this.searchString = this.$route.params.searchString
        this.oldSearchString = this.searchString

        switch(this.getActiveQuery) {
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
  computed: {
    ...mapGetters([
      'getActiveQuery',
      'selectedRecipeDetails',
      'getRandomID'
    ])
  },
  methods: {
    ...mapActions([
      'searchRecipeByName',
      'searchRecipeByArea',
      'searchRecipeByCat',
      'searchRecipeByIng',
      'handleActiveQuery',
      'handleGetRandom'
    ]),
    handleOnSearch () {
      if (this.oldSearchString !== this.searchString) {
        this.$router.push({name: 'Search', params: { searchString: this.searchString}, query: {by: this.getActiveQuery} }).catch(()=>{})
        this.oldSearchString = this.searchString
      } 
    },
    isSearchPage () {
      return this.$route.name === 'Search'
    },
    getRandomRecipe () {
      this.handleGetRandom().then(() => {
        this.$router.push({name: 'Recipe', params: { recipe: this.getRandomID}}).catch(()=>{})
      })
    },
    refreshPage () {
      this.$router.push({name: 'Search', params: { searchString: this.searchString}, query: {by: this.getActiveQuery} }).catch(()=>{})
    }
  },
}
</script>

<style>
.header__container {
  position: fixed;
  z-index: 20;
  width: 100%;
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
  cursor: pointer;
}

.header__input-container {
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
  /* position: absolute; */
  /* bottom: 0; */
}

.header__interactions, .search-by {
  margin: 0 30px;
}

@media (max-width: 480px) {
  .header__interactions {
    grid-template: 1fr 1fr / 1fr 1fr;
    /* grid-template-columns: none; */
  }
  .header__back-home {
    order: 1;
  }
  .header__input-container {
    order: 3;
    grid-column: 1 / 3;
  }
 .header__random-container {
    order: 2;
  }

  .search-by {
    justify-content: space-between;
    overflow-y: scroll;
  }
}

</style>