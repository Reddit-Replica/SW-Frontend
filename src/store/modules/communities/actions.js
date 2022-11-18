export default {
	async createSubreddit(_, payload) {
		const newSubreddit = {
			subredditName: payload.subredditName,
			type: payload.type,
			nsfw: payload.nsfw,
			category: payload.category,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/create-subreddit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + payload.token,
			},
			body: JSON.stringify(newSubreddit),
		});

		const responseData = await response.json();

		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
	},

	async checkSubredditName(context, payload) {
		const baseurl = payload.baseurl;

		const response = await fetch(
			baseurl +
				'/subreddit-name-available?subredditName=' +
				payload.subredditName
		);

		const responseData = await response.json();

		let isTaken = false;
		if (response.status == 409) {
			isTaken = true;
		}
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}

		context.commit('checkSubredditName', isTaken);
	},
	async getSavedCategories(context, payload) {
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/saved-categories', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + payload.token,
			},
		});

		const responseData = await response.json();

		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}

		context.commit('setSavedCategories', responseData);
	},
	async ToggleFavourite(_, payload) {
		const baseurl = payload.baseurl;

		const response = await fetch(
			baseurl + `/r/${payload.subredditName}/toggle-favorite`,
			{
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + payload.token,
				},
			}
		);

		const responseData = await response.json();

		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
	},
	async AddDescription(_, payload) {
		const description = { description: payload.description };
		const baseurl = payload.baseurl;

		const response = await fetch(
			baseurl + `/r/${payload.subredditName}/add-description`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + payload.token,
				},
				body: JSON.stringify(description),
			}
		);

		const responseData = await response.json();

		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
	},
	async AddMainTopic(_, payload) {
		const title = { title: payload.topic };
		const baseurl = payload.baseurl;

		const response = await fetch(
			baseurl + `/r/${payload.subredditName}/add-maintopic`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + payload.token,
				},
				body: JSON.stringify(title),
			}
		);

		const responseData = await response.json();

		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
	},
	async AddSubTopic(_, payload) {
		const title = { subtopics: payload.subtopics };
		const baseurl = payload.baseurl;

		const response = await fetch(
			baseurl + `/r/${payload.subredditName}/add-subtopic`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + payload.token,
				},
				body: JSON.stringify(title),
			}
		);

		const responseData = await response.json();

		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
	},
};
