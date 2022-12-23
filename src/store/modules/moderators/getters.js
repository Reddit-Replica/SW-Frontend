/**
 * The module 'MessagesStore' object.
 * @name ModeratorsGetters
 * @type {object}
 * @getter {object} listOfModerators=listOfModerators Returns Object contain list all Of Moderators.
 * @getter {object} listOfAllModerators=listOfAllModerators Returns Object contain list all Of Moderators.
 * @getter {string} handleTime=handleTime Returns string contain handled time.
 * @getter {string} before=before Returns string contain befor.
 * @getter {string} after=after Returns string contain after.
 * @getter {object} listOfApproved=listOfApproved Returns Object contain list approved users.
 * @getter {boolean} approveUserSuccessfully=approveUserSuccessfully Returns boolean contain if approved user Successfully.
 * @getter {boolean} removeApproveSuccessfully=removeApproveSuccessfully Returns boolean contain if removed user Successfully.
 * @getter {object} listOfMuted=listOfMuted Returns Object contain list muted users.
 * @getter {boolean} muteUserSuccessfully=muteUserSuccessfully Returns boolean contain if mute user Successfully.
 * @getter {boolean} unmuteUserSuccessfully=unmuteUserSuccessfully Returns boolean contain if unmute user Successfully.
 * @getter {boolean} leaveModSuccessfully=leaveModSuccessfully Returns boolean contain if leave mod Successfully.
 * @getter {boolean} cancelSuccessfully=cancelSuccessfully Returns boolean contain if cancel mod Successfully.
 * @getter {boolean} inviteModSuccessfully=inviteModSuccessfully Returns boolean contain if invited mod Successfully.
 * @getter {boolean} acceptSuccessfully=acceptSuccessfully Returns boolean contain if accepted mod Successfully.
 * @getter {boolean} addRuleSuccessfully=addRuleSuccessfully Returns boolean contain if rules added Successfully.
 * @getter {object} listOfRules=listOfRules Returns Object contain list of rules in subreddit.
 * @getter {boolean} updateRuleSuccessfully=updateRuleSuccessfully Returns boolean contain if rule updated Successfully.
 * @getter {boolean} deleteRuleSuccessfully=deleteRuleSuccessfully Returns boolean contain if rule deleted Successfully.
 * @getter {boolean} updateRulesSuccessfully=updateRulesSuccessfully Returns boolean contain if rules order updated Successfully.
 * @getter {object} listOfFlairs=listOfFlairs Returns Object contain list of flairs in subreddit.
 * @getter {boolean} addFlairSuccessfully=addFlairSuccessfully Returns boolean contain if flair added Successfully.
 * @getter {boolean} updateFlairSuccessfully=updateFlairSuccessfully Returns boolean contain if flair updated Successfully.
 * @getter {boolean} deleteFlairSuccessfully=deleteFlairSuccessfully Returns boolean contain if flair deleted Successfully.
 * @getter {boolean} updateFlairsSuccessfully=updateFlairsSuccessfully Returns boolean contain if flairs order updated Successfully.
 * @getter {boolean} banUserSuccessfully=banUserSuccessfully Returns boolean contain if banned user Successfully.
 * @getter {boolean} unBanUserSuccessfully=unBanUserSuccessfully Returns boolean contain if unbann user Successfully.
 * @getter {object} listOfSpams=Spams Returns Object contain Spams.
 * @getter {object} approveSuccessfully=approvesSuccess Returns Object contain approvesSuccess Posts and Comments.
 * @getter {object} Unmoderated=Unmoderatedposts Returns Object contain Unmoderated posts and comments.
 * @getter {object} EditedPosts=EditedPosts Returns Object contain EditedPosts.
 * @getter {Object} EditedComments=EditedComments Returns object contain EditedComments.
 * @getter {object} Removed=Removed Returns Object contain Removed posts or comments.
 */
export default {
	listOfModerators(state) {
		return state.listOfModerators;
	},
	listOfAllModerators(state) {
		return state.listOfAllModerators;
	},
	listOfInvitedModerators(state) {
		return state.listOfInvitedModerators;
	},
	handleTime(state) {
		return state.handleTime;
	},
	before(state) {
		return state.before;
	},
	after(state) {
		return state.after;
	},
	/////////////////////APPROVED/////////////////////

	listOfApproved(state) {
		return state.listOfApproved;
	},
	approveUserSuccessfully(state) {
		return state.approveUserSuccessfully;
	},
	removeApproveSuccessfully(state) {
		return state.removeApproveSuccessfully;
	},

	/////////////////////MUTED/////////////////////

	listOfMuted(state) {
		return state.listOfMuted;
	},
	muteUserSuccessfully(state) {
		return state.muteUserSuccessfully;
	},
	unmuteUserSuccessfully(state) {
		return state.unmuteUserSuccessfully;
	},

	/////////////////////LEAVE MOD/////////////////////

	leaveModSuccessfully(state) {
		return state.leaveModSuccessfully;
	},
	cancelSuccessfully(state) {
		return state.cancelSuccessfully;
	},

	/////////////////////INVITE MOD/////////////////////

	inviteModSuccessfully(state) {
		return state.inviteModSuccessfully;
	},
	acceptSuccessfully(state) {
		return state.acceptSuccessfully;
	},
	//////////////////////SPAM////////////////////////

	listOfSpams(state) {
		return state.listOfSpams;
	},
	approveSuccessfully(state) {
		return state.approveSuccessfully;
	},

	//////////////////////RULES////////////////////////

	addRuleSuccessfully(state) {
		return state.addRuleSuccessfully;
	},
	listOfRules(state) {
		return state.listOfRules;
	},
	updateRuleSuccessfully(state) {
		return state.updateRuleSuccessfully;
	},
	deleteRuleSuccessfully(state) {
		return state.deleteRuleSuccessfully;
	},
	updateRulesSuccessfully(state) {
		return state.updateRulesSuccessfully;
	},

	//////////////////////FLAIR////////////////////////

	listOfFlairs(state) {
		return state.listOfFlairs;
	},
	addFlairSuccessfully(state) {
		return state.addFlairSuccessfully;
	},
	updateFlairSuccessfully(state) {
		return state.updateFlairSuccessfully;
	},
	deleteFlairSuccessfully(state) {
		return state.deleteFlairSuccessfully;
	},
	updateFlairsSuccessfully(state) {
		return state.updateFlairsSuccessfully;
	},

	//////////////////////BAN////////////////////////

	banUserSuccessfully(state) {
		return state.banUserSuccessfully;
	},
	unBanUserSuccessfully(state) {
		return state.unBanUserSuccessfully;
	},
	listOfBanned(state) {
		return state.listOfBanned;
	},
	//////////////////UnModerated///////////////////////
	Unmoderated(state) {
		return state.Unmoderated;
	},
	EditedPosts(state) {
		return state.EditedPosts;
	},
	EditedComments(state) {
		return state.EditedComments;
	},
	gettrafficStatus(state) {
		return state.trafficStatus;
	},
	Removed(state) {
		return state.Removed;
	},
};
