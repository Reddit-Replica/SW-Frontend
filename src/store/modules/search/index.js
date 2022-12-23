import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
export default {
	/**
	 * The Vuex 'Search' object.
	 * @name search
	 * @type {object}
	 * @property {Object} subreddits contain all Subreddit information.
	 * @property {Object} limitedSubs contain limited of subreddits.
	 * @property {Object} users contain all user information.
	 * @property {Object} limitedusers contain limited of users.
	 * @property {Object} posts contain all post information.
	 * @property {Object} comments contain all of comments information.
	 * @property {String} searchingQuery This property is the String of Query.
	 * @property {String} before This property is string of id before.
	 * @property {String} after This property is string of id after.
	 */
	namespaced: true,
	state() {
		return {
			subreddits: [],
			limitedsubs: [],
			users: [],
			limitedusers: [],
			posts: [],
			comments: [],
			SearchQuery: '',
			after: '',
			before: '',
		};
	},
	mutations,
	actions,
	getters,
};
