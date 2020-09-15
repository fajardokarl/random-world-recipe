<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{param}}

    <input type="text" v-model="searchString">
    <button @click="handleOnSearch">SEARCh</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      param: this.$router.params,
      searchString: ''
    }
  },
  methods: {
    handleOnSearch () {
      this.$router.push({name: 'Search', params: { searchString: this.searchString } })
    }
  },
  created() {
    console.log(this.$route.params.searchString)
  }
}
</script>