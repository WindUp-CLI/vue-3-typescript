/* ----- IMPORT:PACKAGES------------------------- */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./shared";

/* ----- IMPORT:STYLES------------------------- */
import "./assets/scss/core/_import.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/static/_import.scss";

/* ----- CREATE:APP------------------------- */
createApp(App).use(router).use(store).mount("#app");
