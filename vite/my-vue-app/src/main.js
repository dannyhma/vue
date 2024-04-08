import { createApp } from "vue";
import "./style.css";
import "animate.css";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faSliders,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faShoppingCart, faSliders, faPhone);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
