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
		};
	},
	mutations,
	actions,
	getters,
};
