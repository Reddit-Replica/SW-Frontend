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
		state.firstCommunities = payload;
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
};
