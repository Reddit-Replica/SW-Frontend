export default {
	async getSubreddit(context, payload) {
		const baseurl = payload.baseurl;
		const subredditName = payload.subredditName;
		const response = await fetch(baseurl + '/r/' + subredditName);
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(responseData.message || 'Failed to fetch!');
			throw error;
		}
		context.commit('setSubredditInfo', responseData[0]);
	},
	async followPost(context, payload) {
		const postInfo = {
			follow: true,
			id: payload.id,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/follow-post', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(postInfo),
		});

		const responseData = await response.json();

		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
	},
};
