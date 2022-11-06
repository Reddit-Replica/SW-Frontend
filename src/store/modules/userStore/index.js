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
			socialLinkItems: [
				{
					text: 'Custom URL' /* will be type from back end */,
					imgSrc:
						'https://www.redditstatic.com/desktop2x/img/social-links/custom.png',
					alt: 'custom url',
					type: 'link' /* link or username */,
					baseurl: '',
				},
				{
					text: 'Reddit',
					imgSrc:
						'https://www.redditstatic.com/desktop2x/img/social-links/reddit.png',
					alt: 'Reddit',
					type: 'username',
					baseUrl: 'https://www.reddit.com/',
				},
				{
					text: 'Instagram',
					imgSrc:
						'https://www.redditstatic.com/desktop2x/img/social-links/instagram.png',
					alt: '',
					type: 'username',
					baseUrl: 'https://www.instagram.com/',
				},
				{
					id: '4',
					text: 'Twitter',
					imgSrc:
						'https://www.redditstatic.com/desktop2x/img/social-links/twitter.png',
					alt: '',
					type: 'username',
					baseUrl: 'https://twitter.com/',
				},
			],
		};
	},
	mutations,
	actions,
	getters,
};
