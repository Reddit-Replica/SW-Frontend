/**
 * The module 'setters' object.
 * @name MessagesMutations
 * @type {object}
 * @mutator {object} setInboxMessages=inboxMessages Sets the state object property.
 * @mutator {object} setUnreadMessages=unreadMessages Sets the state object property.
 * @mutator {object} setUserMentions=userMentions Sets the state object property.
 * @mutator {object} setUserMessages=userMessages Sets the state object property.
 * @mutator {object} setPostReplies=postReplies Sets the state object property.
 * @mutator {object} setSentMessages=sentMessages Sets the state object property.
 * @mutator {object} setSuggestedSender=suggestedSender Sets the state object property.
 * @mutator {boolean} sentSuccessfully=sentSuccessfully Sets the state boolean property.
 * @mutator {boolean} deleteMessageSuccessfully=deleteMessageSuccessfully Sets the state boolean property.
 * @mutator {boolean} markSpamSuccessfully=markSpamSuccessfully Sets the state boolean property.
 * @mutator {boolean} blockSuccessfully=blockSuccessfully Sets the state boolean property.
 * @mutator {boolean} votedSuccessfully=votedSuccessfully Sets the state boolean property.
 * @mutator {boolean} replyMessageSuccessfully=replyMessageSuccessfully Sets the state boolean property.
 * @mutator {boolean} addSuccessfully=addSuccessfully Sets the state boolean property.
 * @mutator {string} setAfter=setAfter Sets the state string property.
 */
export default {
	setInboxMessages(state, payload) {
		state.inboxMessages = payload;
	},
	setUnreadMessages(state, payload) {
		state.unreadMessages = payload;
	},
	setUserMentions(state, payload) {
		state.userMentions = payload;
	},
	setUserMessages(state, payload) {
		state.userMessages = payload;
	},
	setPostReplies(state, payload) {
		state.postReplies = payload;
	},
	setSentMessages(state, payload) {
		state.sentMessages = payload;
	},
	setSuggestedSender(state, payload) {
		state.suggestedSender = payload;
	},
	sentSuccessfully(state, payload) {
		state.sentSuccessfully = payload;
	},
	deleteMessageSuccessfully(state, payload) {
		state.deleteMessageSuccessfully = payload;
	},
	markSpamSuccessfully(state, payload) {
		state.markSpamSuccessfully = payload;
	},
	spamCommentSuccessfully(state, payload) {
		state.spamCommentSuccessfully = payload;
	},
	blockSuccessfully(state, payload) {
		state.blockSuccessfully = payload;
	},
	votedSuccessfully(state, payload) {
		state.votedSuccessfully = payload;
	},
	replyMessageSuccessfully(state, payload) {
		state.replyMessageSuccessfully = payload;
	},
	addSuccessfully(state, payload) {
		state.addSuccessfully = payload;
	},
	setAfter(state, payload) {
		state.after = payload;
	},
};
