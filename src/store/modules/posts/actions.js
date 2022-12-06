/**
 * @module PostsActions
 */

export default {
	async hide(_, payload) {
		const hide = {
			id: payload.id,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/hide', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(hide),
		});

		const responseData = await response.json();

		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
	},
	/**
	 * Action for creating Post
	 * @action createPost
	 * @param {Object} payload post data and base url.
	 * @returns {void}
	 */
	async createPost(context, payload) {
		const postInfo = {
			title: payload.title,
			kind: payload.kind,
			//subreddit: payload.subreddit,
			inSubreddit: payload.inSubreddit,
			content: payload.content,

			nsfw: payload.nsfw,
			spoiler: payload.spoiler,
			// flairId: payload.flairId,
			sendReplies: payload.sendReplies,
		};
		//const token = localStorage.getItem('accessToken');

		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(postInfo),
		});
		const responseData = await response.json();
		if (response.status == 201) {
			localStorage.setItem('response', response.status);
			console.log(response);
		} else if (response.status == 400) {
			const error = new Error(responseData.error);
			throw error;
		} else {
			const error = new Error('server error');
			throw error;
		}
	},
	async createPostimagevideo(context, payload) {
		const postInfo = {
			title: payload.title,
			kind: payload.kind,
			//subreddit: payload.subreddit,
			inSubreddit: payload.inSubreddit,

			nsfw: payload.nsfw,
			spoiler: payload.spoiler,
			flairId: payload.flairId,
			sendReplies: payload.sendReplies,
			imageCaptions: payload.imageCaptions,
			imageLinks: payload.imageLinks,
		};
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'multipart/form-data; ',
				Authorization: 'Bearer ' + payload.token,
			},
			body: JSON.stringify(postInfo),
		});
		const responseData = await response.json();
		if (response.status == 200) {
			localStorage.setItem('response', response.status);
			console.log(response);
		} else if (response.status == 400) {
			const error = new Error(responseData.error);
			throw error;
		} else {
			const error = new Error('server error');
			throw error;
		}
	},
	/**
	 * Action for checking if subreddit name is used before.
	 * @action getAllsubreddits
	 * @param {Object} payload base url.
	 * @returns {void}
	 */
	async getAllsubreddits(context, payload) {
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/subredditName');
		const responseData = await response.json();
		if (response.status == 200) {
			localStorage.setItem('response', response.status);
			context.commit('setallSubreddits', responseData);
			console.log(response);
		} else if (response.status == 400) {
			const error = new Error(responseData.error);
			throw error;
		} else {
			const error = new Error('server error');
			throw error;
		}
	},
};
