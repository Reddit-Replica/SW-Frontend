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
	setlimitedUsers(state, payload) {
		state.limitedusers = payload;
	},
	setlimitedSubreddits(state, payload) {
		state.limitedsubs = payload;
	},
	setPosts(state, payload) {
		state.posts = payload;
	},
	setSearchQuery(state, payload) {
		state.SearchQuery = payload;
	},
	setComments(state, payload) {
		state.comments = payload;
	},
	setBefore(state, payload) {
		state.before = payload;
	},
	setAfter(state, payload) {
		state.after = payload;
	},
};
