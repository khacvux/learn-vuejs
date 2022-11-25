import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
// import router from './router'
import "./assets/main.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faClose, faCheck } from "@fortawesome/free-solid-svg-icons";

library.add(faClose, faCheck);

const app = createApp(App);

app.use(createPinia());
// app.use(router)

app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");
