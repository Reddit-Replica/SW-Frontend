/**
 * @module SearchActions
 */
export default {
	/**
	 * action for Search for users
	 * @action  Search for Users
	 * @param {Object} payload querey .
	 * @returns {void}
	 */
	async SearchUser(context, payload) {
		const baseurl = payload.baseurl;
		const response = await fetch(
			baseurl + '/search/type=user' + '?q=' + payload.q
		);
		const responseData = await response.json();
		if (response.status == 200) {
			const users = [];

			for (const key in responseData) {
				const user = {
					before: responseData[key].before,
					after: responseData[key].after,
					username: responseData[key].children[0].username,
					karma: responseData[key].children[0].karma,
				};
				users.push(user);
			}
			context.commit('setUsers', users);
		} else if (!response.ok) {
			const error = new Error(responseData.error);
			throw error;
		}
	},
	/**
	 * action for Search for Subreddits
	 * @action  SearchSubreddit
	 * @param {Object} payload querey .
	 * @returns {void}
	 */
	async SearchSubreddit(context, payload) {
		const baseurl = payload.baseurl;
		const response = await fetch(
			baseurl + '/search?type=subreddit' + '?q=' + payload.q
		);
		const responseData = await response.json();
		if (response.status == 200) {
			const subreddits = [];

			for (const key in responseData) {
				const subreddit = {
					before: responseData[key].before,
					after: responseData[key].after,
					subredditName: responseData[key].children[0].subredditName,
					numberOfMembers: responseData[key].children[0].numberOfMembers,
				};
				subreddits.push(subreddit);
			}
			context.commit('setSubreddits', subreddits);
		} else if (!response.ok) {
			const error = new Error(responseData.error);
			throw error;
		}
	},
};
