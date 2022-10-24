import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import router from './router.js';
import store from './store/index';
import App from './App.vue';

import BaseButton from './components/BaseComponents/BaseButton.vue';
import SwitchButton from './components/BaseComponents/SwitchButton.vue';

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('BaseButton', BaseButton);
app.component('SwitchButton', SwitchButton);

// app.config.globalProperties.$hostname = 'http://localhost:3000';
app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
