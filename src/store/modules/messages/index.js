import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
	namespaced: true,
	state() {
		return {
			inboxMessages: [],
			unreadMessages: [],
			userMentions: [],
			userMessages: [],
			postReplies: [],
			sentMessages: [],
			suggestedSender: [],
			sentSuccessfully: false,
			deleteMessageSuccessfully: false,
			markSpamSuccessfully: false,
			blockSuccessfully: false,
			votedSuccessfully: false,
			replyMessageSuccessfully: false,
		};
	},
	mutations,
	actions,
	getters,
};
