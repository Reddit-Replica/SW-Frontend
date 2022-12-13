/**
 * The module 'setters' object.
 * @name SearchMutations
 * @type {object}
 */
export default {
	setUsers(state, payload) {
		state.users = payload;
	},
	setSubreddits(state, payload) {
		state.subreddits = payload;
	},
	setPosts(state, payload) {
		state.posts = payload;
	},
	setSearchQuery(state, payload) {
		state.SearchQuery = payload;
	},
	setBefore(state, payload) {
		state.before = payload;
	},
	setAfter(state, payload) {
		state.after = payload;
	},
};
