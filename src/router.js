import { createRouter, createWebHistory } from 'vue-router';

import MainPage from './pages/users/MainPage.vue';
import UserPage from './pages/users/UserPage.vue';

import ForgetPassword from './pages/forget/ForgetPassword.vue';
import ForgetUsername from './pages/forget/ForgetUsername.vue';
import ForgetPasswordpage from './pages/forget/ForgetPasswordpage.vue';
import ForgetUsernamepage from './pages/forget/ForgetUsernamepage.vue';
import ResetPassword from './pages/forget/ResetPassword.vue';
import LoginPage from './pages/login/LoginPage.vue';
import SignupPage from './pages/signup/SignupPage.vue';

import TheSettings from './pages/settings/TheSettings.vue';
import ProfileSettings from './pages/settings/ProfileSettings.vue';
import PrivacySettings from './pages/settings/PrivacySettings.vue';
import EmailsSettings from './pages/settings/EmailsSettings.vue';
import FeedSettings from './pages/settings/FeedSettings.vue';
import MessagingSettings from './pages/settings/MessagingSettings.vue';
import AccountSettings from './pages/settings/AccountSettings.vue';
import SubmitPage from './pages/submit/SubmitPage.vue';

import NotFound from './pages/NotFound.vue';
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', redirect: '/main' },
		{ path: '/main', component: MainPage },

		{ path: '/forgetPassword', component: ForgetPassword },
		{ path: '/forgetUsername', component: ForgetUsername },
		{ path: '/forgetPasswordpage', component: ForgetPasswordpage },
		{ path: '/forgetUsernamepage', component: ForgetUsernamepage },
		{ path: '/resetPassword/:token', component: ResetPassword },
		{ path: '/login', component: LoginPage },
		{ path: '/signup', component: SignupPage },

		{
			path: '/user/:userName',
			name: 'user',
			component: UserPage,
			//children: [{ path: '/:jnj(.*)', component: UserPage }],
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
		{
			path: '/settings',
			name: 'settings',
			component: TheSettings,
			props: true,
			children: [
				{ path: '', component: AccountSettings },
				{ path: '/settings/account', component: AccountSettings },
				{ path: '/settings/profile', component: ProfileSettings },
				{ path: '/settings/privacy', component: PrivacySettings },
				{ path: '/settings/feed', component: FeedSettings },
				{ path: '/settings/emails', component: EmailsSettings },
				{ path: '/settings/messaging', component: MessagingSettings },
			],
		},

		{ path: '/submit', component: SubmitPage },

		{ path: '/:notFound(.*)', component: NotFound },
	],
});

export default router;
