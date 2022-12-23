/**
 * The module 'TopCommunityStore' object.
 * @name TopCommunityGetters
 * @type {Object}
 * @getter {Array} getAllCommunities=allCommunities Returns an array contains allCommunities.
 * @getter {Array} getCategoryCommunities=categoryCommunities Returns an array contains allCommunities in a specific category.
 * @getter {String} getFirstCategory=firstCategory Returns a string contains name of a random category.
 * @getter {String} getSecondCategory=secondCategory Returns a string contains name of a another random category.
 * @getter {Array} getFirstCommunities=firstCommunities Returns an array contains top five communities in the first category.
 * @getter {Array} getSecondCommunities=secondCommunities Returns an array contains top five communities in the second category.
 * @getter {String} getOneCategory=oneCategory Returns a string contains name of a random category.
 * @getter {Array} getOneCommunities=oneCommunities Returns an array contains all communities in this category.
 * @getter {Array} getTrendingCommunities=trendingCommunities Returns an array contains all top viewed communities.
 * @getter {Array} getSuggestedCommunity=suggestedCommunity Returns an array contains a random community.
 */
export default {
	getAllCommunities(state) {
		return state.allCommunities;
	},
	getCategoryCommunities(state) {
		return state.categoryCommunities;
	},
	getFirstCategory(state) {
		return state.firstCategory;
	},
	getSecondCategory(state) {
		return state.secondCategory;
	},
	getSecondCommunities(state) {
		return state.secondCommunities;
	},
	getFirstCommunities(state) {
		return state.firstCommunities;
	},
	getOneCategory(state) {
		return state.oneCategory;
	},
	getOneCommunities(state) {
		return state.oneCommunities;
	},
	getTrendingCommunities(state) {
		return state.trendingCommunities;
	},
	getSuggestedCommunity(state) {
		return state.suggestedCommunity;
	},
};
