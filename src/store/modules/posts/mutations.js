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
	setContent(state, payload) {
		console.log(payload);
		state.content = payload.content;
	},
	setallSubreddits(state, payload) {
		console.log(payload);
		state.allSubreddits = payload;
	},
	setSubreddit(state, payload) {
		console.log(payload);
		state.subreddit = payload.subreddit;
	},
	setinSubreddit(state, payload) {
		console.log(payload);
		state.sinSubreddit = payload.inSubreddit;
	},
};
