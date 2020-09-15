import api from '@/api/Api'


const state = {
  recipes: []
}

const mutations = {
  setRecipes: (state, recipes) => state.recipes = recipes
}

const actions = {
  searchRecipeByName: async ({commit}, context) => {
    const recipes = await api.searchRecipeName(context)
      
    commit('setRecipes', recipes.data.meals)
  },

  searchRecipeByArea: async ({commit}, context) => {
    const recipes = await api.searchRecipeArea(context)
    commit('setRecipes', recipes.data.meals)
    // console.log(recipes.data.meals)
  },

  searchRecipeByCat: async ({commit}, context) => {
    const recipes = await api.searchRecipeCategory(context)
    commit('setRecipes', recipes.data.meals)
  },

  searchRecipeByIng: async ({commit}, context) => {
    const recipes = await api.searchRecipeIngredient(context)
    commit('setRecipes', recipes.data.meals)
  }
}

const getters = {
  recipeResults: (state) => state.recipes
}

export default {
  state,
  mutations,
  actions,
  getters
}