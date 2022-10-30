export default {
	async createSubreddit(context, payload) {
		const newSubreddit = {
			subredditName: payload.subredditName,
			type: payload.type,
			nsfw: payload.nsfw,
		};

		const response = await fetch(`http://localhost:8081/main`, {
			method: 'POST',
			body: JSON.stringify(newSubreddit),
		});

		const responseData = await response.json();

		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}

		newSubreddit.subredditName = responseData.communityName;
		newSubreddit.type = payload.communityType;
		newSubreddit.nsfw = payload.communityNSFW;

		context.commit('addSubreddit', newSubreddit);
	},
};
