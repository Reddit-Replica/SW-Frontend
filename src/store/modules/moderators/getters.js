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

	/////////////////////MUTED/////////////////////

	listOfMuted(state) {
		return state.listOfMuted;
	},
	muteUserSuccessfully(state) {
		return state.muteUserSuccessfully;
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
};
