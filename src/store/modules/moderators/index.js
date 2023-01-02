import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
	/**
	 * The Vuex 'Moderators' object.
	 * @name moderators
	 * @type {object}
	 * @property {Object} listOfSpams contain all Spam Posts and Comments.
	 * @property {Object} approveSuccessfully contain Post and Comments approve Successfully.
	 * @property {Object} Unmoderated contain all Unmoderated Posts and Comments.
	 * @property {Object} EditedComments contain Edited Comments.
	 * @property {Object} EditedPosts contain all Edited Posts.
	 * @property {Object} Removed contain all of Removed posts and comments.
	 */
	namespaced: true,
	/**
	 * The Vuex 'MessagesState' object.
	 * @name ModeratorsState
	 * @type {object}
	 * @property {Object} listOfModerators contain list of moderators information.
	 * @property {Object} listOfAllModerators contain all list of moderators information.
	 * @property {Object} listOfInvitedModerators contain list of invited moderators information.
	 * @property {String} handleTime contain handeled time.
	 * @property {String} after contain id of element after.
	 * @property {String} before contain id of element before.
	 * @property {Object} listOfApproved contain list of approved users information.
	 * @property {Boolean} approveUserSuccessfully This property is boolean if approved user successfully.
	 * @property {Boolean} removeApproveSuccessfully This property is boolean if reomoved user successfully.
	 * @property {Object} listOfMuted contain list of muted users information.
	 * @property {Boolean} muteUserSuccessfully This property is boolean if muted user successfully.
	 * @property {Boolean} unmuteUserSuccessfully This property is boolean if unmuted user successfully.
	 * @property {Boolean} leaveModSuccessfully This property is boolean if leave mod successfully.
	 * @property {Boolean} inviteModSuccessfully This property is boolean if invited mod successfully.
	 * @property {Boolean} cancelSuccessfully This property is boolean if canceled mod successfully.
	 * @property {Boolean} acceptSuccessfully This property is boolean if accepted mod successfully.
	 * @property {Object} listOfSpams contain list of spamed posts information.
	 * @property {Boolean} approveSuccessfully This property is boolean if approve post successfully.
	 * @property {Object} listOfRules contain list of rules in subreddit information.
	 * @property {Boolean} addRuleSuccessfully This property is boolean if added rules successfully.
	 * @property {Boolean} updateRuleSuccessfully This property is boolean if updated rules successfully.
	 * @property {Boolean} deleteRuleSuccessfully This property is boolean if deleted rules successfully.
	 * @property {Boolean} updateRulesSuccessfully This property is boolean if updated rules order successfully.
	 * @property {Object} listOfFlairs contain list of flairs in subreddit information.
	 * @property {Boolean} addFlairSuccessfully This property is boolean if added flair successfully.
	 * @property {Boolean} updateFlairSuccessfully This property is boolean if updated flair successfully.
	 * @property {Boolean} deleteFlairSuccessfully This property is boolean if deleted flair successfully.
	 * @property {Boolean} updateFlairsSuccessfully This property is boolean if updated flairs order successfully.
	 * @property {Boolean} banUserSuccessfully This property is boolean if banned user successfully.
	 * @property {Boolean} unBanUserSuccessfully This property is boolean if unban user successfully.
	 * @property {Object} listOfBanned contain list of banned user in subreddit information.
	 */
	state() {
		return {
			listOfModerators: [],
			listOfAllModerators: [],
			listOfInvitedModerators: [],
			handleTime: '',
			after: '',
			before: '',
			//////////////APPROVED/////////////
			listOfApproved: [],
			approveUserSuccessfully: false,
			removeApproveSuccessfully: false,
			//////////////MUTED/////////////
			listOfMuted: [],
			muteUserSuccessfully: false,
			unmuteUserSuccessfully: false,
			//////////////LEAVE MOD/////////////
			leaveModSuccessfully: false,
			//////////////INVITE MOD/////////////
			inviteModSuccessfully: false,
			cancelSuccessfully: false,
			acceptSuccessfully: false,
			//////////////SPAM/////////////////
			listOfSpams: [],
			approveSuccessfully: [],
			//////////////RULES/////////////////
			addRuleSuccessfully: false,
			listOfRules: [],
			updateRuleSuccessfully: false,
			deleteRuleSuccessfully: false,
			updateRulesSuccessfully: false,

			//////////////FLAIRS/////////////////
			listOfFlairs: [],
			addFlairSuccessfully: false,
			updateFlairSuccessfully: false,
			deleteFlairSuccessfully: false,
			updateFlairsSuccessfully: false,

			//////////////////////BAN////////////////////////
			banUserSuccessfully: false,
			unBanUserSuccessfully: false,
			listOfBanned: [],
			////////////////////////////Unmoderated/////////////
			Unmoderated: [],
			EditedPosts: [],
			EditedComments: [],
			Removed: '',
			//////////////traffic statas//////////////
			trafficStatus: null,
		};
	},
	mutations,
	actions,
	getters,
};
