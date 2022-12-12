export default {
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
};
