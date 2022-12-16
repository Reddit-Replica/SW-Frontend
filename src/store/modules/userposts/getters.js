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
	getUserPinnedPostData(state) {
		return {
			pinnedPostData: state.pinnedPostData.pinnedPosts,
		};
	},
	getInsightsData(state) {
		return {
			insightsData: state.insightsData,
		};
	},
	getUserOverviewData(state) {
		return {
			overviewData: state.overviewData,
		};
	},
	getUserSavedData(state) {
		return {
			savedData: state.overviewData,
		};
	},
};
