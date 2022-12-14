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
			baseurl +
				'/search?type=post' +
				'&q=' +
				payload.q +
				'&sort=' +
				payload.sort +
				'&time=' +
				payload.time
			// {
			// 	method: 'GET',
			// 	headers: {
			// 		'Content-Type': 'application/json',
			// 		Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			// 	},
			// }
		);
		console.log(response);
		const responseData = await response.json();
		if (
			response.status == 200 ||
			response.status == 404 ||
			response.status == 304
		) {
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
	// setfollow(context, payload) {
	// 	context.commit('setPosts', payload.id);
	// },
	/**
	 * action for Search for users
	 * @action  Search for Users
	 * @param {Object} payload querey .
	 * @returns {void}
	 */
	async SearchUser(context, payload) {
		const baseurl = payload.baseurl;
		// const response = await fetch(
		// 	baseurl + '/search?type=user' + '?q=' + payload.q
		// );
		const response = await fetch(
			baseurl + '/search?type=user' + '&q=' + payload.q,
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
		console.log(responseData);
		if (
			response.status == 200 ||
			response.status == 404 ||
			response.status == 304
		) {
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
		// const response = await fetch(
		// 	baseurl + '/search?type=subreddit' + '?q=' + payload.q
		// );
		console.log(payload.q);
		const response = await fetch(
			baseurl + '/search?type=subreddit' + '&q=' + payload.q,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		);
		const responseData = await response.json();
		console.log(responseData);
		if (
			response.status == 200 ||
			response.status == 404 ||
			response.status == 304
		) {
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
	async SearchComments(context, payload) {
		const baseurl = payload.baseurl;
		console.log(payload.q);
		const response = await fetch(
			baseurl + '/search?type=comment' + '&q=' + payload.q,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		);
		const responseData = await response.json();
		console(responseData);
		if (
			response.status == 200 ||
			response.status == 404 ||
			response.status == 304
		) {
			const comments = [];

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
				const comment = {
					id: responseData.children[i].id,
					dataId: responseData.children[i].data.id,
					//posts
					postId: responseData.children[i].data.post.id,
					postKind: responseData.children[i].data.post.kind,
					postSubreddit: responseData.children[i].data.post.subreddit,
					postlink: responseData.children[i].data.post.link,
					postImagepath: responseData.children[i].data.post.images.path,
					postImageCaption: responseData.children[i].data.post.images.caption,
					postImagelink: responseData.children[i].data.post.images.link,
					postVideo: responseData.children[i].data.post.video,
					postContnet: responseData.children[i].data.post.content,
					postnfsw: responseData.children[i].data.post.nsfw,
					postspoiler: responseData.children[i].data.post.spoiler,
					posttitle: responseData.children[i].data.post.title,
					postsharedId: responseData.children[i].data.post.sharePostId,
					postFlairId: responseData.children[i].data.post.flair.id,
					postFlairName: responseData.children[i].data.post.flair.flairName,
					postFlairOrder: responseData.children[i].data.post.flair.order,
					postFlairBack:
						responseData.children[i].data.post.flair.backgroundColor,
					postFlairtext: responseData.children[i].data.post.flair.textColor,
					postComments: responseData.children[i].post.comments,
					postvotes: responseData.children[i].data.post.votes,
					postpostedAt: responseData.children[i].data.post.postedAt,
					postpostedby: responseData.children[i].data.post.postedBy,
					//comments
					commentId: responseData.children[i].data.comment.id,
					commentcontent: responseData.children[i].data.comment.content,
					commentparentId: responseData.children[i].data.comment.parentId,
					commentlevel: responseData.children[i].data.comment.level,
					commentusername: responseData.children[i].data.comment.username,
					commentcreatedAt: responseData.children[i].data.comment.createdAt,
					commentvotes: responseData.children[i].data.comment.votes,
				};
				comments.push(comment);
			}
			context.commit('setComments', comments);
			context.commit('before', before);
			context.commit('after', after);
		} else {
			const error = new Error(responseData.error);
			throw error;
		}
	},
};
