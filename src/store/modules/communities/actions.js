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
	async addToFavourite(_, payload) {
		const baseurl = payload.baseurl;

		const response = await fetch(
			baseurl + `/r/${payload.subredditName}/make-favorite`,
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
	async removeFromFavourite(_, payload) {
		const baseurl = payload.baseurl;

		const response = await fetch(
			baseurl + `/r/${payload.subredditName}/remove-favorite`,
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
		console.log(payload.description);
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
		const title = { title: payload.title };
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
		const title = { title: payload.subtopics };
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

		if (response.status == 200) {
			return;
		} else if (response.status == 400) {
			const error = new Error(responseData.error || 'Bad Request');
			throw error;
		} else if (response.status == 403) {
			const error = new Error(responseData.error || 'Bad Request');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Bad Request');
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
		context.commit('notFound', false);
		const baseurl = payload.baseurl;
		// console.log(payload);
		const response = await fetch(baseurl + `/r/${payload.subredditName}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		});

		const responseData = await response.json();
		// if (!response.ok) {
		// 	const error = new Error(
		// 		responseData.message || 'Failed to send request.'
		// 	);
		// 	throw error;
		// }

		// console.log(response.status);
		if (response.status == 200) {
			context.commit('setSubreddit', responseData);
		} else if (response.status == 401) {
			const error = new Error(responseData.error || 'Bad Request');
			throw error;
		} else if (response.status == 404) {
			// console.log('notttttttt');
			context.commit('notFound', true);
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
	 * @param {Object} contains message if it is a private subreddit, subreddit id and base url.
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
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(joinInfo),
		});

		const responseData = await response.json();

		if (response.status == 200) {
			return;
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
	 * Action for leaving a specific subreddit.
	 * @action leaveSubreddit
	 * @param {Object} contains subreddit name and base url.
	 * @returns {void}
	 */
	async leaveSubreddit(context, payload) {
		context.commit('setLeaveOwner', false);
		const leaveInfo = {
			subredditName: payload.subredditName,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/leave-subreddit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(leaveInfo),
		});

		const responseData = await response.json();

		if (response.status == 200) {
			return;
		} else if (response.status == 400) {
			const error = new Error(responseData.error || 'Bad Request');
			if (error.message == 'Owner of the subreddit can not leave') {
				context.commit('setLeaveOwner', true);
				return;
				//throw error;
			}
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			if (error.message == 'Owner of the subreddit can not leave') {
				context.commit('setLeaveOwner', true);
				throw error;
			}
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
		var query;

		if (payload.query == undefined) query = '';
		else query = '?time=' + payload.query;

		const response = await fetch(
			baseurl + `/r/${payload.subredditName}/${title}${query}`,
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

		context.commit('setPosts', responseData['children']);
		console.log(responseData);
	},
	///////////////// moderation community norhan //////////////////
	async getsuggestedTopics(context, payload) {
		const baseurl = payload.baseurl;
		const response = await fetch(
			baseurl + `/r/${payload.subredditName}/suggested-topics`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		);
		const responseData = await response.json();
		if (response.status == 200) {
			context.commit('setTopics', responseData.communityTopics);
			console.log(responseData.children);
		} else if (response.status == 400) {
			const error = new Error(responseData.error);
			throw error;
		} else {
			const error = new Error('server error');
			throw error;
		}
		return response.status;
	},
};
