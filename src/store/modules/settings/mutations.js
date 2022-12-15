export default {
	setunsubscribeFromEmails(state, payload) {
		console.log(payload);
		state.unsubscribeFromEmails = payload.unsubscribeFromEmails;
	},
	setAccountSettings(state, payload) {
		console.log(payload);
		state.accountSettings = payload;
	},
	setmoderationSettings(state, payload) {
		console.log(payload);
		state.moderationSettings = payload;
	},
};
