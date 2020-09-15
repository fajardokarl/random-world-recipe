<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

body,html {
    margin: 0;
    padding: 0;
    height: 100vh;
}
* {
    box-sizing: border-box;
}

#app {
  font-family: 'Roboto', sans-serif;
  color: #2c3e50;
  height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
