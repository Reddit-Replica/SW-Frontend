/**
 * The module 'CommunityStore' object.
 * @name CommunityGetters
 * @type {Object}
 * @getter {Boolean} subredditNameTaken=subredditNameTaken Returns an boolean checks if the subreddit name is used before property.
 * @getter {Array} categories=categories Returns an array contains recommended categories for creating a subreddit property.
 * @getter {Object} getSubreddit=getSubreddit Returns an object contains subreddit details property.
 * @getter {Array} getPosts=getPosts Returns an array contains posts in a subreddit property.
 * @getter {Boolean} createdSuccessfully=createdSuccessfully Returns an boolean checks if the subreddit created successfully property.
 * @getter {Boolean} getLeaveOwner=leaveOwner Returns an boolean checks if the subreddit's moderator is trying to leave it property.
 * @getter {String} getSubredditPicture=subredditPicture Returns a string contains the subreddit's picture path property.
 * @getter {String} getSubredditBanner=subredditBanner Returns a string contains the subreddit's banner image path property.
 * @getter {Array} getTopics=topics Returns an array contains suggested topics for a subreddit property.
 * @getter {Boolean} notFound=notFound Returns an boolean checks if the subreddit is not found property.
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
		return state.posts;
	},
	createdSuccessfully(state) {
		return state.createdSuccessfully;
	},
	getLeaveOwner(state) {
		return state.leaveOwner;
	},
	getSubredditPicture(state) {
		return state.subredditPicture;
	},
	getSubredditBanner(state) {
		return state.subredditBanner;
	},
	///////////////norhan///////////////
	getTopics(state) {
		return state.topics;
	},
	notFound(state) {
		//console.log(state.notFound);
		return state.notFound;
	},
};
