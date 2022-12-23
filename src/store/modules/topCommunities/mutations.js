/**
 * The module 'TopCommunityMutations' object.
 * @name TopCommunityMutations
 * @type {Object}
 * @mutator {Array} setAllCommunities=allCommunities Sets the state array property "allCommunities".
 * @mutator {Array} setCategoryCommunities=categoryCommunities Sets the state array property "categoryCommunities".
 * @mutator {String} setFirstCategory=firstCategory Sets the state string property "firstCategory".
 * @mutator {String} setSecondCategory=secondCategory Sets the state string property "secondCategory".
 * @mutator {Array} setFirstCommunities=firstCommunities Sets the state array property "firstCommunities".
 * @mutator {Array} setSecondCommunities=secondCommunities Sets the state array property "secondCommunities".
 * @mutator {String} setOneCategory=oneCategory Sets the state string property "oneCategory".
 * @mutator {Array} setOneCommunities=oneCommunities Sets the state array property "oneCommunities".
 * @mutator {Array} setTrendingCommunities=trendingCommunities Sets the state array property "trendingCommunities".
 * @mutator {Array} setSuggestedCommunity=suggestedCommunity Sets the state array property "suggestedCommunity".
 */
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
