export default {
	async loadListOfAllModerators(context, payload) {
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

		const moderators = [];
		if (response.status == 200) {
			for (let i = 0; i < responseData.children.length; i++) {
				const moderator = {
					username: responseData.children[i].username,
					dateOfModeration: responseData.children[i].dateOfModeration,
					permissions: responseData.children[i].permissions,
					avatar: responseData.children[i].avatar,
				};
				moderators.push(moderator);
			}
			context.commit('setListOfAllModerators', moderators);
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

	async loadListOfModerators(context, payload) {
		const baseurl = payload.baseurl;
		const beforeMod = payload.beforeMod;
		const afterMod = payload.afterMod;
		let mediaQuery;
		if (beforeMod) {
			mediaQuery = '?limit=10&before=' + beforeMod;
		} else if (afterMod) {
			mediaQuery = '?limit=10&after=' + afterMod;
		} else {
			mediaQuery = '?limit=10';
		}
		const response = await fetch(
			baseurl + `/r/${payload.subredditName}/about/moderators${mediaQuery}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		);
		const responseData = await response.json();

		const moderators = [];
		if (response.status == 200) {
			let before, after;
			before = '';
			after = '';
			if (responseData.before) {
				before = responseData.before;
			}
			if (responseData.after) {
				after = responseData.after;
			}
			for (let i = 0; i < responseData.children.length; i++) {
				const moderator = {
					username: responseData.children[i].username,
					dateOfModeration: responseData.children[i].dateOfModeration,
					permissions: responseData.children[i].permissions,
					avatar: responseData.children[i].avatar,
				};
				moderators.push(moderator);
			}
			context.commit('setListOfModerators', moderators);
			context.commit('setBefore', before);
			context.commit('setAfter', after);
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

	async loadListOfInvitedModerators(context, payload) {
		const beforeMod = payload.beforeMod;
		const afterMod = payload.afterMod;
		const baseurl = payload.baseurl;
		let mediaQuery;
		if (beforeMod) {
			mediaQuery = '?limit=10&before=' + beforeMod;
		} else if (afterMod) {
			mediaQuery = '?limit=10&after=' + afterMod;
		} else {
			mediaQuery = '?limit=10';
		}
		const response = await fetch(
			baseurl +
				`/r/${payload.subredditName}/about/invited-moderators${mediaQuery}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		);
		const responseData = await response.json();
		const invitedModerators = [];
		if (response.status == 200) {
			let before, after;
			before = '';
			after = '';
			if (responseData.before) {
				before = responseData.before;
			}
			if (responseData.after) {
				after = responseData.after;
			}
			for (let i = 0; i < responseData.children.length; i++) {
				const invitedmoderator = {
					username: responseData.children[i].username,
					dateOfModeration: responseData.children[i].dateOfInvitation,
					permissions: responseData.children[i].permissions,
					avatar: responseData.children[i].avatar,
				};
				invitedModerators.push(invitedmoderator);
			}
			context.commit('setListOfInvitedModerators', invitedModerators);
			context.commit('setBefore', before);
			context.commit('setAfter', after);
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

	handleTime(context, payload) {
		var currentDate = new Date();
		var returnValue = '';
		var myTime = new Date(payload.time);
		if (currentDate.getFullYear() != myTime.getFullYear()) {
			returnValue = myTime.toJSON().slice(0, 10).replace(/-/g, '/');
		} else if (currentDate.getMonth() != myTime.getMonth()) {
			returnValue = currentDate.getMonth() - myTime.getMonth() + ' Month ago';
		} else if (currentDate.getDate() != myTime.getDate()) {
			returnValue = currentDate.getDate() - myTime.getDate() + ' Days ago';
		} else if (currentDate.getHours() != myTime.getHours()) {
			returnValue = currentDate.getHours() - myTime.getHours() + ' Hours ago';
		} else if (currentDate.getMinutes() != myTime.getMinutes()) {
			returnValue =
				currentDate.getMinutes() - myTime.getMinutes() + ' Minutes ago';
		} else {
			returnValue = 'Just now';
		}
		context.commit('setHandleTime', returnValue);
	},

	/////////////////////APPROVED/////////////////////
	async loadListOfApproved(context, payload) {
		const baseurl = payload.baseurl;
		const beforeMod = payload.beforeMod;
		const afterMod = payload.afterMod;
		let mediaQuery;
		if (beforeMod) {
			mediaQuery = '?limit=10&before=' + beforeMod;
		} else if (afterMod) {
			mediaQuery = '?limit=10&after=' + afterMod;
		} else {
			mediaQuery = '?limit=10';
		}
		const response = await fetch(
			baseurl + `/r/${payload.subredditName}/about/approved${mediaQuery}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		);
		const responseData = await response.json();

		const approved = [];
		if (response.status == 200) {
			let before, after;
			before = '';
			after = '';
			if (responseData.before) {
				before = responseData.before;
			}
			if (responseData.after) {
				after = responseData.after;
			}
			for (let i = 0; i < responseData.children.length; i++) {
				const approve = {
					username: responseData.children[i].username,
					avatar: responseData.children[i].avatar,
					dateOfApprove: responseData.children[i].dateOfApprove,
				};
				approved.push(approve);
			}
			context.commit('setListOfApproved', approved);
			context.commit('setBefore', before);
			context.commit('setAfter', after);
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

	async approveUser(context, payload) {
		context.commit('approveUserSuccessfully', false);
		const approve = {
			username: payload.username,
		};
		const baseurl = payload.baseurl;
		const accessToken = localStorage.getItem('accessToken');
		// const accessToken =
		// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzY4ZjI4ZTMxMWFmMTk0ZmQ2Mjg1YTQiLCJ1c2VybmFtZSI6InpleWFkdGFyZWtrIiwiaWF0IjoxNjY3ODIyMjIyfQ.TdmE3BaMI8rxQRoc7Ccm1dSAhfcyolyr0G-us7MObpQ';
		const response = await fetch(
			baseurl + `/r/${payload.subredditName}/approve-user`,
			{
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
				body: JSON.stringify(approve),
			}
		);

		const responseData = await response.json();
		if (response.status == 200) {
			context.commit('approveUserSuccessfully', true);
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

	async removeApprove(context, payload) {
		context.commit('removeApproveSuccessfully', false);
		const remove = {
			username: payload.username,
		};
		const baseurl = payload.baseurl;
		const accessToken = localStorage.getItem('accessToken');
		const response = await fetch(
			baseurl + `/r/${payload.subredditName}/remove-user`,
			{
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
				body: JSON.stringify(remove),
			}
		);

		const responseData = await response.json();
		if (response.status == 200) {
			context.commit('removeApproveSuccessfully', true);
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

	/////////////////////MUTED/////////////////////
	async loadListOfMuted(context, payload) {
		const baseurl = payload.baseurl;
		const beforeMod = payload.beforeMod;
		const afterMod = payload.afterMod;
		let mediaQuery;
		if (beforeMod) {
			mediaQuery = '?limit=10&before=' + beforeMod;
		} else if (afterMod) {
			mediaQuery = '?limit=10&after=' + afterMod;
		} else {
			mediaQuery = '?limit=10';
		}
		const response = await fetch(
			baseurl + `/r/${payload.subredditName}/about/muted${mediaQuery}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		);
		const responseData = await response.json();
		const muted = [];
		if (response.status == 200) {
			let before, after;
			before = '';
			after = '';
			if (responseData.before) {
				before = responseData.before;
			}
			if (responseData.after) {
				after = responseData.after;
			}
			for (let i = 0; i < responseData.children.length; i++) {
				const mute = {
					username: responseData.children[i].username,
					avatar: responseData.children[i].avatar,
					dateOfMute: responseData.children[i].dateOfMute,
					muteReason: responseData.children[i].muteReason,
				};
				muted.push(mute);
			}
			context.commit('setListOfMuted', muted);
			context.commit('setBefore', before);
			context.commit('setAfter', after);
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

	async muteUser(context, payload) {
		context.commit('muteUserSuccessfully', false);
		let mute = {};
		if (payload.muteReason) {
			mute = {
				username: payload.username,
				muteReason: payload.muteReason,
			};
		} else {
			mute = {
				username: payload.username,
			};
		}
		const baseurl = payload.baseurl;
		const accessToken = localStorage.getItem('accessToken');
		// const accessToken =
		// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzY4ZjI4ZTMxMWFmMTk0ZmQ2Mjg1YTQiLCJ1c2VybmFtZSI6InpleWFkdGFyZWtrIiwiaWF0IjoxNjY3ODIyMjIyfQ.TdmE3BaMI8rxQRoc7Ccm1dSAhfcyolyr0G-us7MObpQ';
		const response = await fetch(
			baseurl + `/r/${payload.subredditName}/mute-user`,
			{
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
				body: JSON.stringify(mute),
			}
		);

		const responseData = await response.json();
		if (response.status == 200) {
			context.commit('muteUserSuccessfully', true);
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

	async unmuteUser(context, payload) {
		context.commit('unmuteUserSuccessfully', false);
		const approve = {
			username: payload.username,
		};
		const baseurl = payload.baseurl;
		const accessToken = localStorage.getItem('accessToken');
		const response = await fetch(
			baseurl +
				`/r/${payload.subredditName}/unmute-user
			`,
			{
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
				body: JSON.stringify(approve),
			}
		);

		const responseData = await response.json();
		if (response.status == 200) {
			context.commit('unmuteUserSuccessfully', true);
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

	/////////////////////LEAVE MOD/////////////////////

	async leaveMod(context, payload) {
		context.commit('leaveModSuccessfully', false);
		const mod = {
			subreddit: payload.subreddit,
		};
		const baseurl = payload.baseurl;
		const accessToken = localStorage.getItem('accessToken');
		// const accessToken =
		// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzY4ZjI4ZTMxMWFmMTk0ZmQ2Mjg1YTQiLCJ1c2VybmFtZSI6InpleWFkdGFyZWtrIiwiaWF0IjoxNjY3ODIyMjIyfQ.TdmE3BaMI8rxQRoc7Ccm1dSAhfcyolyr0G-us7MObpQ';
		const response = await fetch(baseurl + `/leave-moderator`, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`,
			},
			body: JSON.stringify(mod),
		});

		const responseData = await response.json();
		if (response.status == 200) {
			context.commit('leaveModSuccessfully', true);
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

	/////////////////////INVITE MOD/////////////////////

	async inviteMod(context, payload) {
		context.commit('inviteModSuccessfully', false);
		const mod = {
			username: payload.username,
			subreddit: payload.subreddit,
			permissionToEverything: payload.permissionToEverything,
			permissionToManageUsers: payload.permissionToManageUsers,
			permissionToManageSettings: payload.permissionToManageSettings,
			permissionToManageFlair: payload.permissionToManageFlair,
			permissionToManagePostsComments: payload.permissionToManagePostsComments,
		};
		const baseurl = payload.baseurl;
		const accessToken = localStorage.getItem('accessToken');
		// const accessToken =
		// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzY4ZjI4ZTMxMWFmMTk0ZmQ2Mjg1YTQiLCJ1c2VybmFtZSI6InpleWFkdGFyZWtrIiwiaWF0IjoxNjY3ODIyMjIyfQ.TdmE3BaMI8rxQRoc7Ccm1dSAhfcyolyr0G-us7MObpQ';
		const response = await fetch(baseurl + `/moderator-invite`, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`,
			},
			body: JSON.stringify(mod),
		});

		const responseData = await response.json();
		if (response.status == 200) {
			context.commit('inviteModSuccessfully', true);
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

	async cancelInvitation(context, payload) {
		context.commit('cancelSuccessfully', false);
		const cancel = {
			username: payload.username,
			subreddit: payload.subreddit,
		};
		const baseurl = payload.baseurl;
		const accessToken = localStorage.getItem('accessToken');
		// const accessToken =
		// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzY4ZjI4ZTMxMWFmMTk0ZmQ2Mjg1YTQiLCJ1c2VybmFtZSI6InpleWFkdGFyZWtrIiwiaWF0IjoxNjY3ODIyMjIyfQ.TdmE3BaMI8rxQRoc7Ccm1dSAhfcyolyr0G-us7MObpQ';
		const response = await fetch(baseurl + `/cancel-invitation`, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`,
			},
			body: JSON.stringify(cancel),
		});

		const responseData = await response.json();
		if (response.status == 200) {
			context.commit('cancelSuccessfully', true);
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

	async acceptInvitation(context, payload) {
		context.commit('acceptSuccessfully', false);
		const accept = {
			username: payload.username,
			subreddit: payload.subreddit,
		};
		const baseurl = payload.baseurl;
		const accessToken = localStorage.getItem('accessToken');
		const response = await fetch(baseurl + `/accept-moderator-invite`, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`,
			},
			body: JSON.stringify(accept),
		});

		const responseData = await response.json();
		if (response.status == 200) {
			context.commit('acceptSuccessfully', true);
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

	//////////////////////SPAM////////////////////////

	async loadListOfSpams(context, payload) {
		const baseurl = payload.baseurl;
		const beforeMod = payload.beforeMod;
		const afterMod = payload.afterMod;
		const sortSpam = payload.sortSpam;
		const only = payload.only;
		let mediaQuery = '?limit=25';
		if (beforeMod) {
			mediaQuery.concat('&before=' + beforeMod);
		}
		if (afterMod) {
			mediaQuery.concat('&after=' + afterMod);
		}
		if (sortSpam) {
			mediaQuery = mediaQuery + '&sort=' + sortSpam;
		}
		if (only) {
			mediaQuery = mediaQuery + '&only=' + only;
		}
		const response = await fetch(
			//put mediaquery ${mediaQuery}
			baseurl + `/r/${payload.subredditName}/about/spam` + mediaQuery,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		);
		const responseData = await response.json();
		const spams = [];
		if (response.status == 200) {
			let before, after;
			before = '';
			after = '';
			if (responseData.before) {
				before = responseData.before;
			}
			if (responseData.after) {
				after = responseData.after;
			}
			//update responseData
			for (let i = 0; i < responseData[0].children.length; i++) {
				const spam = {
					id: responseData[0].children[i].id,
					type: responseData[0].children[i].type,
					data: responseData[0].children[i].data,
				};
				spams.push(spam);
			}
			context.commit('setListOfSpams', spams);
			context.commit('setBefore', before);
			context.commit('setAfter', after);
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

	async approvedSpam(context, payload) {
		context.commit('approveSuccessfully', false);
		const spam = {
			id: payload.id,
			type: payload.type,
		};
		const baseurl = payload.baseurl;
		const accessToken = localStorage.getItem('accessToken');
		// const accessToken =
		// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzY4ZjI4ZTMxMWFmMTk0ZmQ2Mjg1YTQiLCJ1c2VybmFtZSI6InpleWFkdGFyZWtrIiwiaWF0IjoxNjY3ODIyMjIyfQ.TdmE3BaMI8rxQRoc7Ccm1dSAhfcyolyr0G-us7MObpQ';
		const response = await fetch(baseurl + `/approve`, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`,
			},
			body: JSON.stringify(spam),
		});

		const responseData = await response.json();
		if (response.status == 200) {
			context.commit('approveSuccessfully', true);
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
		const bannedUser = {
			username: payload.username,
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

	async unBanUser(context, payload) {
		context.commit('unBanUserSuccessfully', false);
		const baseurl = payload.baseurl;
		const accessToken = localStorage.getItem('accessToken');
		const bannedUser = {
			username: payload.username,
			// username: 'asmaa',
			subreddit: payload.subredditName,
		};
		// const accessToken =
		// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzY4ZjI4ZTMxMWFmMTk0ZmQ2Mjg1YTQiLCJ1c2VybmFtZSI6InpleWFkdGFyZWtrIiwiaWF0IjoxNjY3ODIyMjIyfQ.TdmE3BaMI8rxQRoc7Ccm1dSAhfcyolyr0G-us7MObpQ';
		const response = await fetch(baseurl + `/unban`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`,
			},
			body: JSON.stringify(bannedUser),
		});

		const responseData = await response.json();
		if (response.status == 200) {
			context.commit('unBanUserSuccessfully', true);
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

	async loadListOfBanned(context, payload) {
		const baseurl = payload.baseurl;
		const beforeMod = payload.beforeMod;
		const afterMod = payload.afterMod;
		let mediaQuery;
		if (beforeMod) {
			mediaQuery = '?limit=10&before=' + beforeMod;
		} else if (afterMod) {
			mediaQuery = '?limit=10&after=' + afterMod;
		} else {
			mediaQuery = '?limit=10';
		}
		const response = await fetch(
			baseurl + `/r/${payload.subredditName}/about/banned${mediaQuery}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		);
		const responseData = await response.json();
		const banned = [];
		if (response.status == 200) {
			let before, after;
			before = '';
			after = '';
			if (responseData.before) {
				before = responseData.before;
			}
			if (responseData.after) {
				after = responseData.after;
			}
			for (let i = 0; i < responseData.children.length; i++) {
				const ban = {
					username: responseData.children[i].username,
					userId: responseData.children[i].userId,
					avatar: responseData.children[i].avatar,
					bannedAt: responseData.children[i].bannedAt,
					banPeriod: responseData.children[i].banPeriod,
					modNote: responseData.children[i].modNote,
					noteInclude: responseData.children[i].noteInclude,
					reasonForBan: responseData.children[i].reasonForBan,
				};
				banned.push(ban);
			}
			context.commit('setListOfBanned', banned);
			context.commit('setBefore', before);
			context.commit('setAfter', after);
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
	async unModerated(context, payload) {
		const baseurl = payload.baseurl;
		const sub = payload.subredditName;
		const sort = payload.sort;
		const response = await fetch(
			baseurl + `/r/` + sub + '/about/unmoderated?sort=' + sort,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		);

		const responseData = await response.json();
		const unModerated = [];
		if (response.status == 200) {
			let before, after;
			before = '';
			after = '';
			if (responseData.before) {
				before = responseData.before;
			}
			if (responseData.after) {
				after = responseData.after;
			}
			for (let i = 0; i < responseData.children.length; i++) {
				const post = {
					id: responseData.children[i].id,
					postId: responseData.children[i].data.id,
					subreddit: responseData.children[i].data.subreddit,
					postBy: responseData.children[i].data.postBy,
					title: responseData.children[i].data.title,
					link: responseData.children[i].data.link,
					video: responseData.children[i].data.video,
					content: responseData.children[i].data.content,
					nsfw: responseData.children[i].data.nsfw,
					spoiler: responseData.children[i].data.spoiler,
					votes: responseData.children[i].data.votes,
					numberOfComments: responseData.children[i].data.numberOfComments,
					editedAt: responseData.children[i].data.editedAt,
					postedAt: responseData.children[i].data.postedAt,
					spammedAt: responseData.children[i].data.spammedAt,
					saved: responseData.children[i].data.saved,
					vote: responseData.children[i].data.vote,
					ImagePath: responseData.children[i].data.images[0].path,
					Imagecaption: responseData.children[i].data.images[0].caption,
					Imagelink: responseData.children[i].data.images[0].link,
				};
				unModerated.push(post);
			}
			context.commit('setUnmoderated', unModerated);
			context.commit('setBefore', before);
			context.commit('setAfter', after);
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
	async EditedPosts(context, payload) {
		const baseurl = payload.baseurl;
		const sub = payload.subredditName;
		const sort = payload.sort;
		const response = await fetch(
			baseurl + `/r/` + sub + '/about/edited?only=posts&sort=' + sort,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		);

		const responseData = await response.json();
		const EditedPosts = [];
		if (response.status == 200) {
			let before, after;
			before = '';
			after = '';
			if (responseData.before) {
				before = responseData.before;
			}
			if (responseData.after) {
				after = responseData.after;
			}
			for (let i = 0; i < responseData.children.length; i++) {
				const post = {
					id: responseData.children[i].id,
					postId: responseData.children[i].data.id,
					subreddit: responseData.children[i].data.subreddit,
					postBy: responseData.children[i].data.postBy,
					title: responseData.children[i].data.title,
					link: responseData.children[i].data.link,
					video: responseData.children[i].data.video,
					content: responseData.children[i].data.content,
					nsfw: responseData.children[i].data.nsfw,
					spoiler: responseData.children[i].data.spoiler,
					votes: responseData.children[i].data.votes,
					numberOfComments: responseData.children[i].data.numberOfComments,
					editedAt: responseData.children[i].data.editedAt,
					postedAt: responseData.children[i].data.postedAt,
					spammedAt: responseData.children[i].data.spammedAt,
					saved: responseData.children[i].data.saved,
					vote: responseData.children[i].data.vote,
					ImagePath: responseData.children[i].data.images[0].path,
					Imagecaption: responseData.children[i].data.images[0].caption,
					Imagelink: responseData.children[i].data.images[0].link,
				};
				EditedPosts.push(post);
			}
			context.commit('setEditedPosts', EditedPosts);
			context.commit('setBefore', before);
			context.commit('setAfter', after);
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
	async EditedComments(context, payload) {
		const baseurl = payload.baseurl;
		const sub = payload.subredditName;
		const response = await fetch(
			baseurl + `/r/` + sub + '/about/edited?only=comments',
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		);

		const responseData = await response.json();
		const EditedComments = [];
		if (response.status == 200) {
			let before, after;
			before = '';
			after = '';
			if (responseData.before) {
				before = responseData.before;
			}
			if (responseData.after) {
				after = responseData.after;
			}
			for (let i = 0; i < responseData.children.length; i++) {
				const Comment = {
					postTitle: responseData.children[i].postTitle,
					postId: responseData.children[i].postId,
					subreddit: responseData.children[i].comment.subreddit,
					postBy: responseData.children[i].comment.commentedBy,
					postedAt: responseData.children[i].comment.commentedAt,
					editedAt: responseData.children[i].comment.editedAt,
					spammedAt: responseData.children[i].comment.spammedAt,
					votes: responseData.children[i].comment.votes,
					saved: responseData.children[i].comment.saved,
					vote: responseData.children[i].comment.vote,
					commentId: responseData.children[i].comment.id,
				};
				EditedComments.push(Comment);
			}
			context.commit('setEditedComments', EditedComments);
			context.commit('setBefore', before);
			context.commit('setAfter', after);
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
