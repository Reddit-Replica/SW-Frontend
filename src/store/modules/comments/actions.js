export default {
	async getSubreddit(context, payload) {
		const baseurl = payload.baseurl;
		const subredditName = payload.subredditName;
		const response = await fetch(baseurl + '/' + subredditName);
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(responseData.message || 'Failed to fetch!');
			throw error;
		}
		console.log(responseData[0].description);
		context.commit('setSubredditInfo', responseData[0].description);
	},
};
