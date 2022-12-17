export default {
	getNotifications(state) {
		return state.notifications;
	},
	getSomeNotifications(state) {
		return state.someNotifications;
	},
	getAllRead(state) {
		return state.allRead;
	},
	getHiddenSuccessfully(state) {
		return state.hiddenSuccessfully;
	},
	getReadSuccessfully(state) {
		return state.readSuccessfully;
	},
	getClientToken(state) {
		return state.clientToken;
	},
	getUnreadCount(state) {
		return state.unreadCount;
	},
};
