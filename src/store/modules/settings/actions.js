export default {
	//////////////email setting///////////////////
	async changenewFollowerEmail(context, payload) {
		const setting = {
			newFollowerEmail: payload.newFollowerEmail,
		};

		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/account-settings', {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(setting),
		});
		const responseData = await response.json();
		if (response.status == 200) {
			console.log(response);
		} else if (response.status == 401) {
			const error = new Error(responseData.error);
			console.log(error);
			throw error;
		} else {
			const error = new Error('server error');
			console.log(error);
			throw error;
		}
		return response.status;
	},
	async changeunsubscribeFromEmails(context, payload) {
		const setting = {
			unsubscribeFromEmails: payload.unsubscribeFromEmails,
		};

		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/account-settings', {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(setting),
		});
		const responseData = await response.json();
		if (response.status == 200) {
			console.log(response);
		} else if (response.status == 401) {
			const error = new Error(responseData.error);
			console.log(error);
			throw error;
		} else {
			const error = new Error('server error');
			console.log(error);
			throw error;
		}
		return response.status;
	},
	//////////////////// feed settings  ////////////////////////////////////////////
	async changeneadultContent(context, payload) {
		const setting = {
			adultContent: payload.adultContent,
		};

		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/account-settings', {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(setting),
		});
		const responseData = await response.json();
		if (response.status == 200) {
			console.log(response);
		} else if (response.status == 401) {
			const error = new Error(responseData.error);
			console.log(error);
			throw error;
		} else {
			const error = new Error('server error');
			console.log(error);
			throw error;
		}
		return response.status;
	},
	async changeautoplayMedia(context, payload) {
		const setting = {
			autoplayMedia: payload.autoplayMedia,
		};

		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/account-settings', {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(setting),
		});
		const responseData = await response.json();
		if (response.status == 200) {
			console.log(response);
		} else if (response.status == 401) {
			const error = new Error(responseData.error);
			console.log(error);
			throw error;
		} else {
			const error = new Error('server error');
			console.log(error);
			throw error;
		}
		return response.status;
	},

	//////////////////// profile setting ///////////////////////////////////////////

	async changedisplayName(context, payload) {
		const setting = {
			displayName: payload.displayName,
		};

		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/account-settings', {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(setting),
		});
		const responseData = await response.json();
		if (response.status == 200) {
			console.log(response);
		} else if (response.status == 401) {
			const error = new Error(responseData.error);
			console.log(error);
			throw error;
		} else {
			const error = new Error('server error');
			console.log(error);
			throw error;
		}
		return response.status;
	},

	async changeAbout(context, payload) {
		const setting = {
			about: payload.about,
		};

		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/account-settings', {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(setting),
		});
		const responseData = await response.json();
		if (response.status == 200) {
			console.log(response);
		} else if (response.status == 401) {
			const error = new Error(responseData.error);
			console.log(error);
			throw error;
		} else {
			const error = new Error('server error');
			console.log(error);
			throw error;
		}
		return response.status;
	},
	async changeNsfw(context, payload) {
		const setting = {
			nsfw: payload.nsfw,
		};

		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/account-settings', {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(setting),
		});
		const responseData = await response.json();
		if (response.status == 200) {
			console.log(response);
		} else if (response.status == 401) {
			const error = new Error(responseData.error);
			console.log(error);
			throw error;
		} else {
			const error = new Error('server error');
			console.log(error);
			throw error;
		}
		return response.status;
	},
	async changeAllowfollow(context, payload) {
		const setting = {
			allowToFollowYou: payload.allowToFollowYou,
		};

		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/account-settings', {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(setting),
		});
		const responseData = await response.json();
		if (response.status == 200) {
			console.log(response);
		} else if (response.status == 401) {
			const error = new Error(responseData.error);
			console.log(error);
			throw error;
		} else {
			const error = new Error('server error');
			console.log(error);
			throw error;
		}
		return response.status;
	},

	//////////////////// this part for moderation setting //////////////////////////

	async communitySettings(context, payload) {
		// console.log('welcome message');
		// console.log(payload);
		const setting = {
			communityName: payload.communityName,
			mainTopic: payload.mainTopic,
			subTopics: payload.subTopics,
			communityDescription: payload.communityDescription,
			sendWelcomeMessage: payload.sendWelcomeMessage,
			welcomeMessage: payload.welcomeMessage,
			language: payload.language,
			Region: payload.Region,
			Type: payload.Type,
			NSFW: payload.NSFW,
			acceptingRequestsToJoin: payload.acceptingRequestsToJoin,
			acceptingRequestsToPost: payload.acceptingRequestsToPost,
			approvedUsersHaveTheAbilityTo: payload.approvedUsersHaveTheAbilityTo,
		};
		console.log(setting);
		const baseurl = payload.baseurl;
		const response = await fetch(
			baseurl + `/r/${payload.subredditName}/about/edit`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
				body: JSON.stringify(setting),
			}
		);
		const responseData = await response.json();
		console.log(responseData);
		if (response.status == 200) {
			// console.log(response);
		} else if (response.status == 401) {
			const error = new Error(responseData.error);
			console.log(error);
			throw error;
		} else {
			const error = new Error('server error');
			console.log(error);
			throw error;
		}
		return response.status;
	},
	async postandcommentsSettings(context, payload) {
		const setting = {
			subreddit: payload.communityName,
			enableSpoiler: payload.enableSpoiler,
			allowImagesInComment: payload.allowImagesInComment,
			suggestedSort: payload.suggestedSort,
		};

		const baseurl = payload.baseurl;
		// console.log(localStorage.getItem('accessToken'));
		const response = await fetch(
			baseurl + `/r/${payload.communityName}/about/edit-post-settings`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					// 'Access-Control-Allow-Origin': '*',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
				body: JSON.stringify(setting),
			}
		);
		const responseData = await response.json();
		if (response.status == 200) {
			console.log(response);
		} else if (response.status == 401) {
			const error = new Error(responseData.error);
			console.log(error);
			throw error;
		} else {
			const error = new Error('server error');
			console.log(error);
			throw error;
		}
		return response.status;
	},
	async fetchmoderationSettings(context, payload) {
		const baseurl = payload.baseurl;
		const response = await fetch(
			baseurl + `/r/${payload.communityName}/about/edit`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		);
		const responseData = await response.json();
		if (response.status == 200) {
			console.log(response);
		} else if (response.status == 401) {
			const error = new Error(responseData.error);
			console.log(error);
			throw error;
		} else {
			const error = new Error('server error');
			console.log(error);
			throw error;
		}
		console.log(responseData);
		context.commit('setmoderationSettings', responseData);
		return response.status;
	},
	async fetcpostandcommentsSettings(context, payload) {
		const baseurl = payload.baseurl;
		const response = await fetch(
			baseurl + `/r/${payload.communityName}/about/edit-post-settings`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		);
		const responseData = await response.json();
		if (response.status == 200) {
			console.log(response);
		} else if (response.status == 401) {
			const error = new Error(responseData.error);
			console.log(error);
			throw error;
		} else {
			const error = new Error('server error');
			console.log(error);
			throw error;
		}
		console.log(responseData);
		context.commit('setpostandcommentsSettings', responseData);
		return response.status;
	},
	/////////////////////account setting ///////////////////////////
	async changeCountry(context, payload) {
		const setting = {
			country: payload.country,
		};

		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/account-settings', {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(setting),
		});
		const responseData = await response.json();
		if (response.status == 200) {
			console.log(response);
		} else if (response.status == 401) {
			const error = new Error(responseData.error);
			console.log(error);
			throw error;
		} else {
			const error = new Error('server error');
			console.log(error);
			throw error;
		}
		return response.status;
	},
	async changeGender(context, payload) {
		const setting = {
			gender: payload.gender,
		};

		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/account-settings', {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(setting),
		});
		const responseData = await response.json();
		if (response.status == 200) {
			console.log(response);
		} else if (response.status == 401) {
			const error = new Error(responseData.error);
			console.log(error);
			throw error;
		} else {
			const error = new Error('server error');
			console.log(error);
			throw error;
		}
		return response.status;
	},
	async fetchAccountSettings(context, payload) {
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/account-settings', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(),
		});
		const responseData = await response.json();
		if (response.status == 200) {
			console.log(response);
		} else if (response.status == 401) {
			const error = new Error(responseData.error);
			console.log(error);
			throw error;
		} else {
			const error = new Error('server error');
			console.log(error);
			throw error;
		}
		context.commit('setAccountSettings', responseData);
		return response.status;
	},
	async connect(_, payload) {
		const baseurl = payload.baseurl;
		const body = {
			accessToken: payload.accessToken,
			password: payload.password,
		};
		const response = await fetch(baseurl + '/connect/' + payload.type, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(body),
		});
		const responseData = await response.json();
		console.log(responseData);
		if (response.status == 200) {
			console.log(response);
		} else if (response.status == 401) {
			const error = new Error(responseData.error);
			console.log(error);
			throw error;
		} else {
			const error = new Error('server error');
			console.log(error);
			throw error;
		}
		return response.status;
	},
	async disconnect(_, payload) {
		const baseurl = payload.baseurl;
		const body = {
			password: payload.password,
		};
		const response = await fetch(baseurl + '/disconnect/' + payload.type, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(body),
		});
		const responseData = await response.json();
		if (response.status == 200) {
			console.log(response);
		} else if (response.status == 401) {
			const error = new Error(responseData.error);
			console.log(error);
			throw error;
		} else {
			const error = new Error('server error');
			console.log(error);
			throw error;
		}
		return response.status;
	},
	async deleteAccount(_, payload) {
		const baseurl = payload.baseurl;
		const body = {
			password: payload.password,
			username: payload.username,
		};
		console.log(payload);
		const response = await fetch(baseurl + '/delete-account', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(body),
		});
		const responseData = await response.json();
		console.log(responseData);
		if (response.status == 200) {
			console.log(response);
		} else if (response.status == 401) {
			const error = new Error(responseData.error);
			console.log(error);
			throw error;
		} else {
			const error = new Error('server error');
			console.log(error);
			throw error;
		}
		return response.status;
	},
	async changePassword(_, payload) {
		const baseurl = payload.baseurl;
		const body = {
			currentPassword: payload.currentPassword,
			newPassword: payload.newPassword,
			confirmNewPassword: payload.confirmNewPassword,
		};
		console.log(payload);
		const response = await fetch(baseurl + '/change-password', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(body),
		});
		const responseData = await response.json();
		console.log(responseData);
		if (response.status == 200) {
			console.log(response);
		} else if (response.status == 401) {
			const error = new Error(responseData.error);
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
