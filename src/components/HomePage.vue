<script>

  export default {
    data() {
      return {
          image: '../images/supermarket.jpg',
          url: 'https://www.vuejs.org/',
          
        }
    },

    methods() {
      // we shall add our functions here
    },

    computed(){
      //we use this when working with forms
    }
  }
</script>

<template>
  <v-card
    class="mx-auto"
    width="1000"
  >
   
    <v-carousel>
  <v-carousel-item
    src='../images/supermarket.jpg'
    cover
  ></v-carousel-item>

  <v-carousel-item
    src='../images/bread.jpg'
    cover
  ></v-carousel-item>

  <v-carousel-item
    src='../images/cake.jpg'
    cover
  ></v-carousel-item>
</v-carousel>
  </v-card>
  <v-card align="center">
        <v-card-item>
          <v-card-title>Camel Mart Supermarket</v-card-title>

          <v-card-subtitle>Where quality meets convenience!</v-card-subtitle>
        </v-card-item>

        <v-card-text>
            Your One-Stop Shop for Quality and Value!
            A bustling marketplace offering a diverse array of fresh produce,
            pantry essentials, and everyday conveniences, all under one roof.
        </v-card-text>
      </v-card>
  <v-row>
    <v-col cols="12" md="4">
      <v-card
        subtitle="Micheal Morre"
        text="I love shopping at this supermarket! They always have fresh produce 
        and a wide variety of organic options. Plus, the staff is super friendly and helpful"
        title="Fast delivery"
      ></v-card>

      <div class="text-center text-caption">Using Props Only</div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <template v-slot:title>
          Njoroge Sandra
        </template>

        <template v-slot:subtitle>
          Love my order
        </template>

        <template v-slot:text>
            Convenient location and excellent customer service! 
            This supermarket makes grocery shopping a breeze with its spacious aisles and easy checkout process.
        </template>
      </v-card>

      <div class="text-center text-caption">Using Slots Only</div>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <h3 class="text-center">Customer feedbacks</h3>
      <v-divider></v-divider>

    </v-col>
    <v-col cols="12" md="4">
      <v-card>
        <v-card-item>
          <v-card-title>David Owour</v-card-title>

          <v-card-subtitle>Good Experience</v-card-subtitle>
        </v-card-item>

        <v-card-text>
            I appreciate how this supermarket supports local farmers and offers seasonal specials. It's more than just a store; it's a community hub for fresh, sustainable food.
        </v-card-text>
      </v-card>

      <div class="text-center text-caption">Using Markup Only</div>
    </v-col>
  </v-row>
</template>