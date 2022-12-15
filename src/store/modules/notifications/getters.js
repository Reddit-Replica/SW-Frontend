export default {
	getNotifications(state) {
		return state.notifications;
	},
	getAllRead(state) {
		return state.allRead;
	},
	getHiddenSuccessfully(state) {
		return state.hiddenSuccessfully;
	},
	getClientToken(state) {
		return state.clientToken;
	},
};
