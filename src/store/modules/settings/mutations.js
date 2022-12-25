export default {
	/**
	 * The module 'setters' object.
	 * @name SettingsMutations
	 * @type {object}
	 * @mutator {object}setAccountSettings={AccountSettings} Sets the Account Settings.
	 * @mutator {object} setmoderationSettings={moderationSettings} Sets the moderation Settings.
	 * @mutator {object} setpostandcommentsSettings={postandcommentsSettings} Sets the post and comments Settings.
	 */
	setunsubscribeFromEmails(state, payload) {
		//console.log(payload);
		state.unsubscribeFromEmails = payload.unsubscribeFromEmails;
	},
	setAccountSettings(state, payload) {
		//console.log(payload);
		state.accountSettings = payload;
	},
	setmoderationSettings(state, payload) {
		//console.log(payload);
		state.moderationSettings = payload;
	},
	setpostandcommentsSettings(state, payload) {
		//console.log(payload);
		state.postandcommentsSettings = payload;
	},
};
