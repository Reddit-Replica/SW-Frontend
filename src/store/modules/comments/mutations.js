export default {
	// addRequest(state, payload) {
	//     state.statename= payload
	// }
	// to edit a state
	setSubredditInfo(state, payload) {
		console.log(payload);
		state.subredditDescription = payload;
	},
};
