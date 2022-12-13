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
	//////////////////// this part for moderation setting //////////////////////////

	async communitySettings(context, payload) {
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

		const baseurl = payload.baseurl;
		const response = await fetch(
			baseurl + `/r/${payload.communityName}/about/edit`,
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
};
