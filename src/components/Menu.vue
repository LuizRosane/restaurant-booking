<template>
    <div class="whole-container">
        <h2>Menu</h2>
        <div class="content-container">
          <p>This is the menu placeholder!!!</p>
        </div>

    </div>
  </template>
  
  <script>
  export default {
    name: 'Menu',
  };


  </script>
  
  <style scoped>

  .whole-container {
    width: 80vw;
    margin-top: 2rem !important;
    font-family:'Courier New', Courier, monospace; 
  }
  .content-container {
    border: 2px solid white;
    background-color: black;
    color: white;
    margin-top: 20px;
    text-justify: auto;
    padding: 1rem !important;
  }
  
  .whole-container h2 {
    font-size: 2rem; /* Adjust as needed */
    color: white;
  }
  </style>
  