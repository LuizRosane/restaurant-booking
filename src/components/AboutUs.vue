<template>
    <div class="whole-container">
        <h2>About Us</h2>
        <div class="content-container">
          <p>
            Welcome to My Imaginary Bistro, where reality meets imagination! 
          </p>
             
          <br>
            
          <p>
            Our restaurant is a portfolio scenario and doesn't actually exist. It's a
            creative project to showcase design and development skills. This application
            is like a recipe, among ingredients there are Vue.js, Bootstrap, Git, AWS Amplify, AWS SES
            AWS Dynamo, AWS Cognito, AWS Appsync and other technologies.
          </p>

          <br>

          <p>
            The main features to implemented in this project is a booking system in which clients
            book a table and get an email confirmation. The application must also have a login system
            where the staff can manage bookings. The whole application is built in the AWS cloud environment
            in order to exercise, review and learn more about cloud architecture and cloud based development
          </p>
          
          <br>
          
          <p>
            Enjoy!!!
          </p>
        </div>

    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutUs',
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
  