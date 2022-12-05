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

	//////////////////////RULES////////////////////////

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
		const accessToken = localStorage.getItem('accessToken');
		// const accessToken =
		// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzY4ZjI4ZTMxMWFmMTk0ZmQ2Mjg1YTQiLCJ1c2VybmFtZSI6InpleWFkdGFyZWtrIiwiaWF0IjoxNjY3ODIyMjIyfQ.TdmE3BaMI8rxQRoc7Ccm1dSAhfcyolyr0G-us7MObpQ';
		const response = await fetch(
			baseurl + '/r/' + subredditName + '/about/rules',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
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
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Not Found');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},

	async loadListOfRules(context, payload) {
		const baseurl = payload.baseurl;
		/////////////////////should be localStorage.getItem('accessToken');/////////////////////
		const accessToken = localStorage.getItem('accessToken');
		// const accessToken =
		// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzY4ZjI4ZTMxMWFmMTk0ZmQ2Mjg1YTQiLCJ1c2VybmFtZSI6InpleWFkdGFyZWtrIiwiaWF0IjoxNjY3ODIyMjIyfQ.TdmE3BaMI8rxQRoc7Ccm1dSAhfcyolyr0G-us7MObpQ';
		const response = await fetch(
			baseurl + `/r/${payload.subredditName}/about/rules`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		const responseData = await response.json();
		if (response.status == 200) {
			const rules = [];

			for (let i = 0; i < responseData.rules.length; i++) {
				const rule = {
					ruleId: responseData.rules[i].ruleId,
					ruleName: responseData.rules[i].ruleName,
					ruleOrder: responseData.rules[i].ruleOrder,
					createdAt: responseData.rules[i].createdAt,
					appliesTo: responseData.rules[i].appliesTo,
					reportReason: responseData.rules[i].reportReason,
					description: responseData.rules[i].description,
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

	async updateRule(context, payload) {
		context.commit('updateRuleSuccessfully', false);
		const updatedRule = {
			ruleName: payload.ruleName,
			ruleOrder: payload.ruleOrder,
			appliesTo: payload.appliesTo,
			reportReason: payload.reportReason,
			description: payload.description,
		};
		const baseurl = payload.baseurl;
		const accessToken = localStorage.getItem('accessToken');
		// const accessToken =
		// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzY4ZjI4ZTMxMWFmMTk0ZmQ2Mjg1YTQiLCJ1c2VybmFtZSI6InpleWFkdGFyZWtrIiwiaWF0IjoxNjY3ODIyMjIyfQ.TdmE3BaMI8rxQRoc7Ccm1dSAhfcyolyr0G-us7MObpQ';
		const response = await fetch(
			baseurl + `/r/${payload.subredditName}/about/rules/${payload.ruleId}`,
			{
				method: 'put',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
				body: JSON.stringify(updatedRule),
			}
		);

		const responseData = await response.json();
		if (response.status == 200) {
			context.commit('updateRuleSuccessfully', true);
		} else if (response.status == 400) {
			const error = new Error(responseData.error || 'Bad Request');
			throw error;
		} else if (response.status == 401) {
			const error = new Error(
				responseData.error || 'Unauthorized to send a message'
			);
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Not Found');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},

	async deleteRule(context, payload) {
		context.commit('deleteRuleSuccessfully', false);
		const baseurl = payload.baseurl;
		const accessToken = localStorage.getItem('accessToken');
		// const accessToken =
		// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzY4ZjI4ZTMxMWFmMTk0ZmQ2Mjg1YTQiLCJ1c2VybmFtZSI6InpleWFkdGFyZWtrIiwiaWF0IjoxNjY3ODIyMjIyfQ.TdmE3BaMI8rxQRoc7Ccm1dSAhfcyolyr0G-us7MObpQ';
		const response = await fetch(
			baseurl + `/r/${payload.subredditName}/about/rules/${payload.ruleId}`,
			{
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);

		const responseData = await response.json();
		if (response.status == 200) {
			context.commit('deleteRuleSuccessfully', true);
		} else if (response.status == 400) {
			const error = new Error(responseData.error || 'Bad Request');
			throw error;
		} else if (response.status == 401) {
			const error = new Error(
				responseData.error || 'Unauthorized to send a message'
			);
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Not Found');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},

	async updateRulesOrder(context, payload) {
		context.commit('updateRulesSuccessfully', false);
		const rulesOrder = [];

		for (let i = 0; i < payload.rulesOrder.length; i++) {
			const rule = {
				ruleId: payload.rulesOrder[i].ruleId,
				ruleOrder: i,
			};
			rulesOrder.push(rule);
		}
		console.log();
		const baseurl = payload.baseurl;
		const subredditName = payload.subredditName;
		const accessToken = localStorage.getItem('accessToken');
		// const accessToken =
		// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzY4ZjI4ZTMxMWFmMTk0ZmQ2Mjg1YTQiLCJ1c2VybmFtZSI6InpleWFkdGFyZWtrIiwiaWF0IjoxNjY3ODIyMjIyfQ.TdmE3BaMI8rxQRoc7Ccm1dSAhfcyolyr0G-us7MObpQ';
		const response = await fetch(
			baseurl + '/r/' + subredditName + '/about/rules-order',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
				body: JSON.stringify({ rulesOrder: rulesOrder }),
			}
		);

		const responseData = await response.json();

		if (response.status == 200) {
			context.commit('updateRulesSuccessfully', true);
		} else if (response.status == 400) {
			const error = new Error(responseData.error || 'Bad Request');
			throw error;
		} else if (response.status == 401) {
			const error = new Error(
				responseData.error || 'Unauthorized to send a message'
			);
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Not Found');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},

	//////////////////////FLAIR////////////////////////

	async loadListOfFlairs(context, payload) {
		const baseurl = payload.baseurl;
		/////////////////////should be localStorage.getItem('accessToken');/////////////////////
		const accessToken = localStorage.getItem('accessToken');
		// const accessToken =
		// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzY4ZjI4ZTMxMWFmMTk0ZmQ2Mjg1YTQiLCJ1c2VybmFtZSI6InpleWFkdGFyZWtrIiwiaWF0IjoxNjY3ODIyMjIyfQ.TdmE3BaMI8rxQRoc7Ccm1dSAhfcyolyr0G-us7MObpQ';
		const response = await fetch(
			baseurl + `/r/${payload.subredditName}/about/post-flairs`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		const responseData = await response.json();
		if (response.status == 200) {
			const flairs = [];

			for (let i = 0; i < responseData.postFlairs.length; i++) {
				const flair = {
					flairId: responseData.postFlairs[i].flairId,
					flairName: responseData.postFlairs[i].flairName,
					flairOrder: responseData.postFlairs[i].flairOrder,
					backgroundColor: responseData.postFlairs[i].backgroundColor,
					textColor: responseData.postFlairs[i].textColor,
					modOnly: responseData.postFlairs[i].flairSettings.modOnly,
					allowUserEdits:
						responseData.postFlairs[i].flairSettings.allowUserEdits,
					flairType: responseData.postFlairs[i].flairSettings.flairType,
					emojisLimit: responseData.postFlairs[i].flairSettings.emojisLimit,
				};
				flairs.push(flair);
			}
			context.commit('setListOfFlairs', flairs);
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

	async addFlair(context, payload) {
		context.commit('addFlairSuccessfully', false);
		const newFlair = {
			flairName: payload.flairName,
			backgroundColor: payload.backgroundColor,
			textColor: payload.textColor,
			settings: {
				modOnly: payload.modOnly,
				allowUserEdits: payload.allowUserEdits,
			},
		};
		const baseurl = payload.baseurl;
		const subredditName = payload.subredditName;
		const accessToken = localStorage.getItem('accessToken');
		// const accessToken =
		// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzY4ZjI4ZTMxMWFmMTk0ZmQ2Mjg1YTQiLCJ1c2VybmFtZSI6InpleWFkdGFyZWtrIiwiaWF0IjoxNjY3ODIyMjIyfQ.TdmE3BaMI8rxQRoc7Ccm1dSAhfcyolyr0G-us7MObpQ';
		const response = await fetch(
			baseurl + '/r/' + subredditName + '/about/post-flairs',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
				body: JSON.stringify(newFlair),
			}
		);

		const responseData = await response.json();

		if (response.status == 200) {
			context.commit('addFlairSuccessfully', true);
		} else if (response.status == 400) {
			const error = new Error(responseData.error || 'Bad Request');
			throw error;
		} else if (response.status == 401) {
			const error = new Error(
				responseData.error || 'Unauthorized to send a message'
			);
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Not Found');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},

	async updateFlair(context, payload) {
		context.commit('updateFlairSuccessfully', false);
		const updatedFlair = {
			flairName: payload.flairName,
			backgroundColor: payload.backgroundColor,
			textColor: payload.textColor,
			settings: {
				modOnly: payload.modOnly,
				allowUserEdits: payload.allowUserEdits,
			},
		};
		const baseurl = payload.baseurl;
		const accessToken = localStorage.getItem('accessToken');
		// const accessToken =
		// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzY4ZjI4ZTMxMWFmMTk0ZmQ2Mjg1YTQiLCJ1c2VybmFtZSI6InpleWFkdGFyZWtrIiwiaWF0IjoxNjY3ODIyMjIyfQ.TdmE3BaMI8rxQRoc7Ccm1dSAhfcyolyr0G-us7MObpQ';
		const response = await fetch(
			baseurl +
				`/r/${payload.subredditName}/about/post-flairs/${payload.flairId}`,
			{
				method: 'put',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
				body: JSON.stringify(updatedFlair),
			}
		);

		const responseData = await response.json();

		if (response.status == 200) {
			context.commit('updateFlairSuccessfully', true);
		} else if (response.status == 400) {
			const error = new Error(responseData.error || 'Bad Request');
			throw error;
		} else if (response.status == 401) {
			const error = new Error(
				responseData.error || 'Unauthorized to send a message'
			);
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Not Found');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},

	async deleteFlair(context, payload) {
		context.commit('deleteFlairSuccessfully', false);
		const baseurl = payload.baseurl;
		const accessToken = localStorage.getItem('accessToken');
		// const accessToken =
		// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzY4ZjI4ZTMxMWFmMTk0ZmQ2Mjg1YTQiLCJ1c2VybmFtZSI6InpleWFkdGFyZWtrIiwiaWF0IjoxNjY3ODIyMjIyfQ.TdmE3BaMI8rxQRoc7Ccm1dSAhfcyolyr0G-us7MObpQ';
		const response = await fetch(
			baseurl +
				`/r/${payload.subredditName}/about/post-flairs/${payload.flairId}`,
			{
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);

		const responseData = await response.json();
		if (response.status == 200) {
			context.commit('deleteFlairSuccessfully', true);
		} else if (response.status == 400) {
			const error = new Error(responseData.error || 'Bad Request');
			throw error;
		} else if (response.status == 401) {
			const error = new Error(
				responseData.error || 'Unauthorized to send a message'
			);
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Not Found');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},

	async updateFlairsOrder(context, payload) {
		context.commit('updateFlairsSuccessfully', false);
		const flairsOrder = [];

		for (let i = 0; i < payload.flairsOrder.length; i++) {
			const flair = {
				flairId: payload.flairsOrder[i].flairId,
				flairOrder: i,
			};
			flairsOrder.push(flair);
		}
		const baseurl = payload.baseurl;
		const subredditName = payload.subredditName;
		const accessToken = localStorage.getItem('accessToken');
		// const accessToken =
		// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzY4ZjI4ZTMxMWFmMTk0ZmQ2Mjg1YTQiLCJ1c2VybmFtZSI6InpleWFkdGFyZWtrIiwiaWF0IjoxNjY3ODIyMjIyfQ.TdmE3BaMI8rxQRoc7Ccm1dSAhfcyolyr0G-us7MObpQ';
		const response = await fetch(
			baseurl + '/r/' + subredditName + '/about/post-flairs-order',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
				body: JSON.stringify({ flairsOrder: flairsOrder }),
			}
		);

		const responseData = await response.json();

		if (response.status == 200) {
			context.commit('updateFlairsSuccessfully', true);
		} else if (response.status == 400) {
			const error = new Error(responseData.error || 'Bad Request');
			throw error;
		} else if (response.status == 401) {
			const error = new Error(
				responseData.error || 'Unauthorized to send a message'
			);
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Not Found');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},

	//////////////////////BAN////////////////////////

	async banUser(context, payload) {
		context.commit('banUserSuccessfully', false);
		const baseurl = payload.baseurl;
		const accessToken = localStorage.getItem('accessToken');
		console.log(payload);
		const bannedUser = {
			userId: payload.userId,
			subreddit: payload.subredditName,
			banPeriod: payload.banPeriod,
			reasonForBan: payload.reasonForBan,
			modNote: payload.modNote,
			noteInclude: payload.noteInclude,
		};
		// const accessToken =
		// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzY4ZjI4ZTMxMWFmMTk0ZmQ2Mjg1YTQiLCJ1c2VybmFtZSI6InpleWFkdGFyZWtrIiwiaWF0IjoxNjY3ODIyMjIyfQ.TdmE3BaMI8rxQRoc7Ccm1dSAhfcyolyr0G-us7MObpQ';
		const response = await fetch(baseurl + `/ban`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`,
			},
			body: JSON.stringify(bannedUser),
		});

		const responseData = await response.json();
		if (response.status == 200) {
			context.commit('banUserSuccessfully', true);
		} else if (response.status == 400) {
			const error = new Error(responseData.error || 'Bad Request');
			throw error;
		} else if (response.status == 401) {
			const error = new Error(
				responseData.error || 'Unauthorized to send a message'
			);
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
