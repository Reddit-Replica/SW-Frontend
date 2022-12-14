import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
export default {
	namespaced: true,
	/**
	 * The Vuex 'listingstate' object.
	 * @name ListingState
	 * @type {object}
	 * @property {object} postDetails This property is an object of post details.
	 * @property {list} Posts This property is a list of posts.
	 */
	state() {
		return {
			postDetails: {},
			Posts: {},
		};
	},
	actions,
	mutations,
	getters,
};
