import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store/store";
import "./registerServiceWorker";

import "@/assets/css/reset.css";
/* iconfont图标字体 */
import "@/assets/css/font/iconfont.css";
import "@/assets/js/date.js"
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
