import { createApp } from "vue";
import "./style.css";
import "animate.css";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart);

createApp(App).mount("#app");
