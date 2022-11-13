export default {
	setInboxMessages(state, payload) {
		state.inboxMessages = payload;
	},
	setUnreadMessages(state, payload) {
		state.unreadMessages = payload;
	},
	setUserMentions(state, payload) {
		state.userMentions = payload;
	},
	setUserMessages(state, payload) {
		state.userMessages = payload;
	},
	setPostReplies(state, payload) {
		state.postReplies = payload;
	},
	setSentMessages(state, payload) {
		state.sentMessages = payload;
	},
	setSuggestedSender(state, payload) {
		state.suggestedSender = payload;
	},
};
