<template>
  <div id="loading-screen">
    <div class="loading__container">
      <img class="loading__illustration" src="@/assets/loading-illustration.svg" alt="">
      <h1>Please wait...</h1>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.loading__container {
  position: fixed;
  width: 100%;
  /* height: 100vh; */
  z-index: 1000;
  background: var(--secondary-accent);
  top: 0;
  left: 0;
  right:0;
  bottom:0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.loading__container h1 {
  font-size: 5rem;
}

.loading__illustration {
  max-width: 350px;
}

@media (max-width: 480px) {
  .loading__container h1 {
    font-size: 3rem;
  }
}

</style>