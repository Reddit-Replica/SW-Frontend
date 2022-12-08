/**
 * @module CommunityActions
 */
export default {
	/**
	 * Action for creating a new subreddit.
	 * @action createSubreddit=createdSuccessfully
	 * @param {Object} contains new subreddit data and base url.
	 * @returns {void} */
	async createSubreddit(context, payload) {
		context.commit('createdSuccessfully', false);
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

		if (response.status == 201) {
			context.commit('createdSuccessfully', true);
		} else if (response.status == 400) {
			const error = new Error(responseData.error || 'Bad Request');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},
	/**
	 * Action for checking if subreddit name is used before.
	 * @action checkSubredditName=checkSubredditName
	 * @param {Object} contains subreddit name and base url.
	 * @returns {void}
	 */
	async checkSubredditName(context, payload) {
		const baseurl = payload.baseurl;

		const response = await fetch(
			baseurl +
				'/subreddit-name-available?subredditName=' +
				payload.subredditName,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + payload.token,
				},
			}
		);

		const responseData = await response.json();

		let isTaken = false;
		if (response.status == 409) {
			isTaken = true;
		} else if (response.status == 200) {
			isTaken = false;
		} else if (response.status == 400) {
			isTaken = false;
			const error = new Error(responseData.error || 'Bad Request');
			throw error;
		} else if (response.status == 500) {
			isTaken = false;
			const error = new Error(responseData.error || 'Bad Request');
			throw error;
		}
		context.commit('checkSubredditName', isTaken);
	},
	/**
	 *  Action for fetching recommended categories for a new subreddit.
	 * @action getSavedCategories=setSavedCategories
	 * @param {Object} contains base url
	 * @returns {void}
	 */
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
	/**
	 *  Action for toggling add a subreddit to favourite.
	 * @action ToggleFavourite
	 * @param {Object} contains base url
	 * @returns {void}
	 */
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
	/**
	 *  Action for adding a description for a specific subreddit.
	 * @action AddDescription
	 * @param {Object} contains description and base url.
	 * @returns {void}
	 */
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
	/**
	 * Action for adding a main topic for a specific subreddit.
	 * @action AddMainTopic
	 * @param {Object} contains topic and base url.
	 * @returns {void}
	 */
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
	/**
	 * Action for adding subtopics for a specific subreddit.
	 * @action AddSubTopic
	 * @param {Object} contains subtopics array and base url.
	 * @returns {void}
	 */
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
	/**
	 * Action for fetching a specific subreddit's details.
	 * @action getSubreddit=setSubreddit
	 * @param {Object} contains base url
	 * @returns {void}
	 */
	async getSubreddit(context, payload) {
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + `/r/${payload.subredditName}`, {
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

		if (response.status == 200) {
			context.commit('setSubreddit', responseData['children']);
		} else if (response.status == 401) {
			const error = new Error(responseData.error || 'Bad Request');
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Bad Request');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},
	/**
	 * Action for changing value of new created subreddit boolean property.
	 * @action changeFirstcreated=createdSuccessfully
	 * @param {Object} contains boolean value and base url.
	 * @returns {void}
	 */
	async changeFirstcreated(context, payload) {
		context.commit('createdSuccessfully', payload);
	},
	/**
	 * Action for joining a specific subreddit.
	 * @action joinSubreddit
	 * @param {Object} contains message if it is a private subreddit and base url.
	 * @returns {void}
	 */
	async joinSubreddit(_, payload) {
		const joinInfo = {
			subredditId: payload.subredditId,
			message: payload.message,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/join-subreddit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + payload.token,
			},
			body: JSON.stringify(joinInfo),
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
	 * Action for fetching posts of a specific subreddit.
	 * @action fetchSubredditPosts=setPosts
	 * @param {Object} contains posts sorting type and base url.
	 * @returns {void}
	 */
	async fetchSubredditPosts(context, payload) {
		const baseurl = payload.baseurl;
		const title = payload.title;

		const response = await fetch(
			baseurl + `/r/${payload.subredditName}/${title}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + payload.token,
				},
			}
		);

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
				const response2 = await fetch(baseurl + '/post-details', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: 'Bearer ' + payload.token,
					},
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
};
