export default {
	async loadInboxMessages(context, payload) {
		const baseurl = payload.baseurl;
		// const response = await fetch(baseurl + '/message/compose');
		const response = await fetch(baseurl + '/message/inbox');
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
		context.commit('setInboxMessages', messages);
	},

	async loadUnreadMessages(context, payload) {
		const baseurl = payload.baseurl;
		// const response = await fetch(baseurl + '/message/compose');
		const response = await fetch(baseurl + '/message/unread');
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
		const response = await fetch(baseurl + '/message/mentions');
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
	async loadUserMessages(context, payload) {
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/message/messages');
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
				senderUsername: responseData[key].children[0].senderUsername,
				receiverUsername: responseData[key].children[0].receiverUsername,
				sendAt: responseData[key].children[0].sendAt,
				subject: responseData[key].children[0].subject,
				isReply: responseData[key].children[0].isReply,
				isRead: responseData[key].children[0].isRead,
			};
			messages.push(message);
		}
		context.commit('setUserMessages', messages);
	},
	async loadPostReplies(context, payload) {
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/message/post-reply');
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
		context.commit('setPostReplies', messages);
	},
	async sendMessage(_, payload) {
		const newMessage = {
			subredditName: payload.subredditName,
			type: payload.type,
			nsfw: payload.nsfw,
			category: payload.category,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/message/compose', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newMessage),
		});

		const responseData = await response.json();

		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
	},
};
