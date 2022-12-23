import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
	//namespaced: true,
	/**
	 * The Vuex 'AuthenticationState' object.
	 * @name AuthenticationState
	 * @type {object}
	 * @property {String} userName contains User-Name logged In .
	 * @property {String} accessToken contains Access Token.
	 * @property {String} response This is the response from Server.
	 * @property {Object} RandomUsers This is the RandomUsers from Sign-Up Page to sign up.
	 * @property {String} type This is the Type The user Signed In.
	 */
	state() {
		return {
			userName: '',
			accessToken: '',
			response: '',
			RandomUsers: [],
			type: '',
		};
	},
	mutations,
	actions,
	getters,
};
