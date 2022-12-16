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
 * @mutator {object} sentSuccessfully=sentSuccessfully Sets the state boolean property.
 * @mutator {object} deleteMessageSuccessfully=deleteMessageSuccessfully Sets the state boolean property.
 * @mutator {object} markSpamSuccessfully=markSpamSuccessfully Sets the state boolean property.
 * @mutator {object} blockSuccessfully=blockSuccessfully Sets the state boolean property.
 * @mutator {object} votedSuccessfully=votedSuccessfully Sets the state boolean property.
 * @mutator {object} replyMessageSuccessfully=replyMessageSuccessfully Sets the state boolean property.
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
	setBefore(state, payload) {
		state.before = payload;
	},
	setAfter(state, payload) {
		state.after = payload;
	},
};
