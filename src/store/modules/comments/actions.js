export default {
	/**
 * Action for getting subreddit details
 * @action getSubreddit 
 * @param {Object} contains An object parameter has baseurl and subredditName
 * @returns {void}
 * Action for following a post 
 * @action followPost
 * @param {Object} contains An object parameter has baseurl and post id .
 * @returns {void}
  * Action for adding a comment 
 * @action comment
 * @param {Object} contains An object parameter has baseurl, parent id, parent type, level, subredditName, havesubreddit .
 * @returns {void}
 
 */
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
	async comment(_, payload) {
		const newComment = {
			text: payload.text,
			parentId: payload.parentId,
			parentType: payload.parentType,
			level: payload.level,
			subredditName: payload.subredditName,
			haveSubreddit: payload.haveSubreddit,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/comment', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(newComment),
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
