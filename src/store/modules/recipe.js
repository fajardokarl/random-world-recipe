import api from '@/api/Api'


const state = {
  recipes: [],
  selectedRecipe: []
}

const mutations = {
  setRecipes: (state, recipes) => state.recipes = recipes,
  setSelectedRecipe: (state, recipe) => state.selectedRecipe = recipe,
  clearRecipes: (state, cleared) => state.recipes = cleared
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
  }
}

const getters = {
  recipeResults: (state) => state.recipes,
  selectedRecipeDetails: (state) => state.selectedRecipe
}

export default {
  state,
  mutations,
  actions,
  getters
}