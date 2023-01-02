/**
 * The module 'UserStore' object.
 * @module UserPostsGetters
 * @type {object}
 * @getter {object} getUserPostData=postData Returns Object contain postData.
 * @getter {object} getUserPinnedPostData=pinnedPostData.pinnedPosts Returns Object contain pinnedPosts.
 * @getter {object} getInsightsData=insightsData Returns Object contain insightsData.
 * @getter {object} getUserOverviewData=overviewData Returns Object contain overviewData.
 * @getter {object} getUserSavedData=overviewData Returns Object contain overviewData.
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
