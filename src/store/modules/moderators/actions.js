export default {
	async loadListOfModerators(context, payload) {
		const baseurl = payload.baseurl;
		console.log(payload.subredditName);
		const response = await fetch(
			baseurl + `/r/${payload.subredditName}/about/moderators`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('userName')}`,
				},
			}
		);
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(responseData.message || 'Failed to fetch!');
			throw error;
		}

		const moderators = [];

		for (const key in responseData) {
			const moderator = {
				before: responseData[key].before,
				after: responseData[key].after,
				username: responseData[key].children[0].username,
				nickname: responseData[key].children[0].nickname,
				dateOfModeration: responseData[key].children[0].dateOfModeration,
				permissions: responseData[key].children[0].permissions,
			};
			moderators.push(moderator);
		}
		context.commit('setListOfModerators', moderators);
	},
};
