<template>
  <div id="loading-screen">
    <img class="loading-illu" src="@/assets/loading-illustration.svg" alt="">
    <h1>Please wait...</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#loading-screen {
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background: var(--secondary-accent);
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#loading-screen h1 {
  font-size: 5rem;
}

.loading-illu {
  max-width: 350px;
}

</style>