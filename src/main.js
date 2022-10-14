import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.css"
import router from "./router.js";
import store from "./store/index";
import App from "./App.vue";
import BaseButton from './components/BaseComponents/BaseButton.vue'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

const app = createApp(App);

app.use(router);
app.use(store);
app.component('base-button',BaseButton);

app.mount("#app");
import "bootstrap/dist/js/bootstrap.js"
