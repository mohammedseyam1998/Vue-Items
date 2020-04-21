import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Carousel from 'primevue/carousel';
Vue.component('Carousel', Carousel);
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
