export default {
	setUserData(state, payload) {
		if (payload.responseStatus == 200)
			Object.assign(state.userData, payload.responseData); // assign data to user Data

		return payload.responseStatus;
	},
	addUserSocialLink(state, payload) {
		state.userData.socialLinks.push(payload.newSocialLink);
		console.log(state.userData);
	},
	getSocialLinkIcon(state, payload) {
		console.log('gfght');
		console.log(11, payload.id);
		state.socialLinkItems.forEach((element) => {
			if (element.text === payload.id) {
				return element.imgSrc;
			}
		});
		return -1;
	},
};
