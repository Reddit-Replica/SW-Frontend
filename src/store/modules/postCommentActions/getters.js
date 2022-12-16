export default {
	getCommentedUsers(state) {
		console.log(state.commentedUsers);
		return state.commentedUsers;
	},
	getActions(state) {
		console.log(state.actions);
		return state.actions;
	},
};
