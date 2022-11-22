export default {
	getTitle(state) {
		console.log('getters title');
		return state.title;
	},
	getNsfw(state) {
		console.log('getters nsfw');
		return state.nsfw;
	},
	getSpoiler(state) {
		console.log('getters spoiler');
		return state.spoiler;
	},
	getFlairId(state) {
		console.log('getters flair id');
		return state.flairId;
	},
	getsendReplies(state) {
		console.log('getters send replies');
		return state.sendReplies;
	},
	getContent(state) {
		console.log('getters content');
		return state.content;
	},
	getallSubreddits(state) {
		console.log('getters allsubreddits');
		return state.allSubreddits;
	},
	getSubreddit(state) {
		console.log('getters allsubreddits');
		return state.subreddit;
	},
};
