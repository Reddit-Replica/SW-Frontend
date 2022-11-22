export default {
	async loadListOfModerators(context, payload) {
		const baseurl = payload.baseurl;
		const response = await fetch(
			baseurl + `/r/${payload.subredditName}/about/moderators`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
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

	async addRule(context, payload) {
		context.commit('addRuleSuccessfully', false);
		const newRule = {
			ruleName: payload.ruleName,
			appliesTo: payload.appliesTo,
			reportReason: payload.reportReason,
			description: payload.description,
		};
		const baseurl = payload.baseurl;
		const subredditName = payload.subredditName;
		// const accessToken =
		// 	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzY4ZjI4ZTMxMWFmMTk0ZmQ2Mjg1YTQiLCJ1c2VybmFtZSI6InpleWFkdGFyZWtrIiwiaWF0IjoxNjY3ODIyMjIyfQ.TdmE3BaMI8rxQRoc7Ccm1dSAhfcyolyr0G-us7MObpQ';
		const response = await fetch(
			baseurl + '/r/' + subredditName + '/about/rules',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
				body: JSON.stringify(newRule),
			}
		);

		const responseData = await response.json();

		if (response.status == 201) {
			context.commit('addRuleSuccessfully', true);
		} else if (response.status == 400) {
			const error = new Error(responseData.error || 'Bad Request');
			throw error;
		} else if (response.status == 401) {
			const error = new Error(
				responseData.error || 'Unauthorized to send a message'
			);
			throw error;
		} else if (response.status == 504) {
			const error = new Error(responseData.error || 'Not Found');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},

	async loadListOfRules(context, payload) {
		const baseurl = payload.baseurl;
		const response = await fetch(
			baseurl + `/r/${payload.subredditName}/about/rules`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
					subreddit: payload.subredditName,
				},
			}
		);
		const responseData = await response.json();
		if (response.status == 200) {
			const rules = [];

			for (const key in responseData) {
				const rule = {
					ruleID: responseData[key].rules[0].ruleID,
					ruleName: responseData[key].rules[0].ruleName,
					ruleOrder: responseData[key].rules[0].ruleOrder,
					createdAt: responseData[key].rules[0].createdAt,
					appliesTo: responseData[key].rules[0].appliesTo,
					reportReason: responseData[key].rules[0].reportReason,
					description: responseData[key].rules[0].description,
				};
				rules.push(rule);
			}
			context.commit('setListOfRules', rules);
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
};
