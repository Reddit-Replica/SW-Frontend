export default {
	/**
 * @module SettingsActions
 */
	//////////////email setting///////////////////

		/**
	 * Action for changenewFollowerEmail
	 * @action changenewFollowerEmail
	 * @param {Object} payload newFollowerEmail and base url.
	 * @returns {void}
	 */
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
		/**
	 * Action for changeunsubscribeFromEmails
	 * @action changeunsubscribeFromEmails
	 * @param {Object} payload unsubscribeFromEmails and base url.
	 * @returns {void}
	 */
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
		/**
	 * Action for changeneadultContent
	 * @action changeneadultContent
	 * @param {Object} payload adultContent and base url.
	 * @returns {void}
	 */
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

		/**
	 * Action for changeautoplayMedia
	 * @action changeautoplayMedia
	 * @param {Object} payload autoplayMedia and base url.
	 * @returns {void}
	 */
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
	/**
	 * Action for changedisplayName
	 * @action changedisplayName
	 * @param {Object} payload displayName and base url.
	 * @returns {void}
	 */
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
		/**
	 * Action for changeAbout
	 * @action changeAbout
	 * @param {Object} payload About and base url.
	 * @returns {void}
	 */

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
	/**
	 * Action for changeNsfw
	 * @action changeNsfw
	 * @param {Object} payload Nsfw and base url.
	 * @returns {void}
	 */
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
		/**
	 * Action for changeAllowfollow
	 * @action changeAllowfollow
	 * @param {Object} payload Allowfollow and base url.
	 * @returns {void}
	 */
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
/**
	 * Action for communitySettings
	 * @action communitySettings
	 * @param {Object} payload communitySettings and base url.
	 * @returns {void}
	 */
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
	/**
	 * Action for postandcommentsSettings
	 * @action postandcommentsSettings
	 * @param {Object} payload postandcommentsSettings and base url.
	 * @returns {void}
	 */
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
	/**
	 * Action for fetchmoderationSettings
	 * @action fetchmoderationSettings
	 * @param {Object} payload communityName and base url.
	 * @returns {void}
	 */
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
	/**
	 * Action for fetcpostandcommentsSettings
	 * @action fetcpostandcommentsSettings
	 * @param {Object} payload communityName and base url.
	 * @returns {void}
	 */
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
		return { status: response.status, responseData: responseData };
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
			localStorage.setItem('Password', payload.newPassword);
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
	async changeEmail(context, payload) {
		const setting = {
			currentPassword: payload.currentPassword,
			newEmail: payload.newEmail,
		};

		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/change-email', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(setting),
		});
		const responseData = await response.json();
		console.log(responseData);
		// if (response.status == 200) {
		// 	console.log(response);
		// } else if (response.status == 401) {
		// 	const error = new Error(responseData.error);
		// 	console.log(error);
		// 	throw error;
		// } else {
		// 	const error = new Error('server error');
		// 	console.log(error);
		// 	throw error;
		// }
		return { status: response.status, responseData: responseData };
	},
};
