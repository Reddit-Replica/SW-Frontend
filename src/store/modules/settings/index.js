import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
	/**
	 * The Vuex 'settingsState' object.
	 * @name SettingsState
	 * @type {object}
	 * @property {Object} accountSettings this is the account settings .
	 * @property {Object}  moderationSettings this is the moderation Settings .
	 * @property {Object} postandcommentsSettings This is post and comments Settings.
	
	 */
	namespaced: true,
	state() {
		return {
			unsubscribeFromEmails: false,
			accountSettings: {},
			moderationSettings: {},
			postandcommentsSettings: {},
		};
	},
	mutations,
	actions,
	getters,
};
