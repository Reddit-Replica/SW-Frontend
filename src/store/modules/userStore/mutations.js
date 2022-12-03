/**
 * The module 'setters' object.
 * @module UserMutations
 * @type {object}
 * @mutator {object} setUserData=userData Sets the User Data.
 * @mutator {object} setUserPostData=strProp Sets the post Data.
 * @mutator {object} addUserSocialLink=numProp Sets the social link item.
 * @mutator {object} addUserProfilePicture=userData.picture Sets the profile picture.
 * @mutator {object} addUserProfileBannerImageUrl=userData.banner Sets profile Banner.
 * @mutator {object} followUnfollowUser=userData.followed sets follow Or unfollow user.
 * @mutator {object} blockUnblockUser=userData.blocked sets block Or unblock user .
 * @mutator {object} getSocialLinkIcon=socialLinkItems return icon of a certain social link.
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
