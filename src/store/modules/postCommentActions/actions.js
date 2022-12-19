export default {
	/**
	 * Action sends Post request to save endlpoint.
	 * @action save
	 * @param {Object} contains An object parameter has baseurl, post/comment id and type.
	 * @returns {void}
	 * Action sends Post request to unsave endlpoint.
	 * @action unsave
	 * @param {Object} contains An object parameter has baseurl, post/comment id and type.
	 * @returns {void}
	 * Action sends Post request to vote endlpoint.
	 * @action vote
	 * @param {Object} contains An object parameter has baseurl, post/comment id, type and direction with indicate whether it is up/dow vote .
	 * @returns {void}
	 */
	async save(context, payload) {
		const body = {
			id: payload.id,
			type: payload.type,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/save', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(body),
		});
		const responseData = await response.json();
		context.commit('setAction', responseData);
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
	},
	async unsave(context, payload) {
		const body = {
			id: payload.id,
			type: payload.type,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/unsave', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(body),
		});

		const responseData = await response.json();
		context.commit('setAction', responseData);
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
	},
	async vote(_, payload) {
		const vote = {
			id: payload.id,
			type: payload.type,
			direction: payload.direction,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/vote', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(vote),
		});

		const responseData = await response.json();
		console.log(responseData);
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
	},
	async mention(_, payload) {
		const body = {
			postId: payload.postId,
			commentId: payload.commentId,
			receiverUsername: payload.receiverUsername,
		};
		const baseurl = payload.baseurl;
		console.log(body);
		const response = await fetch(baseurl + '/mention', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(body),
		});

		const responseData = await response.json();
		console.log(responseData);
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
	},
	async commentedUsers(context, payload) {
		console.log('in action');
		const baseurl = payload.baseurl;
		const response = await fetch(
			baseurl + '/commented-users?id=' + payload.postId,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		);

		const responseData = await response.json();
		console.log('/commented-users response');
		console.log(responseData);
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
		context.commit('setCommentedUsers', responseData);
	},
	async followPost(context, payload) {
		const postInfo = {
			follow: payload.follow,
			id: payload.id,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/follow-post', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(postInfo),
		});

		const responseData = await response.json();
		context.commit('setAction', responseData);
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
	},
	async followComment(context, payload) {
		const postInfo = {
			commentId: payload.commentId,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/follow-comment', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(postInfo),
		});

		const responseData = await response.json();
		context.commit('setAction', responseData);
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
	},
	async unfollowComment(context, payload) {
		const postInfo = {
			commentId: payload.commentId,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/unfollow-comment', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(postInfo),
		});

		const responseData = await response.json();
		context.commit('setAction', responseData);
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
	},
	async hide(context, payload) {
		const postInfo = {
			id: payload.id,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/hide', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(postInfo),
		});

		const responseData = await response.json();
		context.commit('setAction', responseData);
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
	},
	async unhide(context, payload) {
		const postInfo = {
			id: payload.id,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/unhide', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(postInfo),
		});

		const responseData = await response.json();
		context.commit('setAction', responseData);
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
	},
	async editPost(context, payload) {
		const newComment = {
			content: payload.content,
			postId: payload.id,
		};
		console.log(newComment);
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/edit-post', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(newComment),
		});

		const responseData = await response.json();
		console.log(responseData);
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
	},
};
