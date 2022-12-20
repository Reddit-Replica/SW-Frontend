export default {
	setAllCommunities(state, payload) {
		state.allCommunities = payload;
	},
	setCategoryCommunities(state, payload) {
		state.categoryCommunities = payload;
	},
	setFirstCommunities(state, payload) {
		state.firstCommunities = payload;
	},
	setSecondCommunities(state, payload) {
		state.secondCommunities = payload;
	},
	setFirstCategory(state, payload) {
		state.firstCategory = payload;
	},
	setSecondCategory(state, payload) {
		state.secondCategory = payload;
	},
	setOneCategory(state, payload) {
		state.oneCategory = payload;
	},
	setOneCommunities(state, payload) {
		state.oneCommunities = payload;
	},
	setTrendingCommunities(state, payload) {
		state.trendingCommunities = payload;
	},
	setSuggestedCommunity(state, payload) {
		state.suggestedCommunity = payload;
	},
};
