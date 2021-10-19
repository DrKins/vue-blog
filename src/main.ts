import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart, faEye, faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHeart, faEye, faComments);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
