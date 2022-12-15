import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
import img1 from '../../../../img/sociallinks/custom.png';
export default {
	namespaced: true,
	/**
	 * The Vuex 'UserState' object.
	 * @module UserState
	 * @type {object}
	 * @property {Object} userData contain all user information DiasplayedName,about,banner.. .
	 * @property {Array} SocialLinksItems contain array of static social links items data (picture,text,imgSrc,type).
	 * @property {Object} blockedUsersData contain all blocked users Data.
	 * @property {Object} commentsData contain all user comments Data.
	 */
	state() {
		return {
			listOfSubreddits: [],
			after: '',
			before: '',
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
					imgSrc: img1,
					alt: 'custom url',
					type: 'link' /* link or username */,
					baseurl: '',
				},
				{
					text: 'Reddit',
					imgSrc: require('../../../../img/sociallinks/reddit.png'),
					alt: 'Reddit',
					type: 'username',
					baseUrl: 'https://www.reddit.com/',
				},
				{
					text: 'Instagram',
					imgSrc: require('../../../../img/sociallinks/instagram.png'),
					alt: '',
					type: 'username',
					baseUrl: 'https://www.instagram.com/',
				},
				{
					text: 'Twitter',
					imgSrc: require('../../../../img/sociallinks/twitter.png'),
					alt: '',
					type: 'username',
					baseUrl: 'https://twitter.com/',
				},
				{
					text: 'TikTok',
					imgSrc: require('../../../../img/sociallinks/tiktok.png'),
					alt: '',
					type: 'username',
					baseUrl: 'https://www.tiktok.com/@',
				},
				{
					text: 'Twitch',
					imgSrc: require('../../../../img/sociallinks/twitch.png'),
					alt: '',
					type: 'username',
					baseUrl: 'https://www.twitch.tv/',
				},
				{
					text: 'Facebook',
					imgSrc: require('../../../../img/sociallinks/facebook.png'),
					alt: '',
					type: 'link',
					baseUrl: '',
				},
				{
					text: 'YouTube',
					imgSrc: require('../../../../img/sociallinks/youtube.png'),
					alt: '',
					type: 'link',
					baseUrl: '',
				},
				{
					text: 'Tumblr',
					imgSrc: require('../../../../img/sociallinks/tumblr.png'),
					alt: '',
					type: 'username',
					baseUrl: '',
				},
				{
					text: 'Spotify',
					imgSrc: require('../../../../img/sociallinks/spotify.png'),
					alt: '',
					type: 'link',
					baseUrl: '',
				},
				{
					text: 'SoundCloud',
					imgSrc: require('../../../../img/sociallinks/soundcloud.png'),
					alt: '',
					type: 'username',
					baseUrl: '',
				},
				{
					text: 'Beacons',
					imgSrc: require('../../../../img/sociallinks/beacons.png'),
					alt: '',
					type: 'username',
					baseUrl: '',
				},
				{
					text: 'Linktree',
					imgSrc: require('../../../../img/sociallinks/linktree.png'),
					alt: '',
					type: 'username',
					baseUrl: '',
				},
				{
					text: 'Discord',
					imgSrc: require('../../../../img/sociallinks/discord.png'),
					alt: '',
					type: 'link',
					baseUrl: '',
				},
				{
					text: 'Venmo',
					imgSrc: require('../../../../img/sociallinks/venmo.png'),
					alt: '',
					type: 'username',
					baseUrl: '',
				},
				{
					text: 'Cash App',
					imgSrc: require('../../../../img/sociallinks/cash_app.png'),
					alt: '',
					type: 'link',
					baseUrl: '',
				},
				{
					text: 'Patreon',
					imgSrc: require('../../../../img/sociallinks/patreon.png'),
					alt: '',
					type: 'username',
					baseUrl: '',
				},
				{
					text: 'Kofi',
					imgSrc: require('../../../../img/sociallinks/kofi.png'),
					alt: '',
					type: 'username',
					baseUrl: '',
				},
				{
					text: 'PayPal',
					imgSrc: require('../../../../img/sociallinks/paypal.png'),
					alt: '',
					type: 'username',
					baseUrl: '',
				},
				{
					text: 'Cameo',
					imgSrc: require('../../../../img/sociallinks/cameo.png'),
					alt: '',
					type: 'username',
					baseUrl: '',
				},
				{
					text: 'OnlyFans',
					imgSrc: require('../../../../img/sociallinks/onlyfans.png'),
					alt: '',
					type: 'link',
					baseUrl: '',
				},
				{
					text: 'Substack',
					imgSrc: require('../../../../img/sociallinks/substack.png'),
					alt: '',
					type: 'link',
					baseUrl: '',
				},
				{
					text: 'Kickstarter',
					imgSrc: require('../../../../img/sociallinks/kickstarter.png'),
					alt: '',
					type: 'link',
					baseUrl: '',
				},
				{
					text: 'Buy Me a Coffee',
					imgSrc: require('../../../../img/sociallinks/buy_me_a_coffee.png'),
					alt: '',
					type: 'username',
					baseUrl: '',
				},
				{
					text: 'Shopify',
					imgSrc: require('../../../../img/sociallinks/shopify.png'),
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
			commentsData: {
				before: 'string',
				after: 'string',
				children: [
					{
						id: 'string',
						data: {
							post: {
								kind: 'link',
								title: 'string',
								subreddit: 'string',
								link: 'string',
								images: [
									{
										path: 'string',
										caption: 'string',
										link: 'string',
									},
								],
								video: 'string',
								content: {},
								nsfw: true,
								spoiler: true,
								sharePostId: 'string',
								flair: {
									id: 'string',
									flairName: 'string',
									order: 0,
									backgroundColor: 'string',
									textColor: 'string',
								},
								comments: 0,
								votes: 0,
								postedAt: 'string',
								sendReplies: true,
								markedSpam: true,
								suggestedSort: 'string',
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
							comments: [
								{
									commentId: 'string',
									commentedBy: 'string',
									commentBody: null,
									points: 0,
									publishTime: '2019-08-24T14:15:22Z',
									editTime: '2019-08-24T14:15:22Z',
									parent: 'string',
									level: 2,
									inYourSubreddit: true,
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
					},
				],
			},
			blockedUsersData: {
				before: 'string',
				after: 'string',
				children: [
					{
						id: 'string',
						data: {
							username: 'string',
							blockDate: '2019-08-24T14:15:22Z',
							userImage:
								'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png',
						},
					},
				],
			},
			overviewData: {
				before: 'string',
				after: 'string',
				children: [
					{
						id: 'string',
						type: 'fullPost',
						data: {
							post: {
								id: 'string',
								kind: 'link',
								title: 'string',
								subreddit: 'string',
								link: 'string',
								images: [
									{
										path: 'string',
										caption: 'string',
										link: 'string',
									},
								],
								video: 'string',
								content: {},
								nsfw: true,
								spoiler: true,
								sharePostId: 'string',
								flair: {
									id: 'string',
									flairName: 'string',
									order: 0,
									backgroundColor: 'string',
									textColor: 'string',
								},
								comments: 0,
								votes: 0,
								postedAt: 'string',
								sendReplies: true,
								markedSpam: true,
								suggestedSort: 'string',
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
							comments: [
								{
									commentId: 'string',
									commentedBy: 'string',
									commentBody: null,
									points: 0,
									publishTime: '2019-08-24T14:15:22Z',
									editTime: '2019-08-24T14:15:22Z',
									parent: {
										commentId: 'string',
										commentedBy: 'string',
										commentBody: null,
										points: 0,
										publishTime: '2019-08-24T14:15:22Z',
										editTime: '2019-08-24T14:15:22Z',
									},
									level: 0,
									inYourSubreddit: true,
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
					},
				],
			},
			savedData: {
				before: 'string',
				after: 'string',
				children: [
					{
						id: 'string',
						type: 'fullPost',
						data: {
							post: {
								id: 'string',
								kind: 'link',
								title: 'string',
								subreddit: 'string',
								link: 'string',
								images: [
									{
										path: 'string',
										caption: 'string',
										link: 'string',
									},
								],
								video: 'string',
								content: {},
								nsfw: true,
								spoiler: true,
								sharePostId: 'string',
								flair: {
									id: 'string',
									flairName: 'string',
									order: 0,
									backgroundColor: 'string',
									textColor: 'string',
								},
								comments: 0,
								votes: 0,
								postedAt: 'string',
								sendReplies: true,
								markedSpam: true,
								suggestedSort: 'string',
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
							comments: [
								{
									commentId: 'string',
									commentedBy: 'string',
									commentBody: null,
									points: 0,
									publishTime: '2019-08-24T14:15:22Z',
									editTime: '2019-08-24T14:15:22Z',
									parent: {
										commentId: 'string',
										commentedBy: 'string',
										commentBody: null,
										points: 0,
										publishTime: '2019-08-24T14:15:22Z',
										editTime: '2019-08-24T14:15:22Z',
									},
									level: 0,
									inYourSubreddit: true,
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
					},
				],
			},
		};
	},
	mutations,
	actions,
	getters,
};
