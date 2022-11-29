export default {
	setListOfModerators(state, payload) {
		state.listOfModerators = payload;
	},
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
};
