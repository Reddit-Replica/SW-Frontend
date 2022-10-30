export default {
	async createSubreddit(context, payload) {
		console.log(
			'hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii'
		);
		const newSubreddit = {
			subredditName: payload.subredditName,
			type: payload.type,
			nsfw: payload.nsfw,
		};

		const response = await fetch(
			`https://reddit-project-bc91b-default-rtdb.firebaseio.com/communities.json`,
			{
				method: 'POST',
				body: JSON.stringify(newSubreddit),
			}
		);

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
