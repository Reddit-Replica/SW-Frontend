export default {
	async createSubreddit(_, payload) {
		const newSubreddit = {
			subredditName: payload.subredditName,
			type: payload.type,
			nsfw: payload.nsfw,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/subreddits', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newSubreddit),
		});

		const responseData = await response.json();

		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
	},

	async checkSubredditName(context, payload) {
		const baseurl = payload.baseurl;

		const response = await fetch(
			baseurl + '/subreddits?subredditName=' + payload.subredditName
		);

		const responseData = await response.json();

		let isTaken = false;
		if (response.status == 409) {
			// if (payload.subredditName == 'web') {
			isTaken = true;
			console.log(isTaken);
		}
		console.log(isTaken);
		console.log(response.status);
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}

		context.commit('checkSubredditName', isTaken);
	},
};
