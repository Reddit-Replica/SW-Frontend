export default {
	setCommentedUsers(state, payload) {
		console.log(payload);
		state.commentedUsers = payload;
	},
	setAction(state, payload) {
		console.log(payload);
		state.actions.push(payload);
		setTimeout(() => {
			state.actions.shift();
		}, 10000);
	},
};
