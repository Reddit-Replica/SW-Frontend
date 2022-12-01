export default {
	async fetchPosts(context, payload) {
		const baseurl = payload.baseurl;
		const title = payload.title;
		const response = await fetch(baseurl + '/' + title, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('userName')}`,
			},
		});
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(responseData.message || 'Failed to fetch!');
			throw error;
		}
		const posts = [];
		for (const key in responseData) {
			const post = {
				before: responseData[key].before,
				after: responseData[key].after,
				id: responseData[key].children[0].id,
				content: responseData[key].children[0].content,
				postedBy: responseData[key].children[0].postedBy,
				subreddit: responseData[key].children[0].subreddit,
				postedAt: responseData[key].children[0].postedAt,
				title: responseData[key].children[0].title,
				comments: responseData[key].children[0].comments,
				votes: responseData[key].children[0].votes,
				votingType: responseData[key].children[0].votingType,
				saved: responseData[key].children[0].saved,
				kind: responseData[key].children[0].kind,
				sharePostId: responseData[key].children[0].sharePostId,
			};
			if (post.kind == 'post') {
				//const QUERY_PARAMETERS = {
				//	id: post.sharePostId,
				//};
				const response2 = await fetch(baseurl + '/post-details', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${localStorage.getItem('userName')}`,
					},
					//body: JSON.stringify(QUERY_PARAMETERS),
				});
				const responseData2 = await response2.json();
				if (!response2.ok) {
					const error2 = new Error(responseData2.message || 'Failed to fetch!');
					throw error2;
				}
				const sharedPostDetails = responseData2[0];
				sharedPostDetails.id = post.sharePostId;
				post.sharedPostDetails = sharedPostDetails;
			}
			posts.push(post);
		}
		context.commit('setPosts', posts);
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
