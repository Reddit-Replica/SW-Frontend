export default {
	getUserName(state) {
		console.log(state.userName);
		return state.userName;
	},
	getAccessToken(state) {
		console.log(state.accessToken);
		return state.accessToken;
	},
	// didAutoLogout(state) {
	// 	return state.didAutoLogout;
	// },
};
