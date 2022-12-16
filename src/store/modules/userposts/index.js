import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
export default {
	namespaced: true,
	/**
	 * The Vuex 'UserState' object.
	 * @module UserPostsState
	 * @type {object}
	 * @property {Object} postsData contain all user postsData Data.
	 */

	state() {
		return {
			postData: {
				after: 'string',
				before: 'string',
				children: [
					{
						id: 'string',
						data: {
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
					},
				],
			},
			insightsData: {
				totalViews: 0,
				upvoteRate: 0,
				communityKarma: 0,
				totalShares: 0,
			},
			commentData: {
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
			pinnedPostData: {
				Pinned_posts: [
					{
						id: 'The Post Title',
						kind: 'link',
						subreddit: 'medo_emad',
						link: 'www.google.com',
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
						title: 'The Post Title',
						sharePostId: 'string',
						flair: {
							id: 'string',
							flairName: 'string',
							order: 0,
							backgroundColor: 'string',
							textColor: 'string',
						},
						comments: 100,
						votes: 100,
						postedAt: 'string',
						postedBy: 'Abdel-hameed Emad',
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
