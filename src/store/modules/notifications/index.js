import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
	namespaced: true,
	state() {
		return {
			notifications: [],
			allRead: false,
			hiddenSuccessfully: false,
			readSuccessfully: false,

			clientToken: null,
		};
	},
	mutations,
	actions,
	getters,
};
