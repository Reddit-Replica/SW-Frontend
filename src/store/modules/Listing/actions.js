export default {
	/**
	 * Action sends fetch posts request according to sort type (top,hot,new,best).
	 * @action fetchPosts
	 * @param {Object} contains An object parameter has baseurl and title(sort type).
	 * @returns {void}
	 * Action sends fetch post details request to /post-details end point.
	 * @action postDetails
	 * @param {Object} contains An object parameter has baseurl and title(sort type).
	 * @returns {void}
	 * Action sends delete comment request.
	 * @action deleteComment
	 * @param {Object} contains An object parameter has baseurl and comment id.
	 * @returns {void}
	 */
	async fetchPosts(context, payload) {
		const baseurl = payload.baseurl;
		const title = payload.title;
		var query;
		if (payload.query == undefined) query = '';
		else query = '?time=' + payload.query;
		const response = await fetch(baseurl + '/' + title + query, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		});
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(responseData.message || 'Failed to fetch!');
			throw error;
		}
		context.commit('setPosts', responseData);
	},
	async postDetails(context, payload) {
		const baseurl = payload.baseurl;
		const id = payload.id;
		const response = await fetch(baseurl + '/post-details?id=' + id, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		});
		const responseData = await response.json();
		console.log(responseData.subreddit);
		if (responseData.subreddit == '') delete responseData['subreddit'];
		console.log(responseData);
		if (!response.ok) {
			const error = new Error(responseData.message || 'Failed to fetch!');
			throw error;
		}
		context.commit('setPostDetails', responseData);
	},
	async deleteComment(_, payload) {
		const del = {
			id: payload.id,
			type: 'comment',
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/delete', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(del),
		});

		const responseData = await response.json();
		if (response.status == 400) {
			const error = new Error(responseData.error || 'The request was invalid');
			throw error;
		} else if (response.status == 401) {
			const error = new Error(
				responseData.error || 'Unauthorized to delete this thing'
			);
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Thing not found');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},
};
