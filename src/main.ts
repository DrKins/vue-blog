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
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "animate.css";
import store from "./store";

library.add(
  faHeart,
  faEye,
  faComments,
  faMinus,
  faBell,
  faSpinner,
  faChevronCircleDown,
  faHeartBroken,
  faSearch
);

createApp(App)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
