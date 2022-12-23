/**
 * The module 'MessagesStore' object.
 * @name SearchGetters
 * @type {object}
 * @getter {object} Getsubreddits=subreddits Returns Object contain subreddits Searched Results.
 * @getter {object} Getusers=users Returns Object contain users Searched Results.
 * @getter {object} GetPosts=posts Returns Object contain posts Searched Results.
 * @getter {object} GetComments=comments Returns Object contain commetns Searched Results.
 * @getter {String} GetQuery=Query Returns String contain query of searching.
 * @getter {object} limitedSubs=limitedsubs Returns Object contain limitedSubs Searched Results.
 * @getter {object} limitedUsers=limitedusers Returns Object contain limitedusers Searched Results.
 * @getter {string} before=before Returns string contain id of the element I want to get before
 * @getter {string} after=after Returns string contain id of the element I want to get after
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
