<template>
    <v-app-bar :elevation="2" color ="blue">
  <template v-slot:prepend>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </template>

  <v-app-bar-title>Camel Mart</v-app-bar-title>
  <v-btn to ="/">Home</v-btn>
  <v-btn to="/products">Products</v-btn>
  <v-btn to="/aboutus">About Us</v-btn>
  <v-btn to="/service">Services</v-btn>
  <v-btn to="/cart">Cart</v-btn>
  <v-btn to="/contactus">Contact Us</v-btn>
 

</v-app-bar>
</template>