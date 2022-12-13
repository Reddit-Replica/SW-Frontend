import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
export default {
	namespaced: true,
	state() {
		return {
			subreddits: [],
			users: [],
			posts: [],
			SearchQuery: '',
			after: '',
			before: '',
		};
	},
	mutations,
	actions,
	getters,
};
