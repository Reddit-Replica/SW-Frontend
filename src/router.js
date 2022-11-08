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
import LoginComp from './pages/login/loginComp.vue';

import TheSettings from './pages/settings/TheSettings.vue';
import ProfileSettings from './pages/settings/ProfileSettings.vue';
import PrivacySettings from './pages/settings/PrivacySettings.vue';
import EmailsSettings from './pages/settings/EmailsSettings.vue';
import FeedSettings from './pages/settings/FeedSettings.vue';
import MessagingSettings from './pages/settings/MessagingSettings.vue';
import AccountSettings from './pages/settings/AccountSettings.vue';

import SubmitPage from './pages/submit/SubmitPage.vue';

import TheMessages from './pages/messages/TheMessages.vue';
import MessageForm from './pages/messages/MessageForm.vue';
import AllInbox from './pages/messages/AllInbox.vue';
import UnreadInbox from './pages/messages/UnreadInbox.vue';
import MessagesInbox from './pages/messages/MessagesInbox.vue';
import PostReplies from './pages/messages/PostReplies.vue';
import UsernameMentions from './pages/messages/UsernameMentions.vue';
import SentMessages from './pages/messages/SentMessages.vue';

import SubredditPage from './pages/subreddits/SubredditPage.vue';

import TheOverview from './pages/users/PagesComponents/TheOverview.vue';
import AwardsGiven from './pages/users/PagesComponents/AwardsGive.vue';
import AwardsReceived from './pages/users/PagesComponents/AwardsRecieved.vue';
import TheComments from './pages/users/PagesComponents/TheComments.vue';
import TheDownvoted from './pages/users/PagesComponents/TheDownvoted.vue';
import TheUpvoted from './pages/users/PagesComponents/TheUpvoted.vue';
import TheHidden from './pages/users/PagesComponents/TheHidden.vue';
import TheHistory from './pages/users/PagesComponents/TheHistory.vue';
import ThePosts from './pages/users/PagesComponents/ThePosts.vue';
import TheSaved from './pages/users/PagesComponents/TheSaved.vue';

import NotFound from './pages/NotFound.vue';

import postComments from './pages/PostComments.vue';
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', redirect: '/main' },
		{ path: '/main', component: MainPage },

		{ path: '/forgetPassword', component: ForgetPassword },
		{ path: '/forgetUsername', component: ForgetUsername },
		{ path: '/forgetPasswordpage', component: ForgetPasswordpage },
		{ path: '/forgetUsernamepage', component: ForgetUsernamepage },
		{ path: '/reset-password/:id/:token', component: ResetPassword },
		{ path: '/login', component: LoginPage },
		{ path: '/signup', component: SignupPage },
		{ path: '/logincomp', component: LoginComp },

		{
			path: '/user/:userName',
			name: 'user',
			component: UserPage,
			children: [
				{ path: '/user/:userName/', component: TheOverview },
				{ path: '/user/:userName/submitted', component: ThePosts },
				{ path: '/user/:userName/comments', component: TheComments },
				{ path: '/user/:userName/history', component: TheHistory },
				{ path: '/user/:userName/saved', component: TheSaved },
				{ path: '/user/:userName/hidden', component: TheHidden },
				{ path: '/user/:userName/upvoted', component: TheUpvoted },
				{ path: '/user/:userName/downvoted', component: TheDownvoted },
				{ path: '/user/:userName/gilded', component: AwardsReceived },
				{ path: '/user/:userName/gilded/given', component: AwardsGiven },
			],
			props: true,
		}, //render user component
		{
			// path: '/subreddit/:subredditName',
			path: '/subreddit', //to be changed
			name: 'subreddit',
			component: SubredditPage,
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

		{
			path: '/message',
			name: 'message',
			component: TheMessages,
			props: true,
			children: [
				{ path: '/message/compose', component: MessageForm },
				{ path: '/message/inbox', component: AllInbox },
				{ path: '/message/unread', component: UnreadInbox },
				{ path: '/message/messages', component: MessagesInbox },
				{ path: '/message/selfreply', component: PostReplies },
				{ path: '/message/mentions', component: UsernameMentions },
				{ path: '/message/sent', component: SentMessages },
			],
		},

		{ path: '/:notFound(.*)', component: NotFound },
		{ path: '/comments', component: postComments },
	],
});

export default router;
