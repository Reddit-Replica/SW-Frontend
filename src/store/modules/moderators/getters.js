/**
 * The module 'Moderators' object.
 * @name moderatorsGetters
 * @type {object}
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
