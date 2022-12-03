/**
 * Action for creating Post
 * @action createPost 
 * @param {Object} contains post data and base url.
 * @returns {void}
 * Action for checking if subreddit name is used before.
 * @action getAllsubreddits
 * @param {Object} contains base url.
 * @returns {void}
 
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

	async createPost(context, payload) {
		const postInfo = {
			kind: payload.kind,
			subreddit: payload.subreddit,
			title: payload.title,
			content: payload.content,
			files: payload.files,
			nsfw: payload.nsfw,
			spoiler: payload.spoiler,
			flairId: payload.flairId,
			imageCaptions: payload.imageCaptions,
			imageLinks: payload.imageLinks,
			sendReplies: payload.sendReplies,
		};
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/submit', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
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
