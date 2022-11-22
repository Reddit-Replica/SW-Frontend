export default {
	async getUserData(context, payload) {
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + `/user`);
		// const response = await fetch(baseurl + `/user/${payload.userName}/about`);
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to fetch User Data!'
			);
			throw error;
		}
		context.commit('setUserData', {
			responseData,
			responseStatus: response.status,
		});
	},
	async getUserPostData(context, payload) {
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + `/userpostdata`);
		// const response = await fetch(baseurl + `/user/${payload.userName}/posts`);
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to fetch User Data!'
			);
			throw error;
		}
		context.commit('setUserPostData', {
			responseData,
			responseStatus: response.status,
		});
	},
	async AddNewSocialLink(context, payload) {
		const newSocialLink = payload.newSocialLink;
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/social-link', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('userName')}`,
			},
			body: JSON.stringify(newSocialLink),
		});
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
		context.commit('addUserSocialLink', {
			newSocialLink,
		});
	},
	async AddProfilePicture(context, payload) {
		const profilePictureUrl = payload.profilePictureUrl;
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/profile-picture', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('userName')}`,
			},
			body: JSON.stringify(profilePictureUrl),
		});
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
		context.commit('addUserProfilePicture', {
			profilePictureUrl,
		});
	},
	async AddProfileBanner(context, payload) {
		const bannerImageUrl = payload.bannerImageUrl;
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/banner-image', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('userName')}`,
			},
			body: JSON.stringify(bannerImageUrl),
		});
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
		context.commit('addUserProfileBannerImageUrl', {
			bannerImageUrl,
		});
	},
	async followUnfollowUser(context, payload) {
		const followUnfollowData = payload.followUnfollowData;
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/follow-user', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('userName')}`,
			},
			body: JSON.stringify(followUnfollowData),
		});
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
		context.commit('followUnfollowUser', {
			followUnfollowData,
		});
	},
	async blockUnblockUser(context, payload) {
		const blockUnblockData = payload.blockUnblockData;
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/block-user', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('userName')}`,
			},
			body: JSON.stringify(blockUnblockData),
		});
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
		context.commit('blockUnblockUser', {
			blockUnblockData,
		});
	},
};
