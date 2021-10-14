<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
        



      <div class="md-toolbar-section-start">
      
       <h3 class="md-title">SteamCart</h3>
        <router-link to="/">
       <i class="fas fa-play"></i>
        
        
        </router-link>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>
        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-list>
              <li class="md-list-item" v-if="!showDownload">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                </a>
              </li>

              <md-list-item href="/" target="_blank" v-if="showDownload">
                <i class="material-icons">home</i>
                <p><router-link to="/">Home</router-link></p>
              </md-list-item>

              <md-list-item
                href="javascript:void(0)"
                @click="scrollToElement()"
                v-if="showDownload"
              >
                <i class="material-icons">shop</i>
                <p><router-link to="/ProductView">Products</router-link></p>
              </md-list-item>

              <li href="javascript:void(0)" class="md-list-item">
                <a
                  mdripple="true"
                  href="javascript:void(0)"
                  class="md-list-item-link md-list-item-container md-button-clean"
                >
                  <div class="md-list-item-content md-ripple">
                    <md-icon>favorite</md-icon>
                    <p>Whishlist</p>
                  </div></a
                >
              </li>
              <md-list-item href="https://twitter.com" target="_blank">
                <i class="fab fa-twitter"></i>
                <p class="hidden-lg">Twitter</p>
                <md-tooltip md-direction="bottom"
                  >Follow us on Twitter</md-tooltip
                >
              </md-list-item>
              <md-list-item href="https://www.facebook.com" target="_blank">
                <i class="fab fa-facebook-square"></i>
                <p class="hidden-lg">Facebook</p>
                <md-tooltip md-direction="bottom"
                  >Like us on Facebook</md-tooltip
                >
              </md-list-item>
              <md-list-item href="https://www.instagram.com" target="_blank">
                <i class="fab fa-instagram"></i>
                <p class="hidden-lg">Instagram</p>
                <md-tooltip md-direction="bottom"
                  >Follow us on Instagram</md-tooltip
                >
              </md-list-item>

              <div class="md-collapse">
                <div class="md-autocomplete">
                  <div
                    class="md-field md-autocomplete search has-white md-theme-default md-clearable"
                  >
                    <div class="md-menu">
                      <input
                        type="text"
                        id="md-input-0tfqhvnwa"
                        class="md-input"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <md-icon>search</md-icon>
              <md-button class="md-dense md-raised md-primary"
                >Search</md-button
              >
            </md-list>
          </div>

          <router-link to="/Login">
          <md-button class="md-primary md-round md-sm" id="login-btn"><md-icon >login</md-icon>login</md-button>
          </router-link>

          <router-link to="/SignUp">
          <md-button class="md-primary md-round md-sm" id="signup-btn"><md-icon >note</md-icon>Signup</md-button>
          </router-link>
          
        </div>
        
      </div>
      
      
    </div>
    


  </md-toolbar>
</template>

<style lang="scss" scoped>
small {
  display: block;
}

#login-btn{
  margin-left: 10%;
  padding-bottom: 5%;
}

#signup-btn{
  margin-left:20%;
  padding-top:4% ;
}


</style>

<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

// import MobileMenu from "@/layout/MobileMenu";
export default {
  name: "RegularButtons",
  components: {
    // MobileMenu
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info",
        ].includes(value);
      },
    },
    colorOnScroll: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      extraNavClasses: "",
      toggledClass: false,
    };
  },
  computed: {
    showDownload() {
      const excludedRoutes = ["login", "landing", "profile"];
      return excludedRoutes.every((r) => r !== this.$route.name);
    },
  },
  methods: {
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement() {
      let element_id = document.getElementById("downloadSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    },
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  },
};
</script>
