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
						type: 'Reddit',
						displayText: 'medo',
						link: '11',
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
					text: 'Twitter',
					imgSrc:
						'https://www.redditstatic.com/desktop2x/img/social-links/twitter.png',
					alt: '',
					type: 'username',
					baseUrl: 'https://twitter.com/',
				},
				{
					text: 'TikTok',
					imgSrc:
						'https://www.redditstatic.com/desktop2x/img/social-links/tiktok.png',
					alt: '',
					type: 'username',
					baseUrl: 'https://www.tiktok.com/@',
				},
				{
					text: 'Twitch',
					imgSrc:
						'https://www.redditstatic.com/desktop2x/img/social-links/twitch.png',
					alt: '',
					type: 'username',
					baseUrl: 'https://www.twitch.tv/',
				},
				{
					text: 'Facebook',
					imgSrc:
						'https://www.redditstatic.com/desktop2x/img/social-links/facebook.png',
					alt: '',
					type: 'link',
					placeholder: '',
					baseUrl: '',
				},
				{
					text: 'YouTube',
					imgSrc:
						'	https://www.redditstatic.com/desktop2x/img/social-links/youtube.png',
					alt: '',
					type: 'link',
					placeholder: '',
					baseUrl: '',
				},
			],
		};
	},
	mutations,
	actions,
	getters,
};
