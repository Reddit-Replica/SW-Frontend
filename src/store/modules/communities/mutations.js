/**
 * The module 'CommunityMutations' object.
 * @name CommunityMutations
 * @type {Object}
 * @mutator {Boolean} checkSubredditName=subredditNameTaken Sets the state boolean property "subredditNameTaken".
 * @mutator {Array} setSavedCategories=categories Sets the state array property "categories".
 * @mutator {Object} setSubreddit=subreddit Sets the state object property "subreddit".
 * @mutator {Array} setPosts=posts Sets the state array property "posts".
 * @mutator {Boolean} createdSuccessfully=createdSuccessfully Sets the state boolean property "createdSuccessfully".
 * @mutator {Boolean} setLeaveOwner=leaveOwner Sets the state boolean property "leaveOwner".
 * @mutator {String} setSubredditPicture=subredditPicture Sets the state string property "subredditPicture".
 * @mutator {String} setSubredditBanner=subredditBanner Sets the state string property "subredditBanner".
 * @mutator {Array} setTopics=topics Sets the state array property "topics".
 * @mutator {Boolean} notFound=notFound Sets the state boolean property "notFound".
 */
export default {
	checkSubredditName(state, payload) {
		state.subredditNameTaken = payload;
	},
	setSavedCategories(state, payload) {
		state.categories = payload;
	},
	setSubreddit(state, payload) {
		state.subreddit = payload;
	},
	setPosts(state, payload) {
		state.posts = payload;
	},
	createdSuccessfully(state, payload) {
		state.createdSuccessfully = payload;
	},
	setLeaveOwner(state, payload) {
		state.leaveOwner = payload;
	},
	setSubredditPicture(state, payload) {
		state.subredditPicture = payload;
	},
	setSubredditBanner(state, payload) {
		state.subredditBanner = payload;
	},
	setTopics(state, payload) {
		state.topics = payload;
	},
	notFound(state, payload) {
		console.log(payload);
		state.notFound = payload;
	},
};
