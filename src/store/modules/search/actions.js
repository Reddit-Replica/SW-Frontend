/**
 * @module SearchActions
 */
export default {
	// searchingQuery(context, payload) {
	// 	context.commit('setSearchQuery', payload);
	// 	console.log(payload);
	// },
	/**
	 * action for Search for users
	 * @action  Search for Users
	 * @param {Object} payload querey .
	 * @returns {void}
	 */
	async SearchPost(context, payload) {
		const baseurl = payload.baseurl;
		// const response = await fetch(
		// 	baseurl + '/search?type=post' + '?q=' + payload.q
		// );
		console.log(localStorage.getItem('accessToken'));
		const response = await fetch(
			baseurl + '/search?type=post' + '?q=' + payload.q,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		);
		console.log(response);
		const responseData = await response.json();
		if (response.status) {
			const posts = [];

			let before, after;
			before = '';
			after = '';
			if (responseData.before) {
				before = responseData.before;
			}
			if (responseData.after) {
				after = responseData.after;
			}
			for (let i = 0; i < responseData.children.length; i++) {
				const post = {
					id: responseData.children[i].id,
					dataId: responseData.children[i].data.id,
					kind: responseData.children[i].data.kind,
					subreddit: responseData.children[i].data.subreddit,
					link: responseData.children[i].data.link,
					video: responseData.children[i].data.video,
					content: responseData.children[i].data.content,
					nsfw: responseData.children[i].data.nsfw,
					spoiler: responseData.children[i].data.spoiler,
					title: responseData.children[i].data.title,
					sharePostId: responseData.children[i].data.sharePostId,
					comments: responseData.children[i].data.comments,
					postedAt: responseData.children[i].data.postedAt,
					postedBy: responseData.children[i].data.postedBy,
					votes: responseData.children[i].data.votes,
					//image
					ImagePath: responseData.children[i].data.images.path,
					ImageCaption: responseData.children[i].data.images.caption,
					Imagelink: responseData.children[i].data.images.link,
					//flair
					flairId: responseData.children[i].data.flair.id,
					flairName: responseData.children[i].data.flair.caption,
					order: responseData.children[i].data.flair.link,
					backgroundColor: responseData.children[i].data.flair.path,
					textColor: responseData.children[i].data.flair.caption,
				};
				posts.push(post);
			}
			context.commit('setPosts', posts);
			context.commit('after', after);
			context.commit('before', before);
		} else {
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
			baseurl + '/search?type=user' + '?q=' + payload.q
		);
		const responseData = await response.json();
		if (response.status) {
			const users = [];

			let before, after;
			before = '';
			after = '';
			if (responseData.before) {
				before = responseData.before;
			}
			if (responseData.after) {
				after = responseData.after;
			}
			for (let i = 0; i < responseData.children.length; i++) {
				const user = {
					id: responseData.children[i].id,
					dataId: responseData.children[i].data.id,
					username: responseData.children[i].data.username,
					karma: responseData.children[i].data.karma,
					nsfw: responseData.children[i].data.nsfw,
					joinDate: responseData.children[i].data.joinDate,
					following: responseData.children[i].data.following,
					avatar: responseData.children[i].data.avatar,
				};
				users.push(user);
			}
			context.commit('before', before);
			context.commit('after', after);
			context.commit('setUsers', users);
		} else {
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
		if (response.status == 200 || response.status == 400) {
			const subreddits = [];

			let before, after;
			before = '';
			after = '';
			if (responseData.before) {
				before = responseData.before;
			}
			if (responseData.after) {
				after = responseData.after;
			}
			for (let i = 0; i < responseData.children.length; i++) {
				const subreddit = {
					id: responseData.children[i].id,
					dataId: responseData.children[i].data.id,
					subredditName: responseData.children[i].data.subredditName,
					numberOfMembers: responseData.children[i].data.numberOfMembers,
					nsfw: responseData.children[i].data.nsfw,
					picture: responseData.children[i].data.picture,
					description: responseData.children[i].data.description,
					joined: responseData.children[i].data.joined,
				};
				subreddits.push(subreddit);
			}
			context.commit('setSubreddits', subreddits);
			context.commit('before', before);
			context.commit('after', after);
		} else {
			const error = new Error(responseData.error);
			throw error;
		}
	},
};
