export default {
	composeMessages(state) {
		return state.allMessages;
	},
	unreadMessages(state) {
		return state.unreadMessages;
	},
	userMentions(state) {
		return state.userMentions;
	},
};
