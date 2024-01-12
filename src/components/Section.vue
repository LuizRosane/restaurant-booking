<template>
    <div class="whole-container">
        <h2>{{ title }}</h2>
        <div class="content-container">
          <slot></slot>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Section',
    props: {
        title: String
    },
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
  