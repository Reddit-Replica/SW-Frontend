/**
 * @module SearchActions
 */
export default {
	searchingQuery(context, payload) {
		context.commit('setSearchQuery', payload);
		console.log(payload);
	},
	/**
	 * action for Search for users
	 * @action  Search for Users
	 * @param {Object} payload querey .
	 * @returns {void}
	 */
	async SearchPost(context, payload) {
		const baseurl = payload.baseurl;
		const response = await fetch(
			baseurl + '/search?type=post' + '?q=' + payload.q
		);
		const responseData = await response.json();
		if (response.status == 200) {
			const posts = [];

			for (const key in responseData) {
				const post = {
					before: responseData[key].before,
					after: responseData[key].after,
					id: responseData[key].children[0].id,
					kind: responseData[key].children[0].king,
					subreddit: responseData[key].children[0].subreddit,
					link: responseData[key].children[0].link,
					content: responseData[key].children[0].content,
					video: responseData[key].children[0].video,
					nsfw: responseData[key].children[0].nsfw,
					spoiler: responseData[key].children[0].spoiler,
					title: responseData[key].children[0].title,
					sharePostId: responseData[key].children[0].sharePostId,
					comments: responseData[key].children[0].comments,
					votes: responseData[key].children[0].votes,
					postedAt: responseData[key].children[0].postedAt,
					postedBy: responseData[key].children[0].postedBy,
				};
				posts.push(post);
			}
			context.commit('setPosts', posts);
		} else if (!response.ok) {
			const error = new Error(responseData.error);
			throw error;
		}
	},
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
