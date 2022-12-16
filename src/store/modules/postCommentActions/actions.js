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
	async save(_, payload) {
		const save = {
			id: payload.id,
			type: payload.type,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/save', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(save),
		});

		const responseData = await response.json();

		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
	},
	async unsave(_, payload) {
		const unsave = {
			id: payload.id,
			type: payload.type,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/unsave', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(unsave),
		});

		const responseData = await response.json();

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
};
