import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
	namespaced: true,
	state() {
		return {
			displayedUserName: 'Abdelhameed_Emad',
			about: '',
			picture: '',
			karma: 0,
			cakeDay: {
				month: '',
				day: '',
				year: '',
			},
			socialLinK: [
				/* Data related to Social link section in profile  */
				{
					DisplayText: '' /* Displayed text of social link */,
					imgSrc: '' /* source of displayed image  */,
					toLink: '' /* redirect link */,
					type: '',
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
			UserProfileImage: '',
			UserProfileCover: ' ',
		};
	},
	mutations,
	actions,
	getters,
};
