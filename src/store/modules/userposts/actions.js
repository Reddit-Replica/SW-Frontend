export default {
	/**
	 * Make a request to get user posts data,
	 * @action getUserPostData=setUserPostData
	 * @param {object} payload An object contains baseurl and user name.
	 * @returns {integer} return status Code
	 */
	async getUserPostData(context, payload) {
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
		// const response = await fetch(baseurl + `/userpostdata`); // mock server
		const response = await fetch(url, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		}); // API
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to fetch User Data!'
			);
			throw error;
		}
		console.log(responseData);
		if (response.status == 200)
			context.commit('setUserPostData', {
				responseData,
				responseStatus: response.status,
			});
		return response.status;
	},
	async getUserPinnedPostData(context, payload) {
		const baseurl = payload.baseurl;
		let url = new URL(baseurl + `/pinned-posts`);
		// const response = await fetch(baseurl + `/userpostdata`); // mock server
		const response = await fetch(url, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		}); // API
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to fetch User Data!'
			);
			// throw error;
			console.log(error);
		}
		console.log('getUserPinnedPostData', responseData);
		if (response.status == 200)
			context.commit('setUserPinnedPostData', {
				responseData,
				responseStatus: response.status,
			});
		return response.status;
	},
	async getUserHistoryPostData(context, payload) {
		const baseurl = payload.baseurl;
		let url = new URL(baseurl + `/user/${payload.userName}/history`);
		let params = {
			sort: `${payload.params.sort}`,
			time: `${payload.params.time}`,
			before: `${payload.params.before}`,
			after: `${payload.params.after}`,
		};
		Object.keys(params).forEach((key) =>
			url.searchParams.append(key, params[key])
		);
		// const response = await fetch(baseurl + `/userpostdata`); // mock server
		const response = await fetch(url, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		}); // API
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to fetch User Data!'
			);
			throw error;
		}
		console.log(responseData);
		if (response.status == 200)
			context.commit('setUserPostData', {
				responseData,
				responseStatus: response.status,
			});
		return response.status;
	},
	async getUserUpVotedPostData(context, payload) {
		const baseurl = payload.baseurl;
		let url = new URL(baseurl + `/user/${payload.userName}/upvoted`);
		let params = {
			sort: `${payload.params.sort}`,
			time: `${payload.params.time}`,
			before: `${payload.params.before}`,
			after: `${payload.params.after}`,
		};
		Object.keys(params).forEach((key) =>
			url.searchParams.append(key, params[key])
		);
		// const response = await fetch(baseurl + `/userpostdata`); // mock server
		const response = await fetch(url, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		}); // API
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to fetch User Data!'
			);
			throw error;
		}
		console.log(responseData);
		if (response.status == 200)
			context.commit('setUserPostData', {
				responseData,
				responseStatus: response.status,
			});
		return response.status;
	},
	async getUserDownVotedPostData(context, payload) {
		const baseurl = payload.baseurl;
		let url = new URL(baseurl + `/user/${payload.userName}/downvoted`);
		let params = {
			sort: `${payload.params.sort}`,
			time: `${payload.params.time}`,
			before: `${payload.params.before}`,
			after: `${payload.params.after}`,
		};
		Object.keys(params).forEach((key) =>
			url.searchParams.append(key, params[key])
		);
		// const response = await fetch(baseurl + `/userpostdata`); // mock server
		const response = await fetch(url, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		}); // API
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to fetch User Data!'
			);
			throw error;
		}
		console.log(responseData);
		if (response.status == 200)
			context.commit('setUserPostData', {
				responseData,
				responseStatus: response.status,
			});
		return response.status;
	},
	async getUserHiddenPostData(context, payload) {
		const baseurl = payload.baseurl;
		let url = new URL(baseurl + `/user/${payload.userName}/hidden`);
		let params = {
			sort: `${payload.params.sort}`,
			time: `${payload.params.time}`,
			before: `${payload.params.before}`,
			after: `${payload.params.after}`,
		};
		Object.keys(params).forEach((key) =>
			url.searchParams.append(key, params[key])
		);
		// const response = await fetch(baseurl + `/userpostdata`); // mock server
		const response = await fetch(url, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		}); // API
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to fetch User Data!'
			);
			throw error;
		}
		console.log(responseData);
		if (response.status == 200)
			context.commit('setUserPostData', {
				responseData,
				responseStatus: response.status,
			});
		return response.status;
	},
	async getUserCommentsData(context, payload) {
		const baseurl = payload.baseurl;
		let url = new URL(baseurl + `/user/${payload.userName}/comments`);
		let params = {
			sort: `${payload.params.sort}`,
			time: `${payload.params.time}`,
			before: `${payload.params.before}`,
			after: `${payload.params.after}`,
		};
		Object.keys(params).forEach((key) =>
			url.searchParams.append(key, params[key])
		);
		// const response = await fetch(baseurl + `/user-comments`); // mock server
		const response = await fetch(url, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		}); // API
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to fetch User Data!'
			);
			throw error;
		}
		// if (response.status == 200)
		context.commit('setUserCommentsData', {
			responseData,
			responseStatus: response.status,
		});
		return response.status;
	},
	async getInsightsData(context, payload) {
		const baseurl = payload.baseurl;
		let url = new URL(baseurl + `/post-insights`);
		let params = {
			id: `${payload.params.id}`,
		};
		Object.keys(params).forEach((key) =>
			url.searchParams.append(key, params[key])
		);
		// const response = await fetch(baseurl + `/post-insights`); // mock server
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		}); // API
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to fetch User Data!'
			);
			throw error;
		}
		// if (response.status == 200)
		context.commit('setInsightsData', {
			responseData,
		});
		return response.status;
	},
	async approvePostOrComment(context, payload) {
		const ApprovePostOrCommentData = payload.ApprovePostOrCommentData; // id ,type
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/approve', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(ApprovePostOrCommentData),
		});
		const responseData = await response.json();
		// if (!response.ok) {
		// 	const error = new Error(
		// 		responseData.message || 'Failed to send request.'
		// 	);
		// 	throw error;
		// }
		console.log(response.status);
		console.log(responseData);
		console.log('commit');
		// if (response.status == 200)
		context.commit('ApprovePostOrComment', {
			ApprovePostOrCommentData,
		});
		return response.status;
	},
	async removePostOrComment(context, payload) {
		const removePostOrCommentData = payload.removePostOrCommentData; // id ,type
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/remove', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(removePostOrCommentData),
		});
		const responseData = await response.json();
		// if (!response.ok) {
		// 	const error = new Error(
		// 		responseData.message || 'Failed to send request.'
		// 	);
		// 	throw error;
		// }
		console.log(response.status);
		console.log(responseData);
		if (response.status == 200)
			context.commit('removePostOrComment', {
				removePostOrCommentData,
			});
		return response.status;
	},
	async lockUnLockPostOrComment(context, payload) {
		const lockUnlockData = payload.lockUnlockData; // id ,type
		console.log(lockUnlockData);
		const baseurl = payload.baseurl;
		let response;
		if (payload.key == 'lock') {
			response = await fetch(baseurl + '/lock', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
				body: JSON.stringify(lockUnlockData),
			});
		} else {
			response = await fetch(baseurl + '/unlock', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
				body: JSON.stringify(lockUnlockData),
			});
		}
		const responseData = await response.json();
		if (!response.ok) {
			// const error = new Error(
			// 	responseData.message || 'Failed to send request.'
			// );
			// throw error;
		}
		console.log(response.status);
		console.log(responseData);
		if (response.status == 200)
			context.commit('lockUnLockPostOrComment', {
				lockUnlockData,
				key: payload.key,
			});
		return response.status;
	},
	async markUnMarkSendMeReply(context, payload) {
		const sendReplyData = payload.sendReplyData; // id ,type
		console.log(sendReplyData);
		const baseurl = payload.baseurl;
		let response;
		response = await fetch(baseurl + '/send-replies', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(sendReplyData),
		});

		const responseData = await response.json();
		if (!response.ok) {
			// const error = new Error(
			// 	responseData.message || 'Failed to send request.'
			// );
			// throw error;
		}
		console.log(response.status);
		console.log(responseData);
		if (response.status == 200)
			context.commit('markUnMarkSendMeReply', {
				sendReplyData,
			});
		return response.status;
	},
	async unlockPostOrComment(context, payload) {
		const ApprovePostOrCommentData = payload.ApprovePostOrCommentData; // id ,type
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/unlock', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(ApprovePostOrCommentData),
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
		context.commit('ApprovePostOrComment', {
			ApprovePostOrCommentData,
		});
		return response.status;
	},
	async markPostAsSpoiler(context, payload) {
		const spoilerData = payload.spoilerData; // id of post
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/mark-spoiler', {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(spoilerData),
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
		context.commit('markPostAsSpoiler', {
			spoilerData,
		});
		return response.status;
	},
	async unmarkPostAsSpoiler(context, payload) {
		const spoilerData = payload.spoilerData; // id of post
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/unmark-spoiler', {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(spoilerData),
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
		context.commit('unmarkPostAsSpoiler', {
			spoilerData,
		});
		return response.status;
	},
	async markUnMarkPostAsSpoiler(context, payload) {
		const spoilerData = payload.spoilerData; // id of post
		const baseurl = payload.baseurl;
		let response;
		if (payload.spoilerData.type == 'mark') {
			response = await fetch(baseurl + '/mark-spoiler', {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
				body: JSON.stringify(spoilerData),
			});
		} else {
			response = await fetch(baseurl + '/unmark-spoiler', {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
				body: JSON.stringify(spoilerData),
			});
		}
		const responseData = await response.json();
		// if (!response.ok) {
		// 	const error = new Error(
		// 		responseData.message || 'Failed to send request.'
		// 	);
		// 	throw error;
		// }
		console.log(response.status);
		console.log(responseData);
		// if(response.status == 200)
		context.commit('markUnMarkPostAsSpoiler', {
			spoilerData,
		});
		return response.status;
	},
	async markPostAsNSFW(context, payload) {
		const nsfwData = payload.nsfwData; // id of post
		const baseurl = payload.baseurl;
		let response;
		if (payload.nsfwData.type == 'mark') {
			response = await fetch(baseurl + '/mark-nsfw', {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
				body: JSON.stringify(nsfwData),
			});
		} else {
			response = await fetch(baseurl + '/unmark-nsfw', {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
				body: JSON.stringify(nsfwData),
			});
		}
		const responseData = await response.json();
		// if (!response.ok) {
		// 	const error = new Error(
		// 		responseData.message || 'Failed to send request.'
		// 	);
		// 	throw error;
		// }
		console.log(response.status);
		console.log(responseData);
		// if(response.status == 200)
		context.commit('markPostAsNSFW', {
			nsfwData,
		});
		return response.status;
	},
	async pinUnpinPost(context, payload) {
		const pinUnpinData = payload.pinUnpinData; // id of post pin boolean
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/pin-post', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(pinUnpinData),
		});
		const responseData = await response.json();
		// if (!response.ok) {
		// 	const error = new Error(
		// 		responseData.message || 'Failed to send request.'
		// 	);
		// 	throw error;
		// }
		console.log(response.status);
		console.log(responseData);
		// if(response.status == 200)
		context.commit('pinUnpinPost', {
			pinUnpinData,
		});
		return response.status;
	},
	async markSpam(context, payload) {
		const markSpamData = payload.markSpamData; // id of post pin boolean
		console.log('markSpamActions', markSpamData);
		const baseurl = payload.baseurl;
		let response;
		try {
			response = await fetch(baseurl + '/mod-spam', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
				body: JSON.stringify(markSpamData),
			});
		} catch (error) {
			console.log(error);
		}
		// const responseData = await response.json();
		if (!response.ok) {
			// const error = new Error(
			// 	responseData.message || 'Failed to send request.'
			// );
			// throw error;
			// console.log(responseData);
		}
		// console.log(response.status);
		// console.log(responseData);
		// if(response.status == 200)
		context.commit('markSpam', {
			payload,
		});
		return response.status;
	},
	async unmarkSpam(context, payload) {
		const unmarkSpamData = payload.unmarkSpamData; // id of post pin boolean
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/unmark-spam', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(unmarkSpamData),
		});
		const responseData = await response.json();
		// if (!response.ok) {
		// 	const error = new Error(
		// 		responseData.message || 'Failed to send request.'
		// 	);
		// 	throw error;
		// }
		console.log(response.status);
		console.log(responseData);
		// if(response.status == 200)
		context.commit('unmarkSpam', {
			payload,
		});
		return response.status;
	},
};
