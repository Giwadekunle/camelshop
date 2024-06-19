<script>

  export default {
    data() {
      return {
          image: '../images/supermarket.jpg',
          url: 'https://www.vuejs.org/',
          stockDetails : [
              {
                  itemNumber: 101,
                  itemName : "Sweets",
                  itemPrice : 5,
                  itemQuantity : 30,
                  itemImage: '../images/customerbox-aXq1oCCjlVM-unsplash.jpg'
              },
              {
                  itemNumber: 303,
                  itemName : "Lollipop",
                  itemPrice : 10,
                  itemQuantity : 4,
                  itemImage: '../images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg'
              },
              {
                  itemNumber: 202,
                  itemName : "Biscuit",
                  itemPrice : 10,
                  itemQuantity : 4,
                  itemImage: '../images/biscuit.jpg'
              },
              {
                  itemNumber: 404,
                  itemName : "Bread",
                  itemPrice : 10,
                  itemQuantity : 4,
                  itemImage: '../images/bread.jpg'
              },
              {
                  itemNumber: 505,
                  itemName : "cake",
                  itemPrice : 10,
                  itemQuantity : 4,
                  itemImage: '../images/cake.jpg'
              },
              {
                  itemNumber: 606,
                  itemName : "chocolate",
                  itemPrice : 10,
                  itemQuantity : 4,
                  itemImage: '../images/chocolate.jpg'
              },
              {
                  itemNumber: 707,
                  itemName : "coke",
                  itemPrice : 10,
                  itemQuantity : 4,
                  itemImage: '../images/coke.jpg'
              },
              {
                  itemNumber: 808,
                  itemName : "water",
                  itemPrice : 10,
                  itemQuantity : 4,
                  itemImage: '../images/water.jpg'
              },
              {
                  itemNumber: 909,
                  itemName : "Banana",
                  itemPrice : 10,
                  itemQuantity : 4,
                  itemImage: '../images/banana.jpg'
              },
              {
                  itemNumber: 1010,
                  itemName : "Soap",
                  itemPrice : 10,
                  itemQuantity : 4,
                  itemImage: '../images/soap.jpg'
              }
          ],
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
  <h1>My Candy Shop</h1>
    <div class="center">
        <img v-bind:src="image" width="500" height="300">
    </div>
    <div class="center">
        <a :href="url">SUPERMARKET STOCK</a>
        <h3>Njoroge Mini Mart </h3>
        <h5> A wide variety of fine snacks, sweets and chocoloates perfect for all occassions</h5>
    </div>
    <div class="center">
        <ul>
            <li :key="item" v-for="item in stockDetails">
              <div>
                <img v-bind:src="item.itemImage" width="200" height="150">
              </div>
              <div>
                  <span>{{ item.itemName }}</span> &nbsp; &nbsp;
                  <span> <button style="background-color: blueviolet; color: white; border: blueviolet;">+</button></span>
              </div>
              <br/>
            </li>
        </ul> 
    </div>
</template>