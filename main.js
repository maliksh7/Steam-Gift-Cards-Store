import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMaterial from "vue-material";
import 'vue-material/dist/vue-material.min.css'
import "@/assets/scss/material-kit.scss";
import "@/assets/demo.css";
Vue.config.productionTip = false
Vue.use(VueMaterial);

const NavbarStore = {
    showNavbar: false
};

Vue.mixin({
    data() {
        return {
            NavbarStore
        };
    }
});


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')