import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
	namespaced: true,
	/**
	 * The Vuex 'CommunityState' object.
	 * @name CommunityState
	 * @type {object}
	 * @property {Boolean} subredditNameTaken Check if this subreddit name is used before.
	 * @property {Boolean} createdSuccessfully Check if this subreddit created successfully.
	 * @property {Object} Contain subreddit details.
	 * @property {Array} Contain recommended categories for creating a subreddit.
	 * @property {Array} Contain posts in a subreddit.
	 */
	state() {
		return {
			subredditNameTaken: false,
			categories: [],
			subreddit: {},
			posts: [],
			createdSuccessfully: false,
			topics: [],
			notFound: false,
		};
	},
	mutations,
	actions,
	getters,
};
