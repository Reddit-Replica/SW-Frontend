export default {
	setUser(state, payload) {
		state.userName = payload.userName;
		state.accessToken = payload.accessToken;
		//state.didAutoLogout = false;
	},
	// setAutoLogout(state) {
	// 	state.didAutoLogout = true;
	// },
};
