/**
 * @module UserActions
 */
export default {
	/**
	 * Make a request to get user information with specific name ,
	 * @action getUserData=setUserData
	 * @param {object} payload An object contains baseurl and user name.
	 * @returns {integer} status code
	 */
	async getUserData(context, payload) {
		console.log('kkk', payload);
		const baseurl = payload.baseurl;
		// const response = await fetch(baseurl + `/user`);
		const response = await fetch(baseurl + `/user/${payload.userName}/about`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		});
		const responseData = await response.json();
		console.log('kkk', responseData);
		// console.log(responseData);
		// if (!response.ok) {
		// 	const error = new Error(
		// 		responseData.message || 'Failed to fetch User Data!'
		// 	);
		// 	console.log(response.status);
		// 	throw error;
		// }
		// console.log('medo', response.status);
		// console.log(responseData);
		if (payload.auth == 'medo') {
			if (response.status == 200)
				context.commit('setUserData', {
					responseData,
					responseStatus: response.status,
				});
		}
		return response.status;
	},
	async getUserTempData(context, payload) {
		const baseurl = payload.baseurl;
		// const response = await fetch(baseurl + `/user`);
		const response = await fetch(baseurl + `/user/${payload.userName}/about`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		});
		const responseData = await response.json();
		// console.log(responseData);
		// if (!response.ok) {
		// 	const error = new Error(
		// 		responseData.message || 'Failed to fetch User Data!'
		// 	);
		// 	console.log(response.status);
		// 	throw error;
		// }
		// console.log('medo', response.status);
		// console.log(responseData);
		if (response.status == 200) return responseData;
		// context.commit('setUserData', {
		// 	responseData,
		// 	responseStatus: response.status,
		// });
		return response.status;
	},
	/**
	 * Make a request to get user posts data,
	 * @action getUserPostData=setUserPostData
	 * @param {object} payload An object contains baseurl and user name.
	 * @returns {integer} return status Code
	 */
	async getUserPostData(context, payload) {
		console.log('ggg', payload.userName);
		const baseurl = payload.baseurl;
		let url = new URL(baseurl + `/user/${payload.userName}/posts`);
		let params = {
			sort: `${payload.params.sort}`,
			time: `${payload.params.time}`,
			before: `${payload.params.before}`,
			after: `${payload.params.after}`,
		};
		Object.keys(params).forEach((key) =>
			url.searchParams.append(key, params[key])
		);
		const response = await fetch(baseurl + `/userpostdata`); // mock server
		// const response = await fetch(url); // API
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to fetch User Data!'
			);
			throw error;
		}
		// if (response.status == 200)
		context.commit('setUserPostData', {
			responseData,
			responseStatus: response.status,
		});
		return response.status;
	},

	async getUserCommentsData(context, payload) {
		const baseurl = payload.baseurl;
		// let url = new URL(baseurl + `/user/${payload.username}/comments`);
		// let params = {
		// 	sort: `${payload.params.sort}`,
		// 	time: `${payload.params.time}`,
		// 	before: `${payload.params.before}`,
		// 	after: `${payload.params.after}`,
		// 	limit: `${payload.params.limit}`,
		// };
		// Object.keys(params).forEach((key) =>
		// 	url.searchParams.append(key, params[key])
		// );
		// const response = await fetch(baseurl + `/user-comments`); // mock server
		let response;
		try {
			response = await fetch(
				baseurl +
					`/user/${payload.username}/comments?sort=${payload.params.sort}&time=${payload.params.time}&before=${payload.params.before}&after=${payload.params.after}&limit=${payload.params.limit}`,
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
					},
				}
			); // API
		} catch (error) {
			console.log(error);
		}
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to fetch User Data!'
			);
			console.log(error);
		}
		console.log(responseData.message);
		if (response.status == 200)
			context.commit('setUserCommentsData', {
				responseData,
				responseStatus: response.status,
			});
		return response.status;
	},

	async getUserMoreCommentsData(context, payload) {
		const baseurl = payload.baseurl;
		let url = new URL(baseurl + `/user/${payload.username}/comments`);
		let params = {
			sort: `${payload.params.sort}`,
			time: `${payload.params.time}`,
			before: `${payload.params.before}`,
			after: `${payload.params.after}`,
			limit: `${payload.params.limit}`,
		};
		Object.keys(params).forEach((key) =>
			url.searchParams.append(key, params[key])
		);
		// const response = await fetch(baseurl + `/user-comments`); // mock server
		let response;
		try {
			response = await fetch(url, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}); // API
		} catch (error) {
			console.log(error);
		}
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to fetch User Data!'
			);
			console.log(error);
		}
		console.log(responseData.message);
		if (response.status == 200)
			context.commit('setUserMoreCommentsData', {
				responseData,
				responseStatus: response.status,
			});
		return response.status;
	},

	/**
	 * Make a request to add new social link
	 * @action AddNewSocialLink=addUserSocialLink
	 * @param {object} payload An object contains baseurl
	 * @returns {integer} status code
	 */
	async AddNewSocialLink(context, payload) {
		const newSocialLink = payload.newSocialLink;
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/social-link', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(newSocialLink),
		});
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			// throw error;
			console.log(error);
		}
		if (response.status == 201)
			context.commit('addUserSocialLink', {
				newSocialLink,
			});
		return response.status;
	},
	/**
	 * Make a request to Add Profile Picture
	 * @action AddProfilePicture=addUserProfilePicture
	 * @param {object} payload An object contains baseurl
	 * @returns {integer} status code
	 */
	async AddProfilePicture(context, payload) {
		// const profilePictureUrl = payload.profilePictureUrl;
		const file = payload.file;
		const baseurl = payload.baseurl;
		const postInfo = new FormData();
		postInfo.append('avatar', file);
		const response = await fetch(baseurl + '/profile-picture', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: postInfo,
		});
		const responseData = await response.json();
		if (response.status == 200) {
			localStorage.setItem('response', response.status);
			console.log('زى الفل الحمد لله');
		} else if (response.status == 400) {
			const error = new Error(responseData);
			console.log(responseData);
			throw error;
		} else {
			console.log(error);
			const error = new Error('server error');
			throw error;
		}
		let profilePictureUrl = responseData.path;
		console.log(profilePictureUrl);
		if (response.status == 200)
			context.commit('addUserProfilePicture', {
				profilePictureUrl,
			});
		return response.status;
	},
	/**
	 * Make a request to Add Profile Banner
	 * @action AddProfileBanner=addUserProfileBannerImageUrl
	 * @param {object} payload An object contains baseurl
	 * @returns {integer} status code
	 */
	async AddProfileBanner(context, payload) {
		const file = payload.file;
		const baseurl = payload.baseurl;
		// const bannerImageUrl = payload.bannerImageUrl;
		const postInfo = new FormData();
		postInfo.append('banner', file);
		const response = await fetch(baseurl + '/banner-image', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: postInfo,
		});
		const responseData = await response.text();
		if (response.status == 200) {
			localStorage.setItem('response', response.status);
			console.log('زى الفل الحمد لله');
		} else if (response.status == 400) {
			const error = new Error(responseData);
			console.log(responseData);
			throw error;
		} else {
			console.log(error);
			const error = new Error('server error');
			throw error;
		}
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
		// if (response.status == 200)
		// 	context.commit('addUserProfileBannerImageUrl', {
		// 		bannerImageUrl,
		// 	});
		return response.status;
	},
	/**
	 * Make a request to followUnfollowUser
	 * @action followUnfollowUser=followUnfollowUser
	 * @param {object} payload An object contains baseurl , object followUnfollowData contains (username,follow flag)
	 * @returns {integer} status code
	 */
	async followUnfollowUser(context, payload) {
		const followUnfollowData = payload.followUnfollowData;
		console.log('actiom', followUnfollowData);
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/follow-user', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(followUnfollowData),
		});
		console.log(response.status);
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			console.log('error in follow');
			console.log(responseData);
			console.log(localStorage.getItem('accessToken'));
			throw error;
		}
		console.log(response.status);
		// if(response.status == 200)
		context.commit('followUnfollowUser', {
			followUnfollowData,
		});
		return response.status;
	},
	/**
	 * Make a request to blockUnblockUser
	 * @action blockUnblockUser=blockUnblockUser
	 * @param {object} payload An object contains baseurl , object conatins blockUnblockData (username,block flag)
	 * @returns {integer} status code
	 */
	async blockUnblockUser(context, payload) {
		const blockUnblockData = payload.blockUnblockData;
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/block-user', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
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
		console.log(response.status);
		console.log(responseData);
		// if(response.status == 200)
		context.commit('blockUnblockUser', {
			blockUnblockData,
		});
		return response.status;
	},
	/**
	 * Make a request to FetchListOfBlockedUsers
	 * @action FetchListOfBlockedUsersr=SetListOfBlockedUsers
	 * @param {object} payload An object contains baseurl
	 * @returns {integer} status code
	 */
	async FetchListOfBlockedUsers(context, payload) {
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/blocked-users', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		});
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
		console.log(response.status);
		console.log(responseData);
		if (response.status == 200)
			context.commit('SetListOfBlockedUsers', {
				responseData,
			});
		return response.status;
	},

	async getUserSubreddits(context, payload) {
		const beforeMod = payload.beforeMod;
		const afterMod = payload.afterMod;
		const baseurl = payload.baseurl;
		let mediaQuery;
		if (beforeMod) {
			mediaQuery = '?limit=10&before=' + beforeMod;
		} else if (afterMod) {
			mediaQuery = '?limit=10&after=' + afterMod;
		} else {
			mediaQuery = '?limit=10';
		}
		const response = await fetch(baseurl + `/joined-subreddits${mediaQuery}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		});
		const responseData = await response.json();
		// console.log(responseData);
		const subreddits = [];
		if (response.status == 200) {
			let before, after;
			before = '';
			after = '';
			if (responseData.before) {
				before = responseData.before;
			}
			if (responseData.after) {
				after = responseData.after;
			}
			for (let i = 0; i < responseData.children.length; i++) {
				const subreddit = {
					title: responseData.children[i].title,
					picture: responseData.children[i].picture,
					members: responseData.children[i].members,
				};
				subreddits.push(subreddit);
			}
			// console.log(subreddits);
			context.commit('setSubreddits', subreddits);
			context.commit('setBefore', before);
			context.commit('setAfter', after);
		} else if (response.status == 401) {
			const error = new Error(responseData.error || 'Unauthorized access');
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Not found');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Internal Server Error');
			throw error;
		}
	},
	async DeleteSocialLink(context, payload) {
		const socialInfo = {
			type: payload.type,
			displayText: payload.displayText,
			link: payload.link,
		};
		const baseurl = payload.baseurl;
		console.log(socialInfo);
		const response = await fetch(baseurl + '/social-link', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(socialInfo),
		});
		//const responseData = await response.json();
		let type = payload.type;
		if (response.status == 204) {
			// console.log(responseData);
			console.log(response);
			context.commit('deleteUserSocialLink', {
				type,
			});
		} else if (response.status == 401) {
			const error = new Error(response.error);
			console.log(error);
			throw error;
		} else {
			const error = new Error('server error');
			console.log(error);
			throw error;
		}
		return response.status;
	},
};
