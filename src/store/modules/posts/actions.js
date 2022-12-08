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
	async createpostHybrid(context, payload) {
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
			// mode: 'no-cors',
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
			console.log(error);
			throw error;
		} else {
			const error = new Error('server error');
			console.log(error);
			throw error;
		}
	},
	async createpostLink(context, payload) {
		const postInfo = {
			title: payload.title,
			kind: payload.kind,
			//subreddit: payload.subreddit,
			inSubreddit: payload.inSubreddit,
			link: payload.content,

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
	async createpostImage(context, payload) {
		const postInfo = new FormData();
		postInfo.append('title', payload.title);
		postInfo.append('kind', payload.kind);
		postInfo.append('inSubreddit', payload.inSubreddit);
		postInfo.append('images', JSON.stringify(payload.images));
		postInfo.append('imageCaptions', JSON.stringify(payload.imageCaptions));
		postInfo.append('imageLinks', JSON.stringify(payload.imageLinks));
		postInfo.append('nsfw', payload.nsfw);
		postInfo.append('spoiler', payload.spoiler);
		postInfo.append('sendReplies', payload.sendReplies);
		console.log(payload.kind);
		console.log(payload.title);
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'multipart/form-data;',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: postInfo,
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
	async createpostVideo(context, payload) {
		// const postInfo = {
		// 	title: payload.title,
		// 	kind: payload.kind,
		// 	//subreddit: payload.subreddit,
		// 	inSubreddit: payload.inSubreddit,
		//   images: payload.images,
		// 	imageCaptions: payload.imageCaptions,
		// 	imageLinks: payload.imageLinks,
		// 	nsfw: payload.nsfw,
		// 	spoiler: payload.spoiler,
		// 	// flairId: payload.flairId,
		// 	sendReplies: payload.sendReplies,

		// };
		const postInfo = new FormData();
		postInfo.append('title', payload.title);
		postInfo.append('kind', payload.kind);
		postInfo.append('inSubreddit', payload.inSubreddit);
		postInfo.append('video', payload.video);
		postInfo.append('nsfw', payload.nsfw);
		postInfo.append('spoiler', payload.spoiler);
		postInfo.append('sendReplies', payload.sendReplies);
		const baseurl = payload.baseurl;
		console.log(payload.video);
		const response = await fetch(baseurl + '/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'multipart/form-data',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: postInfo,
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
