/**
 * The module 'MessagesStore' object.
 * @name SearchGetters
 * @type {object}
 * @getter {object} Getsubreddits=subreddits Returns Object contain subreddits.
 * @getter {object} Getusers=users Returns Object contain users.
 * @getter {object} GetPosts=posts Returns Object contain posts.
 * @getter {object} GetComments=comments Returns Object contain commetns.
 * @getter {String} GetQuery=Query Returns String contain query.
 * @getter {object} limitedSubs=limitedsubs Returns Object contain limitedSubs.
 * @getter {object} limitedUsers=limitedusers Returns Object contain limitedusers.
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
	GetComments(state) {
		return state.comments;
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
	limitedSubs(state) {
		return state.limitedsubs;
	},
	limitedUsers(state) {
		return state.limitedusers;
	},
};
