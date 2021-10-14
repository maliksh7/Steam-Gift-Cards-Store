<template>
 



  
 <div class="md-layout">
    <div class="md-layout-item md-size-50 md-small-size-100 mr-auto">
      <product-card
        text-center
        class="mt-3"
        card-plain
        :card-image="productCard.productCard1"
        :shadow-normal="false"
        :no-colored-shadow="false">
        <template slot="cardContent">
          <h4 class="card-title">Gucci</h4>
          <p class="card-description">The structured shoulders and sleek detailing ensure a sharp silhouette. Team it with a silk pocket square and leather loafers.</p>
        </template>
        <template slot="cardAction">
          <div class="price-container">
            <span class="price price-old"> €1,430</span>
            <span class="price price-new"> €743</span>
          </div>
          <div class="stats ml-auto">
            <md-button class="md-just-icon md-rose md-round md-simple">
              <md-icon>favorite</md-icon>
              <md-tooltip md-direction="top">Save to Wishlist</md-tooltip>
            </md-button>
          </div>
        </template>
      </product-card>
    </div>
  </div>
</template>

  <script>
    export default {
        name: 'ProductCard',
        props: {
        headerColor: {
        type: String,
        default: ""
    }

        },
      data () {
        return {
          password: null,
          firstname: null,
          email: null
        }
      }
    }
  </script>