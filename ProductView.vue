<template>

  <div :style="{ backgroundImage: 'url(' + require('@/assets/img/products/Product-bg.jpg') + ')' }" class="imgd">
    <!-- <img width="150px" src=""> -->
    <div class="cards">
            <div class="row">
                <div class="col-sm-5">
                    <div class="row">
                    <div class="col-sm-6" :key="product.id" v-for="product in products">
                        <product
                        :isInCart="isInCart(product)"
                        v-on:add-to-cart="addToCart(product)"
                        :product="product"
                        ></product>
                    </div>
                    </div>
                </div>
                <div class="col-sm-2 my-5">
                    <cart v-on:pay="pay()" v-on:remove-from-cart="removeFromCart($event)" :items="cart"></cart>
                </div>
                </div>
    </div>
                
  </div>
</template>

<script>
import products from "@/products.json";
import Product from "@/components/Product.vue";
import Cart from "@/components/Cart.vue";
export default {
  name: "app",
  components: {
    Product,
    Cart
  },
  data() {
    return {
      products,
      cart: []
    };
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
    },
    isInCart(product) {
      const item = this.cart.find(item => item.id === product.id);
      if (item) {
        return true;
      }
      return false;
    },
    removeFromCart(product) {
      this.cart = this.cart.filter(item => item.id !== product.id);
    },
    pay() {
      this.cart = [];
      alert("Thanks! Shopping successfully completed. ");
    }
  }
};
</script>

<style>


.imgd {
 background: url('https://source.unsplash.com/twukN12EN7c/1920x1080') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
}
.cards{
    padding-top:10% ;
    margin-left: 25%;
}
</style>