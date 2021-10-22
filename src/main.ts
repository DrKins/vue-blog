import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeart,
  faEye,
  faComments,
  faMinus,
  faBell,
  faHeartBroken,
  faChevronCircleDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "animate.css";

library.add(
  faHeart,
  faEye,
  faComments,
  faMinus,
  faBell,
  faChevronCircleDown,
  faHeartBroken,
  faSearch
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
