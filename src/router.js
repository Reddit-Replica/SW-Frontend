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

import TheModeration from './pages/moderation/TheModeration.vue';
import ModerationList from './pages/moderation/ModerationList.vue';
import ModQueue from './pages/moderation/ModQueue.vue';
import TheReports from './pages/moderation/TheReports.vue';
import TheSpam from './pages/moderation/TheSpam.vue';
import TheEdited from './pages/moderation/TheEdited.vue';
import TheUnmoderated from './pages/moderation/TheUnmoderated.vue';
// import TheBanned from './pages/moderation/TheBanned.vue';
// import TheMuted from './pages/moderation/TheMuted.vue';
// import TheContributors from './pages/moderation/TheContributors.vue';
// import TheFlair from './pages/moderation/TheFlair.vue';
// import TheEmojis from './pages/moderation/TheEmojis.vue';
// import UserFlair from './pages/moderation/UserFlair.vue';
// import PostFlair from './pages/moderation/PostFlair.vue';
// import TheRules from './pages/moderation/TheRules.vue';
// import TheRemoval from './pages/moderation/TheRemoval.vue';
// import ThesettingsMod from './pages/moderation/ThesettingsMod.vue';

import NotFound from './pages/NotFound.vue';

import PostComments from './pages/PostComments.vue';
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', redirect: '/login' },
		{ path: '/', redirect: '/main' },
		{
			path: '/main',
			component: MainPage,
			children: [
				{
					name: 'comments',
					path: '/r/:subredditName/comments/:postId/:postName/',
					component: PostComments,
				},
			],
		},

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
			path: '/r/:subredditName',
			// path: '/subreddit', //to be changed
			name: 'subreddit',
			component: SubredditPage,
			props: true,
		}, //render subreddit component
		{
			path: '/r/:subredditName/about/moderators',
			name: 'moderation',
			component: TheModeration,
			children: [
				{
					path: '/r/:subredditName/about/moderators',
					component: ModerationList,
				},
				{ path: '/r/:subredditName/about/modqueue', component: ModQueue },
				{ path: '/r/:subredditName/about/reports', component: TheReports },
				{ path: '/r/:subredditName/about/spam', component: TheSpam },
				{ path: '/r/:subredditName/about/edited', component: TheEdited },
				{
					path: '/r/:subredditName/about/unmoderated',
					component: TheUnmoderated,
				},
				// { path: '/r/:subredditName/about/banned', component: TheBanned },
				// { path: '/r/:subredditName/about/muted', component: TheMuted },
				// {
				// 	path: '/r/:subredditName/about/contributors',
				// 	component: TheContributors,
				// },
				// { path: '/r/:subredditName/about/flair', component: TheFlair },
				// { path: '/r/:subredditName/about/emojis', component: TheEmojis },
				// { path: '/r/:subredditName/about/userflair', component: UserFlair },
				// { path: '/r/:subredditName/about/postflair', component: PostFlair },
				// { path: '/r/:subredditName/about/rules', component: TheRules },
				// { path: '/r/:subredditName/about/removal', component: TheRemoval },
				// { path: '/r/:subredditName/about/settings', component: ThesettingsMod },
				// {
				// 	path: '/r/:subredditName/about/wiki/config/automoderator/',
				// 	component: TheHistory,
				// },
				// {
				// 	path: '/r/:subredditName/about/scheduledposts',
				// 	component: TheHistory,
				// },
				// { path: '/r/:subredditName/about/eventposts', component: TheHistory },
				// { path: '/r/:subredditName/about/awards', component: TheHistory },
				// { path: '/r/:subredditName/about/edit', component: TheHistory },
				// //?page=community ?page=posts ?page=notifications
				// { path: '/r/:subredditName', component: SubredditPage }, //to be changed
				// { path: '/mail/all', component: TheHistory },
				// { path: '/r/:subredditName/about/traffic', component: TheHistory },
				// { path: '/r/:subredditName/about/log', component: TheHistory },
				// { path: '/hc/en-us', component: TheHistory },
				// { path: '/reddithelp', component: TheHistory },
				// { path: '/policies/moderator-guidelines', component: TheHistory },
				// { path: '/r/ModSupport/', component: TheHistory },
				// { path: '/r/modhelp/', component: TheHistory },
				// { path: '/hc/en-us/requests/new', component: TheHistory },
			],
			props: true,
		},
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

		{ path: '/submit', name: 'submit', component: SubmitPage, props: true },
		// { path: '/submit', component: SubmitPage},

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
	],
});

export default router;
