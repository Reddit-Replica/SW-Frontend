export default {
	getTitle(state) {
		console.log('getters hello');
		return state.title;
	},
	getNsfw(state) {
		console.log('getters hello');
		return state.nsfw;
	},
	getSpoiler(state) {
		console.log('getters hello');
		return state.spoiler;
	},
	getFlairId(state) {
		console.log('getters hello');
		return state.flairId;
	},
	getsendReplies(state) {
		console.log('getters hello');
		return state.sendReplies;
	},
};
