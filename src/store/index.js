import { createStore } from 'vuex';
import authModule from './modules/authentication/index.js';
import commModule from './modules/communities/index.js';
import messageModule from './modules/messages/index.js';
import userModule from './modules/userStore/index.js';
const store = createStore({
	modules: {
		auth: authModule,
		community: commModule,
		messages: messageModule,
		user: userModule,
	},
});

export default store;
