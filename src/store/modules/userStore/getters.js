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
