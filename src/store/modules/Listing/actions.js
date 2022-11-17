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
			};
			posts.push(post);
		}
		context.commit('setPosts', posts);
	},
};
