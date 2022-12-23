import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
	namespaced: true,
	/**
	 * The Vuex 'CommunityState' object.
	 * @name CommunityState
	 * @type {object}
	 * @property {Boolean} subredditNameTaken Check if the subreddit name is used before.
	 * @property {Array} Contain recommended categories for creating a subreddit.
	 * @property {Object} Contain subreddit details.
	 * @property {Array} Contain posts in a subreddit.
	 * @property {Boolean} createdSuccessfully Check if the subreddit created successfully.
	 * @property {Array} Contain suggested topics for a subreddit.
	 * @property {Boolean} Check if the subreddit is not found.
	 * @property {Boolean} Check if the subreddit's moderator is trying to leave it.
	 * @property {String} Contain the subreddit's picture path.
	 * @property {String} Contain the subreddit's banner image path.
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
			leaveOwner: false,
			subredditPicture: '',
			subredditBanner: '',
		};
	},
	mutations,
	actions,
	getters,
};
