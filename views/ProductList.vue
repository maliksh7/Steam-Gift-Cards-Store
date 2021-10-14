<template>

<div class="row">
  <h1>Exclusive Products</h1>
  <div class="col-md-6" v-for="(obj,key) in products" :key="key">
    <div class="card">
      <img :src='obj.img' alt="Denim Jeans" style="width:40%" >
      <h1>{{ obj.name }}</h1>
      <p class="price">$19.99</p>
      <p>{{ obj.desc }}</p>
    <p><button>Add to Cart</button></p>
    </div>    
    <div class="col-md-6">
      <div class="card">
        <img src='../assets/img/products/product3.jpg' alt="Denim Jeans" style="width:40%" >
      <h1>Tailored Jeans</h1>
      <p class="price">$19.99</p>
      <p>Some text about the jeans..</p>
    <p><button>Add to Cart</button></p>
      </div>
    
    </div>
  </div>
</div>


</template>

  <script>

    // source for image fix :https://github.com/caiobiodere/cordova-template-framework7-vue-webpack/issues/7 
     export default {

       props: {
    header: {
      type: String,
      default: require("~@/assets/img/home.jpg"),
    }
       },

     data() {
     return {
     products : [
         {
             "name" : "ProdA",
             "desc" : "Some disc",
             "img"  : require('../assets/img/products/product1.jpg')
         },
         {
             "name" : "ProdB",
             "desc" : "another disc",
             "img"  : require('../assets/img/products/product2.jpg')
         },
         {
             "name" : "ProdC",
             "desc" : "some other disc",
             "img"  : require('../assets/img/products/product3.jpg')
         }
       ]
      }
     }
      
     }
  </script>

  <style scoped>

  .card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}


.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}
  </style>
