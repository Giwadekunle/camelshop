<template>
    <h1>Products</h1>
    <div>
        <v-row>
        <v-col cols="12" md="3"  v-for="product in stockDetails" :key=product>

        <v-card
    class="mx-auto my-12"
    max-width="374"
     >

    <v-img
      height="250"
      :src="product.itemImage"
      cover
    ></v-img>

    <v-card-item>
      <v-card-title>{{ product.itemName }}</v-card-title>

   
    </v-card-item>

    <v-card-text>
    
      <div class="my-4 text-subtitle-1">
        {{product.itemPrice}}
      </div>

      <div>{{ product.description }}</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-actions>
      <v-btn
        color="deep-purple-lighten-2"
        text="Add to Cart"
        block
        border
      ></v-btn>
    </v-card-actions>
  </v-card>
          </v-col>
          </v-row>

    </div>

</template>

<script>
export default{
    data(){
        return{
            products:[1,2,3,4,5,6,7,8,9,10],
            stockDetails : [
              {
                  itemNumber: 101,
                  itemName : "Sweets",
                  itemPrice : 5,
                  itemQuantity : 30,
                  itemImage: '../images/customerbox-aXq1oCCjlVM-unsplash.jpg',
                  description: "No extra sweetner "
              },
              {
                  itemNumber: 303,
                  itemName : "Lollipop",
                  itemPrice : 10,
                  itemQuantity : 4,
                  itemImage: '../images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg',
                  description: "sweetness"
              },
              {
                  itemNumber: 202,
                  itemName : "Biscuit",
                  itemPrice : 100,
                  itemQuantity : 4,
                  itemImage: '../images/biscuit.jpg',
                  description: "tasty"
              },
              {
                  itemNumber: 404,
                  itemName : "Bread",
                  itemPrice : 50,
                  itemQuantity : 4,
                  itemImage: '../images/bread.jpg',
                  description: "direct from Oven"
              },
              {
                  itemNumber: 505,
                  itemName : "cake",
                  itemPrice : 350,
                  itemQuantity : 4,
                  itemImage: '../images/cake.jpg',
                  description: "freshly baked with right ingredients"
              },
              {
                  itemNumber: 606,
                  itemName : "chocolate",
                  itemPrice : 100,
                  itemQuantity : 4,
                  itemImage: '../images/chocolate.jpg',
                  description:"rwanda finest choco"
              },
              {
                  itemNumber: 707,
                  itemName : "coke",
                  itemPrice : 100,
                  itemQuantity : 4,
                  itemImage: '../images/coke.jpg',
                  description: "refresh your mind"
              },
              {
                  itemNumber: 808,
                  itemName : "water",
                  itemPrice : 500,
                  itemQuantity : 4,
                  itemImage: '../images/water.jpg',
                  description: "direct from the source"
              },
              {
                  itemNumber: 909,
                  itemName : "Banana",
                  itemPrice : 10,
                  itemQuantity : 4,
                  itemImage: '../images/banana.jpg',
                  description: "Straight from farm"
              },
              {
                  itemNumber: 1010,
                  itemName : "Soap",
                  itemPrice : 150,
                  itemQuantity : 4,
                  itemImage: '../images/soap.jpg',
                  description: "last long"
              }
          ],

        }
    },
    methods(){

    }

}
</script>