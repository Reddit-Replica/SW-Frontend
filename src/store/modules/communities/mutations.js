export default {
	checkSubredditName(state, payload) {
		state.subredditNameTaken = payload;
	},
	setSavedCategories(state, payload) {
		state.categories = payload;
	},
	setSubreddit(state, payload) {
		state.subreddit = payload;
	},
};
