/**
 * The module 'setters' object.
 * @module UserPostsMutations
 * @type {object}
 * @mutator {object} setUserPostData=strProp Sets the post Data.
 */

export default {
	setUserPostData(state, payload) {
		if (payload.responseStatus == 200)
			Object.assign(state.postData, payload.responseData); // assign data to user Data
		return payload.responseStatus;
	},
	setInsightsData(state, payload) {
		Object.assign(state.insightsData, payload.responseData); // assign data to user Data
	},
	approvePostOrComment(state, payload) {
		if (payload.type == 'post') {
			state.postData.children.array.forEach((element) => {
				if (element.id == payload.id) {
					element.data.moderation.approvedBy = payload.username;
					element.data.moderation.approvedDate = 'currentDate';
				}
			});
		}
	},
};
