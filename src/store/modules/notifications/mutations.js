export default {
	setNotifications(state, payload) {
		state.notifications = payload;
	},
	setAllRead(state, payload) {
		state.allRead = payload;
	},
	setHiddenSuccessfully(state, payload) {
		state.hiddenSuccessfully = payload;
	},
	setClientToken(state, payload) {
		state.clientToken = payload;
	},
};
