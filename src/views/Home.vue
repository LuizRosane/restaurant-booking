<template>
    <div class="app">
      <RestaurantHeader class="centered-header"/>
      <Section title="About Us"> 
        <AboutUs></AboutUs>
      </Section>
      <Section title="Menu">
        <Menu></Menu>
      </Section>
      <Section title="Booking">
        <BookingForm></BookingForm>
      </Section>
    </div>
  
  </template>
  
  <script>
  import RestaurantHeader from "@/components/RestaurantHeader.vue";
  import AboutUs from "@/components/AboutUs.vue";
  import Menu from "@/components/Menu.vue";
  import Section from "@/components/Section.vue";
  import BookingForm from "@/components/BookingForm.vue";
  
  
  export default {
    components: {
      RestaurantHeader,
      AboutUs,
      Menu,
      Section,
      BookingForm
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
    justify-content: top;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    padding-bottom: 3rem !important;
  }
  
  
  
  /* Additional styling for other components or content */
  </style>
  