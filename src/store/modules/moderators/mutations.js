/**
 * The module 'setters' object.
 * @name ModeratorsMutations
 * @type {object}
 * @mutator {object} setListOfSpams=Spams Sets the state object property.
 * @mutator {object} approveSuccessfully=approveSuccessfully Sets the state object property.
 * @mutator {object} setUnmoderated=Unmoderated Sets the state object property.
 * @mutator {object} setEditedPosts=EditedPosts Sets the state object property.
 * @mutator {object} setEditedComments=EditedComments Sets the state object property.
 * @mutator {Object} setRemoved=Removed Sets the state object property.
 */
export default {
	setListOfModerators(state, payload) {
		state.listOfModerators = payload;
	},
	setListOfAllModerators(state, payload) {
		state.listOfAllModerators = payload;
	},
	setBefore(state, payload) {
		state.before = payload;
	},
	setAfter(state, payload) {
		state.after = payload;
	},
	setListOfInvitedModerators(state, payload) {
		state.listOfInvitedModerators = payload;
	},
	setHandleTime(state, payload) {
		state.handleTime = payload;
	},

	//////////////APPROVED/////////////

	setListOfApproved(state, payload) {
		state.listOfApproved = payload;
	},
	approveUserSuccessfully(state, payload) {
		state.approveUserSuccessfully = payload;
	},
	removeApproveSuccessfully(state, payload) {
		state.removeApproveSuccessfully = payload;
	},

	//////////////MUTED/////////////

	setListOfMuted(state, payload) {
		state.listOfMuted = payload;
	},
	muteUserSuccessfully(state, payload) {
		state.muteUserSuccessfully = payload;
	},
	unmuteUserSuccessfully(state, payload) {
		state.unmuteUserSuccessfully = payload;
	},

	//////////////LEAVE MOD/////////////

	leaveModSuccessfully(state, payload) {
		state.leaveModSuccessfully = payload;
	},

	//////////////INVITE MOD/////////////

	inviteModSuccessfully(state, payload) {
		state.inviteModSuccessfully = payload;
	},
	cancelSuccessfully(state, payload) {
		state.cancelSuccessfully = payload;
	},
	acceptSuccessfully(state, payload) {
		state.acceptSuccessfully = payload;
	},

	//////////////SPAM/////////////////
	setListOfSpams(state, payload) {
		state.listOfSpams = payload;
	},
	approveSuccessfully(state, payload) {
		state.approveSuccessfully = payload;
	},

	//////////////RULES/////////////////

	addRuleSuccessfully(state, payload) {
		state.addRuleSuccessfully = payload;
	},
	setListOfRules(state, payload) {
		state.listOfRules = payload;
	},
	updateRuleSuccessfully(state, payload) {
		state.updateRuleSuccessfully = payload;
	},
	deleteRuleSuccessfully(state, payload) {
		state.deleteRuleSuccessfully = payload;
	},
	updateRulesSuccessfully(state, payload) {
		state.updateRulesSuccessfully = payload;
	},

	//////////////FLAIRS/////////////////

	setListOfFlairs(state, payload) {
		state.listOfFlairs = payload;
	},
	addFlairSuccessfully(state, payload) {
		state.addFlairSuccessfully = payload;
	},
	updateFlairSuccessfully(state, payload) {
		state.updateFlairSuccessfully = payload;
	},
	deleteFlairSuccessfully(state, payload) {
		state.deleteFlairSuccessfully = payload;
	},
	updateFlairsSuccessfully(state, payload) {
		state.updateFlairsSuccessfully = payload;
	},

	//////////////BAN/////////////////

	banUserSuccessfully(state, payload) {
		state.banUserSuccessfully = payload;
	},
	unBanUserSuccessfully(state, payload) {
		state.unBanUserSuccessfully = payload;
	},
	setListOfBanned(state, payload) {
		state.listOfBanned = payload;
	},
	//////////////////////Unmoderated////////
	setUnmoderated(state, payload) {
		state.Unmoderated = payload;
	},
	setEditedPosts(state, payload) {
		state.EditedPosts = payload;
	},
	setEditedComments(state, payload) {
		state.EditedComments = payload;
	},
	settrafficStatus(state, payload) {
		state.trafficStatus = payload;
	},
	setRemoved(state, payload) {
		state.Removed = payload;
	},
};
