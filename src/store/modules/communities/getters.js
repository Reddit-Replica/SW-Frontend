/**
 * The module 'CommunityStore' object.
 * @name CommunityGetters
 * @type {Object}
 * @getter {Boolean} subredditNameTaken=subredditNameTaken Returns an boolean contain check if this subreddit name is used before property.
 * @getter {Array} categories=categories Returns an array contain recommended categories for creating a subreddit property.
 * @getter {Object} getSubreddit=getSubreddit Returns an object contain subreddit details property.
 * @getter {Array} getPosts=getPosts Returns an array contain posts in a subreddit property.
 * @getter {Boolean} createdSuccessfully=createdSuccessfully Returns an boolean contain check if this subreddit created successfully property.
 */
export default {
	subredditNameTaken(state) {
		return state.subredditNameTaken;
	},
	categories(state) {
		return state.categories;
	},
	getSubreddit(state) {
		return state.subreddit;
	},
	getPosts(state) {
		return state.Posts;
	},
	createdSuccessfully(state) {
		return state.createdSuccessfully;
	},
	///////////////norhan///////////////
	getTopics(state) {
		return state.topics;
	},
};
