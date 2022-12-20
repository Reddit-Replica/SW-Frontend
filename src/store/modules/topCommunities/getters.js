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
