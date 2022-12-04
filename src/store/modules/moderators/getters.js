export default {
	listOfModerators(state) {
		return state.listOfModerators;
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
};
