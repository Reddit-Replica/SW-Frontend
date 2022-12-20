import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import router from './router.js';
import store from './store/index';
import App from './App.vue';
//import Vue from 'vue';
//import { VueCookieNext } from 'vue-cookie-next';
//import VueCookies from 'vue-cookies';
/*import { VueRecaptcha } from 'vue-recaptcha';*/
// import vue3GoogleLogin from 'vue3-google-login';
//import VueCookies from 'vue3-cookies';
//import { useCookies } from "vue3-cookies";
import GAuth from 'vue3-google-oauth2';
import TheSpinner from './components/BaseComponents/TheSpinner.vue';
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

import Notifications from '@kyvg/vue3-notification';

/* add icons to the library */
library.add(faLinkSlash);

/* add font awesome icon component */

const app = createApp(App);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.use(router);
app.use(store);

app.config.productionTip = false;

app.use(Notifications);

// app.use(VueCookies, {
// 	expires: '7d',
// });
//app.use(VueCookieNext);
// app.use(VueCookies);
// app.use(Cookies);
function initSdk(options) {
	return new Promise((resolve) => {
		// prettier-ignore
		window.fbAsyncInit = function() {
		window.FB.init(options)
		resolve(window.FB)
	  }; // eslint-disable-line
		/* eslint-disable */
	  // prettier-ignore
	  (function (d, s, id) {
		const fjs = d.getElementsByTagName(s)[0]
		if (d.getElementById(id)) { return; }
		const js = d.createElement(s); js.id = id
		js.src = '//connect.facebook.net/en_US/sdk.js'
		fjs.parentNode.insertBefore(js, fjs)
	  }(document, 'script', 'facebook-jssdk'))
	  /* eslint-enable */
	});
}

function initializeFacebookSDk() {
	initSdk({
		appId: '3257349194531334',
		xfbml: true, // Parse social plugins on this webpage.
		version: 'v7.0', // Use this Graph API version for this call.
	});
}

initializeFacebookSDk();
app.use(GAuth, {
	clientId: `479140215540-o5bmre9kktfq6d8v54a8o031a3usff2m.apps.googleusercontent.com`,
	scope: 'email',
	prompt: 'consent',
	plugin_name: `Web client 1  Readit`,
});

app.component('BaseButton', BaseButton);
app.component('SwitchButton', SwitchButton);
app.component('BaseDialog', BaseDialog);
app.component('TheSpinner', TheSpinner);

app.component('TheHeader', TheHeader);

const isProduction = process.env.NODE_ENV === 'production';

app.config.globalProperties.$baseurl = isProduction
	? '/api'
	: 'http://localhost:3000';
// app.component('VueRecaptcha', VueRecaptcha);

app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
