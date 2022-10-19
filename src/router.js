import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './pages/users/MainPage.vue';
import UserPage from './pages/users/UserPage.vue';

import ForgetPassword from './components/forget/ForgetPassword.vue';
import ForgetUsername from './components/forget/ForgetUsername.vue';
import ForgetPasswordpage from './components/forget/ForgetPasswordpage.vue';
import forgetUsernamepage from './components/forget/forgetUsernamepage.vue';

import login from './pages/login/login.vue';
import signupPage from './pages/sign-up-page/sign-up-page.vue';

import TheSettings from './pages/settings/TheSettings.vue';
import ProfileSettings from './pages/settings/ProfileSettings.vue';
import PrivacySettings from './pages/settings/PrivacySettings.vue';
import EmailsSettings from './pages/settings/EmailsSettings.vue';
import FeedSettings from './pages/settings/FeedSettings.vue';
import MessagingSettings from './pages/settings/MessagingSettings.vue';
import AccountSettings from './pages/settings/AccountSettings.vue';

import NotFound from './pages/NotFound.vue';
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', redirect: '/main' },
		{ path: '/main', component: MainPage },
		{ path: '/forgetPassword', component: ForgetPassword },
		{ path: '/forgetUsername', component: ForgetUsername },
		{ path: '/ForgetPasswordpage', component: ForgetPasswordpage },
		{ path: '/forgetUsernamepage', component: forgetUsernamepage },
		{ path: '/login', component: login },
		{ path: '/signup', component: signupPage },
		{
			path: '/user/:userName',
			name: 'user',
			component: UserPage,
			children: [{ path: '/:jnj(.*)', component: UserPage }],
			props: true,
		}, //render user component
		{
			path: '/subreddit/:subredditName',
			name: 'subreddit',
			component: MainPage,
		}, //render subreddit component
		{
			path: '/post/:postName',
			name: 'post',
			component: MainPage,
		}, //render post component
		//{ path: '/test', component: null },
		//  { path: '', component: null },
		{ path: '/:notFound(.*)', component: NotFound },
		{
			path: '/settings',
			name: 'settings',
			component: TheSettings,
			children: [
				{ path: '/Account ', component: AccountSettings, alias: '/settings' },
				{ path: '/Profile ', component: ProfileSettings },
				{ path: '/privacy ', component: PrivacySettings },
				{ path: '/feed ', component: FeedSettings },
				{ path: '/emails ', component: EmailsSettings },
				{ path: '/messaging ', component: MessagingSettings },
			],
		},
	],
});

export default router;
