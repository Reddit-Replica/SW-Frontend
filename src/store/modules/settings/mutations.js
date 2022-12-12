export default {
	setunsubscribeFromEmails(state, payload) {
		console.log(payload);
		state.unsubscribeFromEmails = payload.unsubscribeFromEmails;
	},
};
