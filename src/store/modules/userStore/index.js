import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
	namespaced: true,
	state() {
		return {
			userData: {
				displayName: '',
				about: '',
				banner: '',
				picture: '',
				karma: 0,
				cakeDate: '2019-08-24',
				socialLinks: [
					{
						type: '',
						displayText: '',
						link: '',
					},
				],
				nsfw: true,
				followed: true,
				blocked: true,
				moderatorOf: [
					{
						subredditName: '',
						numOfMembers: 0,
						nsfw: true,
					},
				],
			},
		};
	},
	mutations,
	actions,
	getters,
};
