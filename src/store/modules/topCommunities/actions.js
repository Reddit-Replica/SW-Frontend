export default {
	async getAllCommunities(context, payload) {
		console.log(payload);
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/subreddits/leaderboard', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + payload.token,
			},
		});

		const responseData = await response.json();
		console.log(responseData);

		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}

		if (response.status == 200) {
			context.commit('setAllCommunities', responseData['children']);
		} else if (response.status == 401) {
			const error = new Error(responseData.error || 'Unauthorized');
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Not Found');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},
	async getCategoryCommunities(context, payload) {
		const baseurl = payload.baseurl;

		const response = await fetch(
			baseurl + `/subreddits/leaderboard/${payload.category}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + payload.token,
				},
			}
		);

		const responseData = await response.json();
		console.log(responseData);

		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}

		if (response.status == 200) {
			context.commit('setCategoryCommunities', responseData['children']);
		} else if (response.status == 401) {
			const error = new Error(responseData.error || 'Unauthorized');
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Not Found');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},
};