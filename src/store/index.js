import { createStore } from 'vuex';
import authModule from './modules/authentication/index.js';
import commModule from './modules/communities/index.js';
import notificationsModule from './modules/notifications/index.js';
import messageModule from './modules/messages/index.js';
import moderatorsModule from './modules/moderators/index.js';
import userModule from './modules/userStore/index.js';
import commentsModule from './modules/comments/index.js';
import postCommentActionsModule from './modules/postCommentActions/index.js';
import postsModule from './modules/posts/index.js';
import listingModule from './modules/Listing/index.js';
const store = createStore({
	modules: {
		auth: authModule,
		community: commModule,
		notifications: notificationsModule,
		messages: messageModule,
		moderation: moderatorsModule,
		user: userModule,
		comments: commentsModule,
		postCommentActions: postCommentActionsModule,
		posts: postsModule,
		listing: listingModule,
	},
	state() {
		return {
			// userName: 'mena',
			// userName: '/u/asmaaadel0',
			userName: localStorage.getItem('userName'),
			accessToken: '',
			subredditName: 'asmaaSubredditName',
			latestSavedUnsavedPost: {},
		};
	},
	getters: {
		getUserName(state) {
			return state.userName;
		},
		getAccessToken(state) {
			return state.userName;
		},
	},
});

export default store;
