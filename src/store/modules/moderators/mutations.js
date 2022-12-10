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

	//////////////BAN/////////////////

	banUserSuccessfully(state, payload) {
		state.banUserSuccessfully = payload;
	},
};
