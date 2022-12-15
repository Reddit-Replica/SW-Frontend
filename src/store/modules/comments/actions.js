export default {
	/**
 * Action for following a post 
 * @action followPost
 * @param {Object} contains An object parameter has baseurl and post id .
 * @returns {void}
  * Action for adding a comment 
 * @action comment
 * @param {Object} contains An object parameter has baseurl, parent id, parent type, level, subredditName, havesubreddit .
 * @returns {void}
 
 */
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
		console.log(responseData);
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
	},
	async comment(context, payload) {
		console.log(payload);
		const newComment = {
			content: payload.text,
			postId: payload.postId,
			parentId: payload.parentId,
			parentType: payload.parentType,
			level: payload.level,
			subredditName: payload.subredditName,
			haveSubreddit: payload.haveSubreddit,
		};
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/comment', {
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
		context.commit('setCommentID', responseData.id);
	},
	async editUserText(context, payload) {
		const newComment = {
			content: payload.content,
			id: payload.id,
		};
		console.log(newComment);
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/edit-user-text', {
			method: 'PUT',
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
	async fetchPostComments(context, payload) {
		const baseurl = payload.baseurl;
		const beforeMod = payload.beforeMod;
		const afterMod = payload.afterMod;
		const sort = payload.sort;
		let mediaQuery;
		if (beforeMod) {
			mediaQuery = '?before=' + beforeMod + '&sort=' + sort;
		} else if (afterMod) {
			mediaQuery = '?after=' + afterMod + '&sort=' + sort;
		} else {
			mediaQuery = '?sort=' + sort;
		}
		const response = await fetch(
			baseurl + `/comments/${payload.id}${mediaQuery}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		);
		const responseData = await response.json();

		if (response.status == 200) {
			context.commit('setListOfComments', responseData);
		} else if (response.status == 401) {
			const error = new Error(responseData.error || 'Unauthorized access');
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Not found');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Internal Server Error');
			throw error;
		}
	},
	async fetchPostReplies(context, payload) {
		const baseurl = payload.baseurl;
		const beforeMod = payload.beforeMod;
		const afterMod = payload.afterMod;
		const sort = payload.sort;
		let mediaQuery;
		if (beforeMod) {
			mediaQuery = '?before=' + beforeMod + '&sort=' + sort;
		} else if (afterMod) {
			mediaQuery = '?after=' + afterMod + '&sort=' + sort;
		} else {
			mediaQuery = '?sort=' + sort;
		}
		const response = await fetch(
			baseurl + `/comments/${payload.postId}/${payload.commentId}${mediaQuery}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		);
		const responseData = await response.json();

		if (response.status == 200) {
			context.commit('setListOfReplies', responseData);
		} else if (response.status == 401) {
			const error = new Error(responseData.error || 'Unauthorized access');
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Not found');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Internal Server Error');
			throw error;
		}
	},
	async deleteComment(context, payload) {
		const comment = {
			id: payload.id,
			type: payload.type,
		};
		console.log(comment);
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/delete', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(comment),
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
