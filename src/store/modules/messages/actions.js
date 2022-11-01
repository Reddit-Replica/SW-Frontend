export default {
	async loadAllMessages(context, payload) {
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/allMessages');
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(responseData.message || 'Failed to fetch!');
			throw error;
		}

		const messages = [];

		for (const key in responseData) {
			const message = {
				text: responseData[key].text,
				type: responseData[key].type,
				senderUsername: responseData[key].senderUsername,
				receiverUsername: responseData[key].receiverUsername,
				subredditName: responseData[key].subredditName,
				postTitle: responseData[key].postTitle,
				subject: responseData[key].subject,
				sendAt: responseData[key].sendAt,
				isReply: responseData[key].isReply,
				isRead: responseData[key].isRead,
			};
			messages.push(message);
		}

		context.commit('setAllMessages', messages);
	},
};
