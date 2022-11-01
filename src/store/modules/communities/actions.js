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

		// newSubreddit.subredditName = responseData.communityName;
		// newSubreddit.type = payload.communityType;
		// newSubreddit.nsfw = payload.communityNSFW;

		// context.commit('addSubreddit', newSubreddit);
	},
};
