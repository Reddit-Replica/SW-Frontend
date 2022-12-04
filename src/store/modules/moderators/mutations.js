export default {
	setListOfModerators(state, payload) {
		state.listOfModerators = payload;
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
};
