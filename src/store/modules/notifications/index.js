import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
	namespaced: true,
	state() {
		return {
			notifications: [],
			someNotifications: [],
			allRead: false,
			hiddenSuccessfully: false,
			readSuccessfully: false,
			unreadCount: 0,

			clientToken: null,
		};
	},
	mutations,
	actions,
	getters,
};
