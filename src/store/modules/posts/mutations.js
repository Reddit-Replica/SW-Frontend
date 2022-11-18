export default {
	// addRequest(state, payload) {
	//     state.statename= payload
	// }
	// to edit a state
	setTitle(state, payload) {
		console.log(payload);
		state.title = payload.title;
	},
	setNsfw(state, payload) {
		console.log(payload);
		state.nsfw = payload.nsfw;
	},
	setSpoiler(state, payload) {
		console.log(payload);
		state.spoiler = payload.spoiler;
	},
	setFlairId(state, payload) {
		console.log(payload);
		state.flairId = payload.flairId;
	},
	setsendReplies(state, payload) {
		console.log(payload);
		state.sendReplies = payload.sendReplies;
	},
};
