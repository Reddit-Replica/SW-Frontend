export default {
	getunsubscribeFromEmails(state) {
		console.log('getters unsubscribeFromEmails');
		return state.unsubscribeFromEmails;
	},
	getAccountSettings(state) {
		console.log('getters getAccountSettings');
		return state.accountSettings;
	},
};
