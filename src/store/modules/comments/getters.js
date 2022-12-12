export default {
	/**
	 * The module 'comments' object.
	 * @name CommentsGetters
	 * @type {object}
	 * @getter {object} getSubreddit=subreddit Returns an object property.
	 * @getter {list} getIfFollowedPosts=followedPosts Returns a list property.
	 */
	getSubreddit(state) {
		return state.subreddit;
	},
	getIfFollowedPosts(state) {
		return state.followedPosts;
	},
	getCommentID(state) {
		return state.commentID;
	},
	getListOfComments(state) {
		return state.listOfComments;
	},
	getListOfReplies(state) {
		return state.listOfReplies;
	},
};
