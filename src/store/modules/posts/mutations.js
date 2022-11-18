export default {
	// addRequest(state, payload) {
	//     state.statename= payload
	// }
	// to edit a state
	setTitle(state, payload) {
		console.log(payload);
		state.title = payload.title;
	},
};
