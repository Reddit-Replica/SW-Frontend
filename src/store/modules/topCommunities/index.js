import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
	namespaced: true,
	/**
	 * The Vuex 'TopCommunityState' object.
	 * @name TopCommunityState
	 * @type {object}
	 * @property {Array} allCommunities Contain all communities sorted by number of members.
	 * @property {Array} categoryCommunities Contain all communities of a specific category sorted by number of members.
	 * @property {String} firstCategory Contain name of a random category.
	 * @property {String} secondCategory Contain name of a another random category.
	 * @property {Array} firstCommunities Contain top five communities in the first category.
	 * @property {Array} secondCommunities Contain top five communities in the second category.
	 * @property {String} oneCategory Contain name of a random category.
	 * @property {Array} oneCommunities Contain all communities in this category sorted by number of members.
	 * @property {Array} trendingCommunities Contain all top viewed communities.
	 * @property {Array} suggestedCommunity Contain a random community.
	 */
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
