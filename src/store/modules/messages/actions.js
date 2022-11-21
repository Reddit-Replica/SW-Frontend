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
		if (response.status == 200) {
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
		} else if (response.status == 401) {
			const error = new Error(
				responseData.error || 'Unauthorized to view this info'
			);
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Page not found');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},

	async loadUnreadMessages(context, payload) {
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/message/unread', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		});
		const responseData = await response.json();
		if (response.status == 200) {
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
		} else if (response.status == 401) {
			const error = new Error(
				responseData.error || 'Unauthorized to view this info'
			);
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Page not found');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},
	async loadUserMentions(context, payload) {
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/message/mentions', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		});
		const responseData = await response.json();
		if (response.status == 200) {
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
		} else if (response.status == 401) {
			const error = new Error(
				responseData.error || 'Unauthorized to view this info'
			);
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Page not found');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},
	async loadUserMessages(context, payload) {
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/message/messages', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		});
		const responseData = await response.json();
		if (response.status == 200) {
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
		} else if (response.status == 401) {
			const error = new Error(
				responseData.error || 'Unauthorized to view this info'
			);
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Page not found');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},
	async loadPostReplies(context, payload) {
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/message/post-reply', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		});
		const responseData = await response.json();
		if (response.status == 200) {
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
		} else if (response.status == 401) {
			const error = new Error(
				responseData.error || 'Unauthorized to view this info'
			);
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Page not found');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},
	async loadSentMessages(context, payload) {
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/message/sent', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		});
		const responseData = await response.json();
		if (response.status == 200) {
			const messages = [];

			for (const key in responseData) {
				const message = {
					after: responseData[key].after,
					id: responseData[key].children[0].msgID,
					text: responseData[key].children[0].text,
					receiverUsername: responseData[key].children[0].receiverUsername,
					sendAt: responseData[key].children[0].sendAt,
					subject: responseData[key].children[0].subject,
				};
				messages.push(message);
			}
			context.commit('setSentMessages', messages);
		} else if (response.status == 401) {
			const error = new Error(
				responseData.error || 'Unauthorized to view this info'
			);
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Page not found');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},
	async sendMessage(context, payload) {
		context.commit('sentSuccessfully', false);
		const newMessage = {
			text: payload.text,
			senderUsername: payload.senderUsername,
			receiverUsername: payload.receiverUsername,
			subject: payload.subject,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/message/compose', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			// 'Authorization' :`Bearer ${jwToken}`
			body: JSON.stringify(newMessage),
		});

		const responseData = await response.json();

		if (response.status == 201) {
			context.commit('sentSuccessfully', true);
		} else if (response.status == 401) {
			const error = new Error(
				responseData.error || 'Unauthorized to send a message'
			);
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
		// if (!response.ok) {
		// 	const error = new Error(
		// 		responseData.message || 'Failed to send request.'
		// 	);
		// 	throw error;
		// }
	},
	//error
	// async unreadMessage(_, payload) {
	// 	const message = {
	// 		id: payload.id,
	// 	};
	// 	const baseurl = payload.baseurl;

	// 	const response = await fetch(baseurl + '/unread-message', {
	// 		method: 'patch',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
	// 		},
	// 		body: JSON.stringify(message),
	// 	});

	// 	const responseData = await response.json();

	// 	if (!response.ok) {
	// 		const error = new Error(
	// 			responseData.message || 'Failed to send request.'
	// 		);
	// 		throw error;
	// 	}
	// },
	async blockUser(context, payload) {
		context.commit('blockSuccessfully', false);
		const block = {
			block: true,
			username: payload.username,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/block-user', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(block),
		});

		const responseData = await response.json();
		if (response.status == 200) {
			context.commit('blockSuccessfully', true);
		} else if (response.status == 400) {
			const error = new Error(responseData.error || 'The request was invalid');
			throw error;
		} else if (response.status == 401) {
			const error = new Error(responseData.error || 'Access Denied');
			throw error;
		} else if (response.status == 404) {
			const error = new Error(
				responseData.error || "Didn't find a user with that username"
			);
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Internal Server Error');
			throw error;
		}
	},
	async deleteMessage(context, payload) {
		context.commit('deleteMessageSuccessfully', false);
		const del = {
			id: payload.id,
			type: payload.type,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/delete', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(del),
		});

		const responseData = await response.json();

		if (response.status == 204) {
			context.commit('deleteMessageSuccessfully', true);
		} else if (response.status == 400) {
			const error = new Error(responseData.error || 'The request was invalid');
			throw error;
		} else if (response.status == 401) {
			const error = new Error(
				responseData.error || 'Unauthorized to delete this thing'
			);
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Thing not found');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},
	async spamMessage(context, payload) {
		context.commit('markSpamSuccessfully', false);
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
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(spam),
		});

		const responseData = await response.json();
		if (response.status == 200) {
			context.commit('markSpamSuccessfully', true);
		} else if (response.status == 400) {
			const error = new Error(responseData.error || 'The request was invalid');
			throw error;
		} else if (response.status == 401) {
			const error = new Error(
				responseData.error || 'Unauthorized to delete this thing'
			);
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Thing not found');
			throw error;
		} else if (response.status == 409) {
			const error = new Error(responseData.error || 'Already marked as spam');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},
	async loadSuggestedSender(context, payload) {
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/suggested-sender', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		});
		const responseData = await response.json();
		if (response.status == 200) {
			const suggests = [];

			for (const key in responseData) {
				const suggest = {
					text: responseData[key].children[0].text,
				};
				suggests.push(suggest);
			}
			context.commit('setSuggestedSender', suggests);
		} else if (response.status == 401) {
			const error = new Error(
				responseData.error || 'Unauthorized to view this info'
			);
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Page not found');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},

	async voteComment(context, payload) {
		context.commit('votedSuccessfully', false);
		const vote = {
			id: payload.id,
			type: 'comment',
			direction: payload.direction,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/vote', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(vote),
		});

		const responseData = await response.json();
		if (response.status == 200) {
			context.commit('votedSuccessfully', true);
		} else if (response.status == 400) {
			const error = new Error(responseData.error || 'The request was invalid');
			throw error;
		} else if (response.status == 401) {
			const error = new Error(responseData.error || 'User not allowed to vote');
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Thing not found');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},

	async replyMessage(context, payload) {
		context.commit('replyMessageSuccessfully', false);
		const newReply = {
			text: payload.text,
			senderUsername: payload.senderUsername,
			receiverUsername: payload.receiverUsername,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/message/compose', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(newReply),
		});

		const responseData = await response.json();

		if (response.status == 201) {
			context.commit('replyMessageSuccessfully', true);
		} else if (response.status == 401) {
			const error = new Error(
				responseData.error || 'Unauthorized to send a message'
			);
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},
};
