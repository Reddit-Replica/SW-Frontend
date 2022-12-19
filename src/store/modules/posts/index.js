import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
export default {
	namespaced: true,
	/**
	 * The Vuex 'PostsState' object.
	 * @name PostsState
	 * @type {object}
	 * @property {Object} kind this is the kind of the post .
	 * @property {Object} subreddit this is the subreddit of the post.
	 * @property {Object} inSubreddit This is in subreddit of the post.
	 * @property {Object} title This is the title of the post.
	 * @property {Object} content This is the content of the post.
	 * @property {Array} files This is the response from Server.
	 * @property {Boolean} nsfw This is the nsfw of the post.
	 * @property {Boolean} spoiler This is the spoiler of the post.
	 * @property {Object} flairId This is the flair id of the post.
	 * @property {Array} imageCaptions This is the image captions of the post.
	 * @property {Array} imageLinks This is the image links of the post.
	 * @property {Boolean} sendReplies This is the send replies fof post.
	 * @property {Array} allSubreddits This is allSubreddits in Server.
	 */
	state() {
		return {
			title: null,
			kind: null,
			subreddit: null,
			inSubreddit: null,
			content: null,
			files: [{}],
			nsfw: false,
			spoiler: false,
			flairId: null,
			imageCaptions: [],
			imageLinks: [],
			images: [],
			video: null,
			videoOrimage: null,
			sendReplies: false,
			allSubreddits: [],
			postData: null,
			name: null,
		};
	},
	actions,
	mutations,
	getters,
};
