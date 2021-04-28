import Vue from "vue";
import App from "./App.vue";
import button from "./components/button";

Vue.config.productionTip = false;

export default button;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
