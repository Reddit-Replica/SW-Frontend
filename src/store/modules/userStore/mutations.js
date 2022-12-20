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
 * @mutator {object} SetListOfBlockedUsers=blockedUsersData sets the blocked users data
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
	setUserCommentsData(state, payload) {
		if (payload.responseStatus == 200)
			Object.assign(state.commentsData, payload.responseData); // assign data to user Data
		return payload.responseStatus;
	},
	setUserMoreCommentsData(state, payload) {
		if (payload.responseStatus == 200) {
			// Object.assign(state.commentsData, payload.responseData); // assign data to user Data
			console.log('before commit', payload.responseData);
			state.commentsData.before = payload.responseData.before;
			state.commentsData.after = payload.responseData.after;
			state.commentsData.children.push(...payload.responseData.children);
			console.log('after commit', state.postData);
		}
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
		if (payload.blockUnblockData.remove) {
			let deleteIndex = -1;
			state.blockedUsersData.children.forEach((element, index) => {
				if (element.data.username === payload.blockUnblockData.username)
					deleteIndex = index;
			});
			state.blockedUsersData.children.splice(deleteIndex, 1);
		}
		state.userData.blocked = payload.blockUnblockData.block;
	},
	SetListOfBlockedUsers(state, payload) {
		state.blockedUsersData = payload.responseData;
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
	setUserOverviewData(state, payload) {
		if (payload.responseStatus == 200)
			Object.assign(state.overviewData, payload.responseData); // assign data to user Data
		return payload.responseStatus;
	},
	setUserSavedData(state, payload) {
		if (payload.responseStatus == 200)
			Object.assign(state.savedData, payload.responseData); // assign data to user Data
		return payload.responseStatus;
	},
	setSubreddits(state, payload) {
		state.listOfSubreddits = payload;
	},
	setBefore(state, payload) {
		state.before = payload;
	},
	setAfter(state, payload) {
		state.after = payload;
	},
	deleteUserSocialLink(state, payload) {
		state.userData.socialLinks.pop(payload.newSocialLink);
	},
};
