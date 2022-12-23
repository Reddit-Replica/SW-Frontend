/**
 * The module 'setters' object.
 * @name SearchMutations
 * @type {object}
 * @mutator {object} setUsers=users Sets the state object property.
 * @mutator {object} setSubreddits=subreddits Sets the state object property.
 * @mutator {object} setlimitedUsers=limitedusers Sets the state object property.
 * @mutator {object} setlimitedSubreddits=limitedsubreddits Sets the state object property.
 * @mutator {object} setPosts=posts Sets the state object property.
 * @mutator {String} setSearchQuery=searchingQuery Sets the state object property.
 * @mutator {object} setComments=Comments Sets the state object property.
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
