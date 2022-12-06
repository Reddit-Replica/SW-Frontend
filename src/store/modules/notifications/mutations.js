export default {
	setNotifications(state, payload) {
		console.log(payload);
		state.notifications = payload;
	},
};
