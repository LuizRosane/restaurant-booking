<template>
    <div class="restaurant-container">
      <div>
        <h1 class="restaurant-name">My Imaginary Bistro</h1>
      </div>      
    </div>
    <h2 class="cheff-name" style="text-align: center;">By Luiz Rosane</h2>
  </template>
  
  <style scoped>
  .restaurant-container {
    background-color: black;
    color: white;
    height: 20vh; /* Adjust the height as needed */
    width:100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .restaurant-name {
    font-family:'Courier New', Courier, monospace; 
    font-size: 2.5rem; 
  }
  
  .cheff-name {
    font-family:'Courier New', Courier, monospace; 
    font-size: 1.5rem; 
    color: gray;
    padding-bottom:3rem !important;
    width: 80vw;
    
    border-bottom: 0.1rem solid;
  }
  </style>
  