/**
 * @module MessagesActions
 */
export default {
	/**
	 * Make a request to get inbox messages ,
	 * @action loadInboxMessages=setInboxMessages
	 * @param {object} payload An object contains baseurl.
	 * @returns {integer} return an object contains all its data
	 */
	async loadInboxMessages(context, payload) {
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/message/inbox', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		});
		const responseData = await response.json();
		if (response.status == 200) {
			const messages = [];

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
				const message = {
					id: responseData.children[i].id,
					text: responseData.children[i].data.text,
					senderUsername: responseData.children[i].data.senderUsername,
					receiverUsername: responseData.children[i].data.receiverUsername,
					sendAt: responseData.children[i].data.sendAt,
					subject: responseData.children[i].data.subject,
					type: responseData.children[i].data.type,
					subredditName: responseData.children[i].data.subredditName,
					isModerator: responseData.children[i].data.isModerator,
					postTitle: responseData.children[i].data.postTitle,
					postID: responseData.children[i].data.postID,
					commentID: responseData.children[i].data.commentID,
					numOfComments: responseData.children[i].data.numOfComments,
					isSenderUser: responseData.children[i].data.isSenderUser,
					isReceiverUser: responseData.children[i].data.isReceiverUser,
				};
				messages.push(message);
			}
			context.commit('setInboxMessages', messages);
			context.commit('before', before);
			context.commit('after', after);
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

	/**
	 * Make a request to get unread messages ,
	 * @action loadUnreadMessages=setUnreadMessages
	 * @param {object} payload An object contains baseurl.
	 * @returns {integer} return an object contains all its data
	 */
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
				const message = {
					id: responseData.children[i].id,
					text: responseData.children[i].data.text,
					senderUsername: responseData.children[i].data.senderUsername,
					receiverUsername: responseData.children[i].data.receiverUsername,
					sendAt: responseData.children[i].data.sendAt,
					subject: responseData.children[i].data.subject,
					subredditName: responseData.children[i].data.subredditName,
					isModerator: responseData.children[i].data.isModerator,
					isSenderUser: responseData.children[i].data.isSenderUser,
					isReceiverUser: responseData.children[i].data.isReceiverUser,
				};
				messages.push(message);
			}
			context.commit('setUnreadMessages', messages);
			context.commit('before', before);
			context.commit('after', after);
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

	/**
	 * Make a request to get user mentions ,
	 * @action loadUserMentions=setUserMentions
	 * @param {object} payload An object contains baseurl.
	 * @returns {integer} return an object contains all its data
	 */
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
				const mention = {
					id: responseData.children[i].id,
					text: responseData.children[i].data.text,
					senderUsername: responseData.children[i].data.senderUsername,
					receiverUsername: responseData.children[i].data.receiverUsername,
					sendAt: responseData.children[i].data.sendAt,
					type: responseData.children[i].data.type,
					subredditName: responseData.children[i].data.subredditName,
					postID: responseData.children[i].data.postID,
					commentID: responseData.children[i].data.commentID,
					numOfComments: responseData.children[i].data.numOfComments,
				};
				mentions.push(mention);
			}
			context.commit('setUserMentions', mentions);
			context.commit('before', before);
			context.commit('after', after);
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

	/**
	 * Make a request to get user messages ,
	 * @action loadUserMessages=setUserMessages
	 * @param {object} payload An object contains baseurl.
	 * @returns {integer} return an object contains all its data
	 */
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

	/**
	 * Make a request to get post replies ,
	 * @action loadPostReplies=setPostReplies
	 * @param {object} payload An object contains baseurl.
	 * @returns {integer} return an object contains all its data
	 */
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

	/**
	 * Make a request to get sent messages ,
	 * @action loadSentMessages=setSentMessages
	 * @param {object} payload An object contains baseurl.
	 * @returns {integer} return an object contains all its data
	 */
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
				const message = {
					id: responseData.children[i].id,
					text: responseData.children[i].data.text,
					subredditName: responseData.children[i].data.subredditName,
					isModerator: responseData.children[i].data.isModerator,
					senderUsername: responseData.children[i].data.senderUsername,
					receiverUsername: responseData.children[i].data.receiverUsername,
					sendAt: responseData.children[i].data.sendAt,
					subject: responseData.children[i].data.subject,
					isSenderUser: responseData.children[i].data.isSenderUser,
					isReceiverUser: responseData.children[i].data.isReceiverUser,
				};
				messages.push(message);
			}
			context.commit('setSentMessages', messages);
			context.commit('before', before);
			context.commit('after', after);
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

	/**
	 * Make a request to send private message
	 * @action sendMessage=sentSuccessfully
	 * @param {object} payload An object contains baseurl, message info
	 * @returns {integer} status code
	 */
	async sendMessage(context, payload) {
		context.commit('sentSuccessfully', false);
		const newMessage = {
			text: payload.text,
			senderUsername: payload.senderUsername,
			receiverUsername: payload.receiverUsername,
			subject: payload.subject,
			isReply: payload.isReply,
			repliedMsgId: payload.repliedMsgId,
		};
		const baseurl = payload.baseurl;
		const accessToken = localStorage.getItem('accessToken');
		// const accessToken =
		// 	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzY4ZjI4ZTMxMWFmMTk0ZmQ2Mjg1YTQiLCJ1c2VybmFtZSI6InpleWFkdGFyZWtrIiwiaWF0IjoxNjY3ODIyMjIyfQ.TdmE3BaMI8rxQRoc7Ccm1dSAhfcyolyr0G-us7MObpQ';
		const response = await fetch(baseurl + '/message/compose', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`,
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

	/**
	 * Make a request to block user
	 * @action blockUser=blockSuccessfully
	 * @param {object} payload An object contains baseurl, username
	 * @returns {integer} status code
	 */
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

	/**
	 * Make a request to delete user
	 * @action deleteMessage=deleteMessageSuccessfully
	 * @param {object} payload An object contains baseurl, message id, message type
	 * @returns {integer} status code
	 */
	async deleteMessage(context, payload) {
		context.commit('deleteMessageSuccessfully', false);
		const baseurl = payload.baseurl;
		const accessToken = localStorage.getItem('accessToken');
		const del = {
			id: payload.id,
			type: payload.type,
		};

		const response = await fetch(baseurl + `/delete`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`,
			},
			body: JSON.stringify(del),
		});

		const responseData = await response.json();
		if (response.status == 200) {
			context.commit('deleteMessageSuccessfully', true);
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

	/**
	 * Make a request to spam user
	 * @action spamMessage=markSpamSuccessfully
	 * @param {object} payload An object contains baseurl, message id, message type, reason
	 * @returns {integer} status code
	 */
	async spamMessage(context, payload) {
		context.commit('markSpamSuccessfully', false);
		const spam = {
			id: payload.id,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/spam-message', {
			method: 'PATCH',
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

	/**
	 * Make a request to get suggested sender that can send message,
	 * @action loadSuggestedSender=setSuggestedSender
	 * @param {object} payload An object contains baseurl.
	 * @returns {integer} return an object contains all its data
	 */
	async loadSuggestedSender(context, payload) {
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/moderated-subreddits', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		});
		const responseData = await response.json();
		if (response.status == 200) {
			const suggests = [];

			for (let i = 0; i < responseData.children.length; i++) {
				const suggest = {
					title: responseData.children[i].title,
					picture: responseData.children[i].picture,
					members: responseData.children[i].members,
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

	/**
	 * Make a request to vote comment
	 * @action voteComment=votedSuccessfully
	 * @param {object} payload An object contains baseurl, vote id, message type, direction
	 * @returns {integer} status code
	 */
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

	/**
	 * Make a request to vote comment
	 * @action replyMessage=replyMessageSuccessfully
	 * @param {object} payload An object contains text, senderUsername, receiverUsername
	 * @returns {integer} status code
	 */
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

	async markAllReadMessage(_, payload) {
		const mark = {
			type: payload.type,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/read-all-msgs', {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(mark),
		});

		const responseData = await response.json();

		if (response.status == 400) {
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
};
