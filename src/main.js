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
	clientId: `236245134261-u4nolh034o0p39kpvvv9596ol0eoha4o.apps.googleusercontent.com`,
	scope: 'email',
	prompt: 'consent',
	plugin_name: `Web client 1  reddit`,
});

app.component('BaseButton', BaseButton);
app.component('SwitchButton', SwitchButton);
app.component('BaseDialog', BaseDialog);

// app.config.globalProperties.$hostname = 'http://localhost:3000';
// app.component('VueRecaptcha', VueRecaptcha);
app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
