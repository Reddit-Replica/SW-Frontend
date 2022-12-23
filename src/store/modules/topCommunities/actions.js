/**
 * @module TopCommunityActions
 */
export default {
	/**
	 * Action for getting all communities.
	 * @action getAllCommunities=setAllCommunities
	 * @param {Object} contains base url.
	 * @returns {void} */
	async getAllCommunities(context, payload) {
		const baseurl = payload.baseurl;

		const response = await fetch(
			baseurl + '/subreddits/leaderboard?limit=100',
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
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}

		if (response.status == 200) {
			context.commit('setAllCommunities', responseData['children']);
		} else if (response.status == 401) {
			const error = new Error(responseData.error || 'Unauthorized');
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Not Found');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},
	/**
	 * Action for getting all communities in a specific category.
	 * @action getCategoryCommunities=setCategoryCommunities
	 * @param {Object} contains category and base url.
	 * @returns {void} */
	async getCategoryCommunities(context, payload) {
		const baseurl = payload.baseurl;

		const response = await fetch(
			baseurl + `/subreddits/leaderboard/${payload.category}`,
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
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}

		if (response.status == 200) {
			context.commit('setCategoryCommunities', responseData['children']);
		} else if (response.status == 401) {
			const error = new Error(responseData.error || 'Unauthorized');
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Not Found');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},
	/**
	 * Action for getting top five communities in two random categories.
	 * @action getTwoCommunities=setFirstCategory,setFirstCommunities,setSecondCategory,setSecondCommunities
	 * @param {Object} contains base url.
	 * @returns {void} */
	async getTwoCommunities(context, payload) {
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/custom-random-category', {
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
			let first = responseData['first'];
			let firstCat = first['category'];
			let firstCom = first['subreddits'];
			context.commit('setFirstCommunities', firstCom);
			context.commit('setFirstCategory', firstCat);

			let second = responseData['second'];
			let secondCat = second['category'];
			let secondCom = second['subreddits'];
			context.commit('setSecondCommunities', secondCom);
			context.commit('setSecondCategory', secondCat);
		} else if (response.status == 401) {
			const error = new Error(responseData.error || 'Unauthorized');
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Not Found');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},
	// async getTwoCommunities(context, payload) {
	// 	const baseurl = payload.baseurl;

	// 	const response = await fetch(baseurl + '/random-category?limit=5', {
	// 		method: 'GET',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			Authorization: 'Bearer ' + payload.token,
	// 		},
	// 	});

	// 	const responseData = await response.json();
	// 	console.log(responseData);
	// 	if (!response.ok) {
	// 		const error = new Error(
	// 			responseData.message || 'Failed to send request.'
	// 		);
	// 		throw error;
	// 	}

	// 	if (response.status == 200) {
	// 		context.commit(
	// 			'setFirstCommunities',
	// 			responseData['firstCategoryChildren']
	// 		);
	// 		context.commit(
	// 			'setSecondCommunities',
	// 			responseData['secondCategoryChildren']
	// 		);
	// 		context.commit('setFirstCategory', responseData['firstCategory']);
	// 		context.commit('setSecondCategory', responseData['secondCategory']);
	// 	} else if (response.status == 401) {
	// 		const error = new Error(responseData.error || 'Unauthorized');
	// 		throw error;
	// 	} else if (response.status == 404) {
	// 		const error = new Error(responseData.error || 'Not Found');
	// 		throw error;
	// 	} else if (response.status == 500) {
	// 		const error = new Error(responseData.error || 'Server Error');
	// 		throw error;
	// 	}
	// },
	// async getOneCommunities(context, payload) {
	// 	const baseurl = payload.baseurl;

	// 	const response = await fetch(baseurl + '/custom-random-category?limit=5', {
	// 		method: 'GET',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			Authorization: 'Bearer ' + payload.token,
	// 		},
	// 	});

	// 	const responseData = await response.json();

	// 	if (!response.ok) {
	// 		const error = new Error(
	// 			responseData.message || 'Failed to send request.'
	// 		);
	// 		throw error;
	// 	}

	// 	if (response.status == 200) {
	// 		//context.commit('setOneCategory', responseData['firstCategory']);
	// 		context.commit('setOneCommunities', responseData['children']);
	// 	} else if (response.status == 401) {
	// 		const error = new Error(responseData.error || 'Unauthorized');
	// 		throw error;
	// 	} else if (response.status == 404) {
	// 		const error = new Error(responseData.error || 'Not Found');
	// 		throw error;
	// 	} else if (response.status == 500) {
	// 		const error = new Error(responseData.error || 'Server Error');
	// 		throw error;
	// 	}
	// },

	/**
	 * Action for getting top viewed communities.
	 * @action getTrendingCommunities=setTrendingCommunities
	 * @param {Object} contains base url.
	 * @returns {void} */
	async getTrendingCommunities(context, payload) {
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/trending-communities?limit=5', {
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
			context.commit('setTrendingCommunities', responseData['children']);
		} else if (response.status == 401) {
			const error = new Error(responseData.error || 'Unauthorized');
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Not Found');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},

	/**
	 * Action for getting a random community.
	 * @action getSuggestedCommunity=setSuggestedCommunity
	 * @param {Object} contains base url.
	 * @returns {void} */
	async getSuggestedCommunity(context, payload) {
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/trending-communities?limit=1', {
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
			context.commit('setSuggestedCommunity', responseData['children']);
		} else if (response.status == 401) {
			const error = new Error(responseData.error || 'Unauthorized');
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Not Found');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},
};
