export default {
	inboxMessages(state) {
		return state.inboxMessages;
	},
	unreadMessages(state) {
		return state.unreadMessages;
	},
	userMentions(state) {
		return state.userMentions;
	},
	userMessages(state) {
		return state.userMessages;
	},
	postReplies(state) {
		return state.postReplies;
	},
	sentMessages(state) {
		return state.sentMessages;
	},
	suggestedSender(state) {
		return state.suggestedSender;
	},
};
