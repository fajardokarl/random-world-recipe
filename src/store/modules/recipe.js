import api from '@/api/Api'


const state = {
  recipes: [],
  selectedRecipe: [],
  activeQuery: '',
  randomID: ''

}

const mutations = {
  setRecipes: (state, recipes) => state.recipes = recipes,
  setSelectedRecipe: (state, recipe) => state.selectedRecipe = recipe,
  clearRecipes: (state, cleared) => state.recipes = cleared,
  setActiveQuery: (state, query) => state.activeQuery = query,
  setRandomID: (state, randomID) => state.randomID = randomID
}

const actions = {
  searchRecipeByName: async ({commit}, searchString) => {
    const recipes = await api.searchRecipeName(searchString)
      
    commit('setRecipes', recipes.data.meals)
  },

  searchRecipeByArea: async ({commit}, searchString) => {
    const recipes = await api.searchRecipeArea(searchString)
    commit('setRecipes', recipes.data.meals)
    // console.log(recipes.data.meals)
  },

  searchRecipeByCat: async ({commit}, searchString) => {
    const recipes = await api.searchRecipeCategory(searchString)
    commit('setRecipes', recipes.data.meals)
  },

  searchRecipeByIng: async ({commit}, searchString) => {
    const recipes = await api.searchRecipeIngredient(searchString)
    commit('setRecipes', recipes.data.meals)
  },

  selectRecipe: async ({commit}, mealID) => {
    const recipeDetails = await api.getRecipeDetails(mealID)
    commit('setSelectedRecipe', recipeDetails.data.meals[0])
    // console.log(recipeDetails.data.meals)
  },

  handleClearRecipes: ({commit}) => {
    commit('clearRecipes', [])
  },

  handleActiveQuery : ({commit}, query ) => {
    commit('setActiveQuery', query)
  },

  handleGetRandom: async ({commit}) => {
    const random = await api.getRandom()
    commit('setRandomID', random.data.meals[0].idMeal)
  }
}

const getters = {
  recipeResults: (state) => state.recipes,
  selectedRecipeDetails: (state) => state.selectedRecipe,
  getActiveQuery: (state) => state.activeQuery,
  getRandomID: (state) => state.randomID
}

export default {
  state,
  mutations,
  actions,
  getters
}