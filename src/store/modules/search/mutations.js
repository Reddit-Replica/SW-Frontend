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
};
