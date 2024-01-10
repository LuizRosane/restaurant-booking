<template>
  <div class="app">
    <RestaurantHeader class="centered-header"/>
    <!-- Other components or content here -->

    <h1>By Luiz Rosane</h1>
    
  </div>

</template>

<script>
import RestaurantHeader from "./components/RestaurantHeader.vue";

export default {
  components: {
    RestaurantHeader,
  },
};
</script>

<style>

* {
  margin: 0 !important;
  padding: 0 !important;
}

.app {
  background-color: black;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}



/* Additional styling for other components or content */
</style>
