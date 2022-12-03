import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
export default {
	namespaced: true,
	/**
	 * The Vuex 'comment state' object.
	 * @name CommentState
	 * @type {object}
	 * @property {object} subreddit This property is an object of subreddit details of a post.
	 * @property {list} followedPosts This property is a list of followed posts.
	 */
	state() {
		return {
			subreddit: {},
			followedPosts: [],
		};
	},
	actions,
	mutations,
	getters,
};
