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
	sentSuccessfully(state) {
		return state.sentSuccessfully;
	},
	deleteMessageSuccessfully(state) {
		return state.deleteMessageSuccessfully;
	},
	markSpamSuccessfully(state) {
		return state.markSpamSuccessfully;
	},
	blockSuccessfully(state) {
		return state.blockSuccessfully;
	},
	votedSuccessfully(state) {
		return state.votedSuccessfully;
	},
};
