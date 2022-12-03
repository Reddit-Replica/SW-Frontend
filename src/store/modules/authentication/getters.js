/**
 * The module 'AuthenticationStore' object.
 * @name AuthenticationGetters
 * @type {object}
 * @getter {object} getUserName=userName Returns The UserName That has logged In.
 * @getter {object} getAccessToken=accessToken Returns The access Token.
 * @getter {object} getResponse=response Returns response from API.
 */
export default {
	getUserName(state) {
		return state.userName;
	},
	getAccessToken(state) {
		return state.accessToken;
	},
	getResponse(state) {
		return state.response;
	},
};
