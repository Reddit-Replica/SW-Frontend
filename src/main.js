import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import router from './router.js';
import store from './store/index';
import App from './App.vue';
/*import { VueRecaptcha } from 'vue-recaptcha';*/
// import vue3GoogleLogin from 'vue3-google-login';
import GAuth from 'vue3-google-oauth2';

import BaseButton from './components/BaseComponents/BaseButton.vue';
import SwitchButton from './components/BaseComponents/SwitchButton.vue';
import BaseDialog from './components/BaseComponents/BaseDialog.vue';

import TheHeader from './components/layout/TheHeader.vue';

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faLinkSlash } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faLinkSlash);

/* add font awesome icon component */

const app = createApp(App);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.use(router);
app.use(store);
// app.use(vue3GoogleLogin, {
// 	clientId:
// 		'515357456544-54g7cngbtccge8qvcvifnrg57gkcbgfk.apps.googleusercontent.com',
// });
app.use(GAuth, {
	clientId: `515357456544-sukpj5pufir279criuff4tird0jd0b0n.apps.googleusercontent.com`,
	scope: 'email',
	prompt: 'consent',
	plugin_name: `Web client 1  Readit`,
});

app.component('BaseButton', BaseButton);
app.component('SwitchButton', SwitchButton);
app.component('BaseDialog', BaseDialog);

app.component('TheHeader', TheHeader);

const isProduction = process.env.VUE_ENV === 'production';

app.config.globalProperties.$baseurl = isProduction
	? '/api'
	: 'http://localhost:3000';
// app.component('VueRecaptcha', VueRecaptcha);
app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
