import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
	namespaced: true,

	state() {
		return {
			allCommunities: [],
			categoryCommunities: [],

			secondCategory: '',
			firstCategory: '',
			secondCommunities: [],
			firstCommunities: [],

			oneCategory: '',
			oneCommunities: [],

			trendingCommunities: [],

			suggestedCommunity: [],
		};
	},
	mutations,
	actions,
	getters,
};
