
/**
 * The module 'UserStore' object.
 * @module UserGetters
 * @type {object}
 * @getter {object} getUserData={userData,userModeratorData} Returns an Object contain userData for user Card, userModeratorData for moderator card property.
 * @getter {object} getUserPostData=postData Returns Object contain postData.
 * @getter {object} getStaticSocialLinks=socialLinkItems Returns a property that is a number.
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
	getStaticSocialLinks(state) {
		return state.socialLinkItems;
	},
	getSocialLinkIcon(state) {
		return state.socialLinkItems;
	},
};
