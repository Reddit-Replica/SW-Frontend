export default {
	async loadComposeMessages(context, payload) {
		const baseurl = payload.baseurl;
		// const response = await fetch(baseurl + '/message/compose');
		const response = await fetch(baseurl + '/compose');
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(responseData.message || 'Failed to fetch!');
			throw error;
		}

		const messages = [];

		for (const key in responseData) {
			const message = {
				before: responseData[key].before,
				after: responseData[key].after,
				text: responseData[key].children[0].text,
				type: responseData[key].children[0].type,
				senderUsername: responseData[key].children[0].senderUsername,
				receiverUsername: responseData[key].children[0].receiverUsername,
				subredditName: responseData[key].children[0].subredditName,
				postTitle: responseData[key].children[0].postTitle,
				subject: responseData[key].children[0].subject,
				sendAt: responseData[key].children[0].sendAt,
				isReply: responseData[key].children[0].isReply,
				isRead: responseData[key].children[0].isRead,
			};
			messages.push(message);
		}
		context.commit('setAllMessages', messages);
	},

	async loadUnreadMessages(context, payload) {
		const baseurl = payload.baseurl;
		// const response = await fetch(baseurl + '/message/compose');
		const response = await fetch(baseurl + '/unread');
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(responseData.message || 'Failed to fetch!');
			throw error;
		}

		const messages = [];

		for (const key in responseData) {
			const message = {
				before: responseData[key].before,
				after: responseData[key].after,
				text: responseData[key].children[0].text,
				type: responseData[key].children[0].type,
				senderUsername: responseData[key].children[0].senderUsername,
				receiverUsername: responseData[key].children[0].receiverUsername,
				subredditName: responseData[key].children[0].subredditName,
				postTitle: responseData[key].children[0].postTitle,
				subject: responseData[key].children[0].subject,
				sendAt: responseData[key].children[0].sendAt,
				isReply: responseData[key].children[0].isReply,
				isRead: responseData[key].children[0].isRead,
			};
			messages.push(message);
		}
		context.commit('setUnreadMessages', messages);
	},
	async loadUserMentions(context, payload) {
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/mentions');
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(responseData.message || 'Failed to fetch!');
			throw error;
		}

		const mentions = [];

		for (const key in responseData) {
			const mention = {
				before: responseData[key].before,
				after: responseData[key].after,
				text: responseData[key].children[0].text,
				type: responseData[key].children[0].type,
				senderUsername: responseData[key].children[0].senderUsername,
				receiverUsername: responseData[key].children[0].receiverUsername,
				subredditName: responseData[key].children[0].subredditName,
				postTitle: responseData[key].children[0].postTitle,
				subject: responseData[key].children[0].subject,
				sendAt: responseData[key].children[0].sendAt,
				isReply: responseData[key].children[0].isReply,
				isRead: responseData[key].children[0].isRead,
			};
			mentions.push(mention);
		}
		context.commit('setUserMentions', mentions);
	},
};
