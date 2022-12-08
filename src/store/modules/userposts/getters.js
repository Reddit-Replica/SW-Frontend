/**
 * The module 'UserStore' object.
 * @module UserPostsGetters
 * @type {object}
 * @getter {object} getUserPostData=postData Returns Object contain postData.
 */
export default {
	getUserPostData(state) {
		return {
			postData: state.postData,
		};
	},
	getInsightsData(state) {
		return {
			insightsData: state.insightsData,
		};
	},
};
