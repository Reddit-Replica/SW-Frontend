import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
	//namespaced: true,
	/**
	 * The Vuex 'AuthenticationState' object.
	 * @name AuthenticationState
	 * @type {object}
	 * @property {Object} userName contains User-Name logged In .
	 * @property {Object} accessToken contains Access Token.
	 * @property {Object} response This is the response from Server.
	 */
	state() {
		return {
			userName: '',
			accessToken: '',
			response: '',
		};
	},
	mutations,
	actions,
	getters,
};
