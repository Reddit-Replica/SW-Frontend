/**
 * The module 'MessagesStore' object.
 * @name SearchGetters
 * @type {object}
 */
export default {
	Getsubreddits(state) {
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
};
