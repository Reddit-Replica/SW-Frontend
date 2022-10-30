import { createStore } from 'vuex';
import authModule from './modules/authentication/index.js';
import commModule from './modules/communities/index.js';
const store = createStore({
	modules: {
		auth: authModule,
		community: commModule,
	},
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
