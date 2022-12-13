/**
 * The module 'MessagesStore' object.
 * @name SearchGetters
 * @type {object}
 */
export default {
	Getsubreddits(state) {
		console.log(state.subreddits);
		return state.subreddits;
	},
	Getusers(state) {
		return state.users;
	},
	GetPosts(state) {
		return state.posts;
	},
	GetQuery(state) {
		return state.SearchQuery;
	},
	before(state) {
		return state.before;
	},
	after(state) {
		return state.after;
	},
};
