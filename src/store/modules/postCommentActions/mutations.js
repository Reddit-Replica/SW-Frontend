export default {
	setCommentedUsers(state, payload) {
		console.log(payload);
		state.commentedUsers = payload;
	},
};
