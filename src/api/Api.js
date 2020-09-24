import axios from 'axios'

const URL = "https://www.themealdb.com/api/json/v1/1"

export default {
  async searchRecipeName (name) {
    const url = `${URL}/search.php?s=${name}`
    const response = await axios.get(url)
    return response
  },

  async searchRecipeArea (area) {
    const url = `${URL}/filter.php?a=${area}`
    const response = await axios.get(url)
    return response
  },

  async searchRecipeCategory (cat) {
    const url = `${URL}/filter.php?c=${cat}`
    const response = await axios.get(url)
    return response
  },

  async searchRecipeIngredient (ingr) {
    const url = `${URL}/filter.php?i=${ingr}`
    const response = await axios.get(url)
    return response
  },

  async getRecipeDetails (id) {
    const url = `${URL}/lookup.php?i=${id}`
    const response = await axios.get(url)
    return response
  },

  async getRandom () {
    const url = `${URL}/random.php`
    const response = await axios.get(url)
    return response
  }
}

