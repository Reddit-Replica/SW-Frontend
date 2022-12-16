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

	setReadSuccessfully(state, payload) {
		state.readSuccessfully = payload;
	},
	setClientToken(state, payload) {
		state.clientToken = payload;
	},
};
