/**
 * The module 'MessagesStore' object.
 * @name MessagesGetters
 * @type {object}
 * @getter {object} inboxMessages=inboxMessages Returns Object contain inboxMessages.
 * @getter {object} unreadMessages=unreadMessages Returns Object contain unreadMessages.
 * @getter {object} userMentions=userMentions Returns Object contain userMentions.
 * @getter {object} userMessages=userMessages Returns Object contain userMessages.
 * @getter {object} postReplies=postReplies Returns Object contain postReplies.
 * @getter {object} sentMessages=sentMessages Returns Object contain sentMessages.
 * @getter {object} suggestedSender=suggestedSender Returns Object contain suggestedSender.
 * @getter {boolean} sentSuccessfully=sentSuccessfully Returns boolean contain if sent Successfully.
 * @getter {boolean} deleteMessageSuccessfully=deleteMessageSuccessfully Returns boolean contain if delete Message Successfully.
 * @getter {boolean} markSpamSuccessfully=markSpamSuccessfully Returns boolean contain if mark Spam Successfully.
 * @getter {boolean} blockSuccessfully=blockSuccessfully Returns boolean contain if block Successfully.
 * @getter {boolean} votedSuccessfully=votedSuccessfully Returns boolean contain if voted Successfully.
 * @getter {boolean} replyMessageSuccessfully=replyMessageSuccessfully Returns boolean contain if reply Message Successfully.
 */

export default {
	inboxMessages(state) {
		return state.inboxMessages;
	},
	unreadMessages(state) {
		return state.unreadMessages;
	},
	userMentions(state) {
		return state.userMentions;
	},
	userMessages(state) {
		return state.userMessages;
	},
	postReplies(state) {
		return state.postReplies;
	},
	sentMessages(state) {
		return state.sentMessages;
	},
	suggestedSender(state) {
		return state.suggestedSender;
	},
	sentSuccessfully(state) {
		return state.sentSuccessfully;
	},
	deleteMessageSuccessfully(state) {
		console.log(state.deleteMessageSuccessfully);
		return state.deleteMessageSuccessfully;
	},
	markSpamSuccessfully(state) {
		return state.markSpamSuccessfully;
	},
	blockSuccessfully(state) {
		return state.blockSuccessfully;
	},
	votedSuccessfully(state) {
		return state.votedSuccessfully;
	},
	replyMessageSuccessfully(state) {
		return state.replyMessageSuccessfully;
	},
	before(state) {
		return state.before;
	},
	after(state) {
		return state.after;
	},
};
