import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
	namespaced: true,
	/**
	 * The Vuex 'UserState' object.
	 * @name UserState
	 * @type {object}
	 * @property {Object} userData contain all user information DiasplayedName,about,banner.. .
	 * @property {Array} SocialLinksItems contain array of static social links items data (picture,text,imgSrc,type).
	 * @property {Object} numProp This property is a number.
	 */
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
					text: 'Custom URL',
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
					baseUrl: '',
				},
				{
					text: 'YouTube',
					imgSrc:
						'	https://www.redditstatic.com/desktop2x/img/social-links/youtube.png',
					alt: '',
					type: 'link',
					baseUrl: '',
				},
				{
					text: 'Tumblr',
					imgSrc:
						'	https://www.redditstatic.com/desktop2x/img/social-links/tumblr.png',
					alt: '',
					type: 'username',
					baseUrl: '',
				},
				{
					text: 'Spotify',
					imgSrc:
						'	https://www.redditstatic.com/desktop2x/img/social-links/spotify.png',
					alt: '',
					type: 'link',
					baseUrl: '',
				},
				{
					text: 'SoundCloud',
					imgSrc:
						'	https://www.redditstatic.com/desktop2x/img/social-links/soundcloud.png',
					alt: '',
					type: 'username',
					baseUrl: '',
				},
				{
					text: 'Beacons',
					imgSrc:
						'	https://www.redditstatic.com/desktop2x/img/social-links/beacons.png',
					alt: '',
					type: 'username',
					baseUrl: '',
				},
				{
					text: 'Linktree',
					imgSrc:
						'	https://www.redditstatic.com/desktop2x/img/social-links/linktree.png',
					alt: '',
					type: 'username',
					baseUrl: '',
				},
				{
					text: 'Discord',
					imgSrc:
						'	https://www.redditstatic.com/desktop2x/img/social-links/discord.png',
					alt: '',
					type: 'link',
					baseUrl: '',
				},
				{
					text: 'Venmo',
					imgSrc:
						'	https://www.redditstatic.com/desktop2x/img/social-links/venmo.png',
					alt: '',
					type: 'username',
					baseUrl: '',
				},
				{
					text: 'Cash App',
					imgSrc:
						'	https://www.redditstatic.com/desktop2x/img/social-links/cash_app.png',
					alt: '',
					type: 'link',
					baseUrl: '',
				},
				{
					text: 'Patreon',
					imgSrc:
						'https://www.redditstatic.com/desktop2x/img/social-links/patreon.png',
					alt: '',
					type: 'username',
					baseUrl: '',
				},
				{
					text: 'Kofi',
					imgSrc:
						'	https://www.redditstatic.com/desktop2x/img/social-links/kofi.png',
					alt: '',
					type: 'username',
					baseUrl: '',
				},
				{
					text: 'PayPal',
					imgSrc:
						'https://www.redditstatic.com/desktop2x/img/social-links/paypal.png',
					alt: '',
					type: 'username',
					baseUrl: '',
				},
				{
					text: 'Cameo',
					imgSrc:
						'	https://www.redditstatic.com/desktop2x/img/social-links/cameo.png',
					alt: '',
					type: 'username',
					baseUrl: '',
				},
				{
					text: 'OnlyFans',
					imgSrc:
						'	https://www.redditstatic.com/desktop2x/img/social-links/onlyfans.png',
					alt: '',
					type: 'link',
					baseUrl: '',
				},
				{
					text: 'Substack',
					imgSrc:
						'	https://www.redditstatic.com/desktop2x/img/social-links/substack.png',
					alt: '',
					type: 'link',
					baseUrl: '',
				},
				{
					text: 'Kickstarter',
					imgSrc:
						'	https://www.redditstatic.com/desktop2x/img/social-links/kickstarter.png',
					alt: '',
					type: 'link',
					baseUrl: '',
				},
				{
					text: 'Buy Me a Coffee',
					imgSrc:
						'	https://www.redditstatic.com/desktop2x/img/social-links/buy_me_a_coffee.png',
					alt: '',
					type: 'username',
					baseUrl: '',
				},
				{
					text: 'Shopify',
					imgSrc:
						'	https://www.redditstatic.com/desktop2x/img/social-links/shopify.png',
					alt: '',
					type: 'link',
					baseUrl: '',
				},
			],
			postData: {
				after: 'string',
				before: 'string',
				children: [
					{
						kind: 'image',
						subreddit: 'string',
						content: 'string',
						images: [
							{
								path: 'string',
								caption: 'string',
								link: 'string',
							},
						],
						nsfw: true,
						spoiler: true,
						title: 'string',
						sharePostId: 'string',
						flair: {
							id: 'string',
							flairName: 'meta',
							order: 0,
							backgroundColor: 'rgb(100, 109, 115)',
							textColor: 'rgb(255, 255, 255)',
						},
						comments: 0,
						votes: 0,
						postedAt: 'string',
						deletedAt: 'string',
						editedAt: 'string',
						postedBy: 'string',
						votingType: 1,
						saved: false,
						followed: false,
						hidden: false,
						spammed: false,
						inYourSubreddit: false,
						moderation: {
							approve: {
								approvedBy: 'string',
								approvedDate: '2019-08-24T14:15:22Z',
							},
							remove: {
								removedBy: 'string',
								removedDate: '2019-08-24T14:15:22Z',
							},
							spam: {
								spammedBy: 'string',
								spammedDate: '2019-08-24T14:15:22Z',
							},
							lock: true,
						},
					},
				],
			},
		};
	},
	mutations,
	actions,
	getters,
};
