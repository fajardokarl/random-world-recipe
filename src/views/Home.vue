<template>
  <div class="home" id='home'>
    <div class="card-container">
      <div class="card">
        <div class="card__hero">
          <img src="@/assets/undraw_cooking_lyxy.svg" alt="">
        </div>
        <div class="card__search">
          <div class="card__title-container">
            <h2 class="card__title">Be your own <span>CHEF</span></h2>
            <h3 class="card__subtitle">Find a meal to Cook</h3>
          </div>
          <div class="card__searchbar-container">
            <input 
              class="card__searchbar"
              placeholder="Seach"
              v-model="searchString"
              @keyup.enter="handleSearchRecipe"
            />
            <button class="card__search-btn" @click="handleSearchRecipe">
              <img src="@/assets/Icon - Search - Sharp.svg">
            </button>
          </div>
          <div class="card__random_container">
            <p class="card__random-text">... or get</p>
            <button class="card__random-btn">
              Random
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      searchString: '',
      recipeResult: [] 
    }
  },
  methods: {
     handleSearchRecipe () {
       this.$router.push({name: 'Search', params: { searchString: this.searchString }, query: {by: 'recipe'} })
    }
  }
}
</script>

<style> 
h2, h3 {
  margin-block-end: 0;
  margin-block-start: 0;
}

button:focus {
  outline: none !important;
}

:root {
  --accent-color: #F9A826;
  --secondary-accent: #FEFDF8;
  --main-dark: #858585;
  --secondary-dark: #D3D3D3;
}


.home {
  display: flex;
  justify-content: center;
  background: #FEFDF8;
  height: 100%;
}

.card-container {
  height: 100vh;
  vertical-align: middle;
  display: flex;
  align-items: center;

}

.card {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1440px;
  background: #fff;
  padding: 30px 50px;
  box-shadow: 3px 3px 8px 2px #aaa;
  margin: 15px;
}

.card__hero img{
  width: 100%;
  padding: 20px;
  margin: 10px;
  max-width: 450px;
}

.card__search {
  margin: 20px;
}

.card__title-container {
  color: var(--main-dark);
  letter-spacing: -2px;
}

.card__title {
  font-size: 48px;
  font-weight: 700;
}

.card__title span {
  color: var(--accent-color);
}

.card__subtitle {
  font-size: 36px;
  font-weight: 300;
}

.card__searchbar-container {
  margin: 20px 0;
  position: relative;
  width: 100%;
}

.card__searchbar {
  padding: 8px;
  font-size: 22px;
  border: solid 2px var(--main-dark);
  border-radius: 5px; 
  width: calc(100% - 20px);

}

.card__searchbar:focus {
  outline: none !important;
  border: solid 2px var(--accent-color);
}

.card__search-btn {
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

.card__random_container {
  display: flex;
  justify-content:flex-start;
  align-items: center;
}

.card__random-text {
  font-size: 24px;
  color: var(--secondary-dark);
  margin-right: 8px;
}

.card__random-btn {
  color: var(--accent-color);
  background: #fff;
  border: solid 2px var(--accent-color);
  font-size: 24px;
  font-weight: 700;
  padding: 5px 18px;
  border-radius: 30px;
  cursor: pointer;
}

.card__random-btn:hover {
 
  background: var(--accent-color);
  color: #fff;
}
</style>
