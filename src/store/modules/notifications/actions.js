export default {
	async getAllNotifications(context, payload) {
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/notifications', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + payload.token,
			},
		});

		const responseData = await response.json();

		if (response.status == 200) {
			context.commit('setNotifications', responseData['children']);
		} else if (response.status == 401) {
			const error = new Error(responseData.error || 'Bad Request');
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Bad Request');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},
	async hideNotification(context, payload) {
		context.commit('setHiddenSuccessfully', false);
		const baseurl = payload.baseurl;
		const notification = { id: payload.id };

		const response = await fetch(baseurl + '/hide-notification', {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + payload.token,
			},
			body: JSON.stringify(notification),
		});

		const responseData = await response.json();

		if (response.status == 200) {
			context.commit('setHiddenSuccessfully', true);
		} else if (response.status == 401) {
			const error = new Error(responseData.error || 'Bad Request');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},
	async markAllRead(context, payload) {
		context.commit('setAllRead', false);
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/mark-all-notifications-read', {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + payload.token,
			},
		});

		const responseData = await response.json();

		if (response.status == 200) {
			context.commit('setAllRead', true);
		} else if (response.status == 401) {
			const error = new Error(responseData.error || 'Bad Request');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},
};
