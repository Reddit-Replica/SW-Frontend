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
	sentSuccessfully(state, payload) {
		state.sentSuccessfully = payload;
	},
	deleteMessageSuccessfully(state, payload) {
		state.deleteMessageSuccessfully = payload;
	},
	markSpamSuccessfully(state, payload) {
		state.markSpamSuccessfully = payload;
	},
	blockSuccessfully(state, payload) {
		state.blockSuccessfully = payload;
	},
};
