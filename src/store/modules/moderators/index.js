import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
	namespaced: true,
	state() {
		return {
			listOfModerators: [],
			addRuleSuccessfully: false,
			listOfRules: [],
			updateRuleSuccessfully: false,
			deleteRuleSuccessfully: false,
		};
	},
	mutations,
	actions,
	getters,
};
