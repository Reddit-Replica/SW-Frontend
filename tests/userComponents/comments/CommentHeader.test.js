import { shallowMount, mount } from '@vue/test-utils';
import CommentHeader from '../../../src/components/UserComponents/BaseUserComponents/CommentsComponents/CommentHeader.vue';
import Vuex from 'vuex';
import { describe, it, expect } from 'vitest';
describe('Post Options Bar', () => {
	let store = new Vuex.Store({
		modules: {
			userpostsModule: {
				namespaced: true,
				state: {
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
							imgSrc: 'img',
							alt: 'custom url',
							type: 'link' /* link or username */,
							baseurl: '',
						},
					],
				},
			},
		},
	});
	const getInsightsData = {
		totalViews: 120,
		upvoteRate: 50,
		communityKarma: 30,
		totalShares: 20,
	};
	//--------------------------------------------------------
	//                     Rendering
	//--------------------------------------------------------
	it('should renders if CommentHeader content is correct', () => {
		const wrapper = mount(CommentHeader, {
			props: {
				commentData: {
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
					},
				},
			},
			data() {
				return { getInsightsData };
			},
			global: {
				// OR:
				mocks: {
					$store: store,
					$route: {
						params: {
							userName: 'ff',
						},
					},
				},
			},
		});
		expect(wrapper.exists()).toBe(true);
	});

	//--------------------------------------------------------
	//                     Testing no Moderation title
	//--------------------------------------------------------
	it('checking correct rendering the user comment name', () => {
		const wrapper = mount(CommentHeader, {
			props: {
				commentData: {
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
					},
				},
			},
			data() {
				return { getInsightsData };
			},
			global: {
				// OR:
				mocks: {
					$store: store,
					$route: {
						params: {
							userName: 'Abdo',
						},
					},
				},
			},
		});
		const byId = wrapper.find('#comment-header-user-comment-name router-link');
		expect(byId.text()).toBe('Abdo');
	});
	it('checking correct rendering the flair name', () => {
		const wrapper = mount(CommentHeader, {
			props: {
				commentData: {
					id: 'string',
					data: {
						post: {
							kind: 'link',
							title: 'Test Post Title',
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
								id: 'flair id',
								flairName: 'test flair name',
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
				},
			},
			data() {
				return { getInsightsData };
			},
			global: {
				// OR:
				mocks: {
					$store: store,
					$route: {
						params: {
							userName: 'Abdo',
						},
					},
				},
			},
		});
		const byId = wrapper.find('#comment-header-post-status-flair');
		expect(byId.text()).toBe('test flair name');
	});
	it('checking correct rendering the subreddit name', () => {
		const wrapper = mount(CommentHeader, {
			props: {
				commentData: {
					id: 'string',
					data: {
						post: {
							kind: 'link',
							title: 'Test Post Title',
							subreddit: 'test subreddit name',
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
								id: 'flair id',
								flairName: 'test flair name',
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
				},
			},
			data() {
				return { getInsightsData };
			},
			global: {
				// OR:
				mocks: {
					$store: store,
					$route: {
						params: {
							userName: 'Abdo',
						},
					},
				},
			},
		});
		const byId = wrapper.find('#comment-header-post-status-subreddit-name');
		expect(byId.text()).toBe('r/test subreddit name');
	});
	it('checking correct rendering the posted by name', () => {
		const wrapper = mount(CommentHeader, {
			props: {
				commentData: {
					id: 'string',
					data: {
						post: {
							kind: 'link',
							title: 'Test Post Title',
							subreddit: 'test subreddit name',
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
								id: 'flair id',
								flairName: 'test flair name',
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
							postedBy: 'mohamed',
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
				},
			},
			data() {
				return { getInsightsData };
			},
			global: {
				// OR:
				mocks: {
					$store: store,
					$route: {
						params: {
							userName: 'Abdo',
						},
					},
				},
			},
		});
		const byId = wrapper.find('#comment-header-post-status-posted-by');
		expect(byId.text().includes('mohamed')).toBe(true);
	});
	it('checking correct rendering the nsfw ', () => {
		const wrapper = mount(CommentHeader, {
			props: {
				commentData: {
					id: 'string',
					data: {
						post: {
							kind: 'link',
							title: 'Test Post Title',
							subreddit: 'test subreddit name',
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
								id: 'flair id',
								flairName: 'test flair name',
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
							postedBy: 'mohamed',
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
				},
			},
			data() {
				return { getInsightsData };
			},
			global: {
				// OR:
				mocks: {
					$store: store,
					$route: {
						params: {
							userName: 'Abdo',
						},
					},
				},
			},
		});
		const byId = wrapper.find('#comment-header-post-status-post-nsfw');
		expect(byId.exists()).toBe(true);
	});
	it('checking correct rendering the spoiler ', () => {
		const wrapper = mount(CommentHeader, {
			props: {
				commentData: {
					id: 'string',
					data: {
						post: {
							kind: 'link',
							title: 'Test Post Title',
							subreddit: 'test subreddit name',
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
								id: 'flair id',
								flairName: 'test flair name',
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
							postedBy: 'mohamed',
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
				},
			},
			data() {
				return { getInsightsData };
			},
			global: {
				// OR:
				mocks: {
					$store: store,
					$route: {
						params: {
							userName: 'Abdo',
						},
					},
				},
			},
		});
		const byId = wrapper.find('#comment-header-post-post-spoiler');
		expect(byId.exists()).toBe(true);
	});
	it('checking correct rendering the spoiler when its flag is false shoud not be exist', () => {
		const wrapper = mount(CommentHeader, {
			props: {
				commentData: {
					id: 'string',
					data: {
						post: {
							kind: 'link',
							title: 'Test Post Title',
							subreddit: 'test subreddit name',
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
							spoiler: false,
							sharePostId: 'string',
							flair: {
								id: 'flair id',
								flairName: 'test flair name',
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
							postedBy: 'mohamed',
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
				},
			},
			data() {
				return { getInsightsData };
			},
			global: {
				// OR:
				mocks: {
					$store: store,
					$route: {
						params: {
							userName: 'Abdo',
						},
					},
				},
			},
		});
		const byId = wrapper.find('#comment-header-post-post-spoiler');
		expect(byId.exists()).toBe(false);
	});
});
