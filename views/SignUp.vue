<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <SignUp-card header-color="green">
              <h4 slot="title" class="card-title">SignUp</h4>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-facebook-square"></i>
              </md-button>
              
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-twitter"></i>
              </md-button>

              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-google-plus-g"></i>
              </md-button>
              <p slot="description" class="description">Or Be Classical</p>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>face</md-icon>
                <label>Full Name...</label>
                <md-input v-model="firstname"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>email</md-icon>
                <label>Email...</label>
                <md-input v-model="email" type="email"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Password...</label>
                <md-input v-model="password"></md-input>
              </md-field>
              <md-button slot="footer" class="md-simple md-success md-lg">
                Register
              </md-button>
            </SignUp-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SignUpCard } from '../components/cards/SignUpCard';
export default {

components: {
  SignUpCard
},
  bodyClass: "signup-page",

  data() {

    return {
      firstname: null,
      email: null,
      password: null
    };

  },


  props: {

    header: {
      type: String,
      default: require("@/assets/img/signup.jpg")
    }


  },

  computed: {
    headerStyle() {
      return {

        backgroundImage: `url(${this.header})`
        
      };
    }
  }
};
</script>

<style lang="css"></style>
