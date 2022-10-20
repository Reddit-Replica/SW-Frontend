import { createStore } from 'vuex';

const store = createStore({
	modules: {},
	state() {
		return {
			userName: 'Abdelhameed_Emad',
		};
	},
	getters: {
		getUserName(state) {
			return state.userName;
		},
	},
});

export default store;
