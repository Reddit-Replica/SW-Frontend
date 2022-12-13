export default {
	/**
	 * The module 'setters' object.
	 * @name CommentsMutations
	 * @type {object}
	 * @mutator {object} setSubredditInfo=subreddit Sets the state object property.
	 */
	setSubredditInfo(state, payload) {
		console.log(payload);
		state.subreddit = payload;
	},
	setCommentID(state, payload) {
		console.log(payload);
		state.commentID = payload;
	},
};
