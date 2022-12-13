/**
 * The module 'setters' object.
 * @name AuthenticationMutations
 * @type {object}
 * @mutator {object} setUser={userName,accessToken} Sets the User info properties.
 * @mutator {object} setResponse=response Sets the response status property.
 * @mutator {object} setRandom=RandomUsers Sets the RandomUsers status property.
 */
export default {
	setUser(state, payload) {
		state.userName = payload.userName;
		state.accessToken = payload.accessToken;
		//state.didAutoLogout = false;
	},
	// setAutoLogout(state) {
	// 	state.didAutoLogout = true;
	// },
	setResponse(state, payload) {
		console.log(payload);
		state.response = payload.response;
	},
	setRandom(state, payload) {
		console.log(payload);
		state.RandomUsers = payload;
		console.log(state.RandomUsers);
	},
	settype(state, payload) {
		console.log(payload);
		state.type = payload;
	},
};
