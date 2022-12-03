export default {
	/**
	 * The module 'PostsStore' object.
	 * @name PostsGetters
	 * @type {object}
	 * @getter {object} getTitle=title getTitle Returns The title of the post.
	 * @getter {Boolean} getNsfw=Nsfw getNsfw Returns NSFW of post.
	 * @getter {Boolean} getSpoiler=Spoiler getSpoiler Returns Spoiler of post.
	 * @getter {object} getFlairId=FlairId getFlairId Returns FlairId of post.
	 * @getter {Boolean} getsendReplies=sendReplies getsendReplies Returns sendReplies of post.
	 * @getter {object} getContent=Content getContent Returns Content of post.
	 * @getter {Array} getallSubredditsReturns=allSubredditsReturns getallSubredditsReturns allSubreddits .
	 * @getter {object} getSubreddit=Subreddit getSubreddit Returns getSubreddit of post.
	 * @getter {Boolean} getinSubreddit=inSubreddit getinSubreddit Returns inSubreddit of post.
	 */
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
		console.log('getters subreddit');
		return state.subreddit;
	},
	getinSubreddit(state) {
		console.log('getters in subreddit');
		return state.nSubreddit;
	},
};
