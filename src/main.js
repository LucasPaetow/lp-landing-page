import Vue from "vue";
import App from "@/App.vue";
import router from "@/router/router.js";
import "./registerServiceWorker";
const VueScrollTo = require("vue-scrollto");

Vue.use(VueScrollTo);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
