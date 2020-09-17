<template>
    <div
      id="search-by"
      @click="handleSearch"
    >
      <span>
        {{ this.displayText }}
      </span>
    </div>
</template>

<script>

import Router from "@/router"

export default {
  name: "SearchBy",
  props: {
    query: String,
    displayText: String,
    searchString: String
  },
  methods: {
    handleSearch () {
      Router.push({name: 'Search', params: { searchString: this.searchString }, query: {by: this.query} }).catch(()=>{})
    }
  }
}
</script>

<style scoped>
#search-by {
  cursor: pointer;
  position: relative;
  display: flex;
  padding: 10px 15px;
  border: none;
  background: none;
  transition: background 400ms;
  letter-spacing: 1px;
}

#search-by:hover {
  background: #FFFBE7
}

.isActive {
  /* font-weight: 700; */
  color: #F9A826;
}
.isActive:after {
  content: '';
  position: absolute;
  height: 5px;
  width: 100%;
  background: #F9A826;
  bottom: 0;
  left: 0;
}


</style>