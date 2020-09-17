<template>
  <div id="foodcard" @click="handlesSlectRecipe">
    <img class="foodcard__thumbnail" :src="imgURL" alt="">
    <h2 class="foodcard__title">{{recipeName}}</h2>
    <div class="foodcard__overlay"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'


export default {
  name: 'FoodCard',
  props: {
    recipeName: String,
    imgURL: String,
    recipeID: String
  },
  methods: {
    handlesSlectRecipe () {
      this.$router.push({name: 'Recipe', params: { recipe: this.recipeID}}).catch(()=>{})
    }
  }
}
</script>

<style>
#foodcard {
  position: relative;
  box-shadow: none;
  max-height: calc(100% - 5px);
  transition: transform 200ms, box-shadow 250ms;
}

#foodcard:hover {
  transform: scale(1.05);
  box-shadow: 1px 1px 5px 5px #ccc;
}

.foodcard__thumbnail {
  width: 100%;
}

.foodcard__title {
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 5;
  color: #fff;
}

.foodcard__overlay {
  cursor: pointer;
  position: absolute;
  top:0;
  left: 0;
  content: '';
  width: 100%;
  height: 100%;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(1, 1, 1, 0.3));
}

.foodcard__overlay:hover {
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(1, 1, 1, 0.)) !important;
}
</style>