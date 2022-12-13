/**
 * The module 'CommunityMutations' object.
 * @name CommunityMutations
 * @type {Object}
 * @mutator {Boolean} checkSubredditName=subredditNameTaken Sets the state boolean property "subredditNameTaken".
 * @mutator {Boolean} createdSuccessfully=createdSuccessfully Sets the state boolean property "createdSuccessfully".
 * @mutator {Object} setSubreddit=subreddit Sets the state object property "subreddit".
 * @mutator {Array} setPosts=posts Sets the state array property "posts".
 * @mutator {Array} setSavedCategories=categories Sets the state array property "categories".
 */
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
	setPosts(state, payload) {
		state.posts = payload;
	},
	createdSuccessfully(state, payload) {
		state.createdSuccessfully = payload;
	},
	setTopics(state, payload) {
		state.topics = payload;
	},
};
