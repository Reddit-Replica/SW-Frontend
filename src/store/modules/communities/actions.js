export default {
	// async createSubreddit(_, payload) {
	// 	const newSubreddit = {
	// 		subredditName: payload.subredditName,
	// 		type: payload.type,
	// 		nsfw: payload.nsfw,
	// 	};

	// 	console.log(newSubreddit);
	// 	console.log(this.$baseurl);
	// 	const response = await fetch('http://localhost:3000/subreddits', {
	// 		method: 'POST',
	// 		headers: { 'Content-Type': 'application/json' },
	// 		body: JSON.stringify(newSubreddit),
	// 	});

	// 	const responseData = await response.json();

	// 	if (!response.ok) {
	// 		const error = new Error(
	// 			responseData.message || 'Failed to send request.'
	// 		);
	// 		throw error;
	// 	}

	// 	// newSubreddit.subredditName = responseData.communityName;
	// 	// newSubreddit.type = payload.communityType;
	// 	// newSubreddit.nsfw = payload.communityNSFW;

	// 	// context.commit('addSubreddit', newSubreddit);
	// },
	createSubreddit(_, payload) {
		console.log(payload);
		fetch('http://localhost:3000/subreddits', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				subredditName: payload.subredditName,
				type: payload.type,
				nsfw: payload.nsfw,
			}),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
			})
			// .then((data) => {
			// 	console.log(data);
			// 	const res = [];
			// 	for (const id in data) {
			// 		res.push({ id: id, name: data[id].name, rating: data[id].rating });
			// 	}
			// 	this.results = res;
			// })
			.catch((error) => {
				console.log(error);
			});
	},
};
