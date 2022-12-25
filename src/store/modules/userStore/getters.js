/**
 * The module 'UserStore' object.
 * @module UserGetters
 * @type {object}
 * @getter {object} getUserData={userData,userModeratorData} Returns an Object contain userData for user Card, userModeratorData for moderator card property.
 * @getter {object} getUserPostData=postData Returns Object contain postData.
 * @getter {object} getStaticSocialLinks=socialLinkItems Returns array of user social link.
 * @getter {object} getUserCommentsData=commentsData Returns object contains all user comments data
 * @getter {object} getBlockedUsersData=blockedUsersData Returns object contains all  blocked user data
 */
export default {
	getUserData(state) {
		return {
			userData: state.userData,
			userModeratorData: state.userData.moderatorOf,
		};
	},
	getUserPostData(state) {
		return {
			postData: state.postData,
		};
	},
	getUserCommentsData(state) {
		return {
			commentsData: state.commentsData,
		};
	},
	getStaticSocialLinks(state) {
		return state.socialLinkItems;
	},
	getSocialLinkIcon(state) {
		return state.socialLinkItems;
	},
	getBlockedUsersData(state) {
		return state.blockedUsersData;
	},
	getUserOverviewData(state) {
		return {
			overviewData: state.overviewData,
		};
	},
	getUserSavedData(state) {
		return {
			savedData: state.savedData,
		};
	},
	listOfSubreddits(state) {
		//console.log(state.listOfSubreddits);
		return state.listOfSubreddits;
	},
	before(state) {
		return state.before;
	},
	after(state) {
		return state.after;
	},
};
