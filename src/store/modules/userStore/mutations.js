/**
 * The module 'setters' object.
 * @name userMutations
 * @type {object} 
 * @mutator {object} setUserData=userData Sets the state boolean property.
 * @mutator {object} setUserPostData=strProp Sets the state string property.
 * @mutator {object} addUserSocialLink=numProp Sets the state numerical property.
 */
export default {
	setUserData(state, payload) {
		if (payload.responseStatus == 200)
			Object.assign(state.userData, payload.responseData); // assign data to user Data
		return payload.responseStatus;
	},
	setUserPostData(state, payload) {
		if (payload.responseStatus == 200)
			Object.assign(state.postData, payload.responseData); // assign data to user Data
		return payload.responseStatus;
	},
	addUserSocialLink(state, payload) {
		state.userData.socialLinks.push(payload.newSocialLink);
	},
	addUserProfilePicture(state, payload) {
		state.userData.picture = payload.profilePictureUrl;
	},
	addUserProfileBannerImageUrl(state, payload) {
		state.userData.banner = payload.bannerImageUrl;
	},
	followUnfollowUser(state, payload) {
		state.userData.followed = payload.followUnfollowData.follow;
	},
	blockUnblockUser(state, payload) {
		state.userData.blocked = payload.blockUnblockData.block;
	},
	getSocialLinkIcon(state, payload) {
		console.log(11, payload.id);
		state.socialLinkItems.forEach((element) => {
			if (element.text === payload.id) {
				return element.imgSrc;
			}
		});
		return -1;
	},
};
