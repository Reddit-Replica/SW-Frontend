export default {
	/**
	 * The module 'PostsStore' object.
	 * @name SettingsGetters
	 * @type {object}
	 * @getter {object} getAccountSettings=AccountSettings getAccountSettings Returns The AccountSettings.
	 * @getter {object} getmoderationSettings=moderationSettings getmoderationSettings Returns moderationSettings.
	 * @getter {object} getpostandcommentsSettings=postandcommentsSettings getpostandcommentsSettings Returns postandcommentsSettings.
	 */
	getunsubscribeFromEmails(state) {
		console.log('getters unsubscribeFromEmails');
		return state.unsubscribeFromEmails;
	},
	getAccountSettings(state) {
		console.log('getters getAccountSettings');
		return state.accountSettings;
	},
	getmoderationSettings(state) {
		console.log('getters moderationSettings');
		return state.moderationSettings;
	},
	getpostandcommentsSettings(state) {
		console.log('getters postandcommentsSettings');
		return state.postandcommentsSettings;
	},
};
