export default {
	getUserName(state) {
		console.log(state.userName);
		return state;
	},
	getAccessToken(state) {
		console.log(state.accessToken);
		return state.accessToken;
	},
	getResponse(state) {
		console.log(state.response);
		return state.response;
	},
	// didAutoLogout(state) {
	// 	return state.didAutoLogout;
	// },
};
