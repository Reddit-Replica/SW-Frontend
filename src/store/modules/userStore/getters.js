export default {
	getUserData(state) {
		return {
			userData: state.userData,
			userModeratorData: state.userData.moderatorOf,
		};
	},
	getStaticSocialLinks(state) {
		return state.socialLinkItems;
	},
	getSocialLinkIcon(state) {
		return state.socialLinkItems;
	},
};
