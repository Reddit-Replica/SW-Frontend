import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
	namespaced: true,
	/**
	 * The Vuex 'MessagesState' object.
	 * @name MessagesState
	 * @type {object}
	 * @property {Object} inboxMessages contain all inbox messages information.
	 * @property {Object} unreadMessages contain all unread messages information.
	 * @property {Object} userMentions contain all user mentions information.
	 * @property {Object} postReplies contain all post repiles information.
	 * @property {Object} sentMessages contain all sent messages information.
	 * @property {Array} suggestedSender contain array of suggested senders
	 * @property {Boolean} sentSuccessfully This property is boolean if sent successfully.
	 * @property {Boolean} deleteMessageSuccessfully This property is boolean if delete message successfully.
	 * @property {Boolean} markSpamSuccessfully This property is boolean if mark spam successfully.
	 * @property {Boolean} blockSuccessfully This property is boolean if block successfully.
	 * @property {Boolean} votedSuccessfully This property is boolean if voted successfully.
	 * @property {Boolean} replyMessageSuccessfully This property is boolean if reply message successfully.
	 */
	state() {
		return {
			inboxMessages: [],
			unreadMessages: [],
			userMentions: [],
			userMessages: [],
			postReplies: [],
			sentMessages: [],
			suggestedSender: [],
			sentSuccessfully: false,
			deleteMessageSuccessfully: false,
			markSpamSuccessfully: false,
			spamCommentSuccessfully: false,
			blockSuccessfully: false,
			votedSuccessfully: false,
			replyMessageSuccessfully: false,
			after: '',
			before: '',
		};
	},
	mutations,
	actions,
	getters,
};
