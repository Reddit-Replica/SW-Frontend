export default {
	async loadInboxMessages(context, payload) {
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/message/inbox', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('userName')}`,
			},
		});
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
				id: responseData[key].children[0].id,
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
		const response = await fetch(baseurl + '/message/unread', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('userName')}`,
			},
		});
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
				id: responseData[key].children[0].id,
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
		const response = await fetch(baseurl + '/message/mentions', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('userName')}`,
			},
		});
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
				id: responseData[key].children[0].id,
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
		const response = await fetch(baseurl + '/message/messages', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('userName')}`,
			},
		});
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
				id: responseData[key].children[0].id,
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
		const response = await fetch(baseurl + '/message/post-reply', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('userName')}`,
			},
		});
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
				id: responseData[key].children[0].id,
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
	async loadSentMessages(context, payload) {
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/message/sent', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('userName')}`,
			},
		});
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
				id: responseData[key].children[0].id,
				text: responseData[key].children[0].text,
				receiverUsername: responseData[key].children[0].receiverUsername,
				subject: responseData[key].children[0].subject,
				sendAt: responseData[key].children[0].sendAt,
			};
			messages.push(message);
		}
		context.commit('setSentMessages', messages);
	},
	async sendMessage(_, payload) {
		const newMessage = {
			text: payload.text,
			senderUsername: payload.senderUsername,
			receiverUsername: payload.receiverUsername,
			sendAt: payload.sendAt,
			subject: payload.subject,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/message/compose', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('userName')}`,
			},
			// 'Authorization' :`Bearer ${jwToken}`
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
	//error
	async unreadMessage(_, payload) {
		const message = {
			id: payload.id,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/unread-message', {
			method: 'patch',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('userName')}`,
			},
			body: JSON.stringify(message),
		});

		const responseData = await response.json();

		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
	},
	async blockUser(_, payload) {
		const block = {
			block: true,
			username: payload.username,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/block-user', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('userName')}`,
			},
			body: JSON.stringify(block),
		});

		const responseData = await response.json();

		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
	},
	async deleteMessage(_, payload) {
		const del = {
			id: payload.id,
			type: payload.type,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/delete', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('userName')}`,
			},
			body: JSON.stringify(del),
		});

		const responseData = await response.json();

		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
	},
	async spamMessage(_, payload) {
		const spam = {
			id: payload.id,
			type: payload.type,
			reason: payload.reason,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/mark-spam', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('userName')}`,
			},
			body: JSON.stringify(spam),
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
