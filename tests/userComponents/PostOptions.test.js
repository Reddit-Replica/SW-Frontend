import { shallowMount } from '@vue/test-utils';
import PostOptions from '../../src/components/UserComponents/BaseUserComponents/PostComponents/PostOptions.vue';
import Vuex from 'vuex';
import { describe, it, expect } from 'vitest';
describe('Post Options Bar', () => {
	let store = new Vuex.Store({
		modules: {
			userModule: {
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
				},
			},
		},
	});
	const postData = {
		after: 'string',
		before: 'string',

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
			comments: 100,
			votes: 1000,
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
	};
	const pinnedPostFlag = false;
	const state = 'user';
	//--------------------------------------------------------
	//                     Rendering
	//--------------------------------------------------------
	it('should renders if Post options content is correct', () => {
		const wrapper = shallowMount(PostOptions, {
			props: {
				postData,
				pinnedPostFlag,
				state,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		expect(wrapper.exists()).toBe(true);
	});

	//--------------------------------------------------------
	//                     Testing no Post options
	//--------------------------------------------------------
	it('check existence of approve button if inYourSubreddit is true i.e means that the user is moderator of post', () => {
		const wrapper = shallowMount(PostOptions, {
			props: {
				postData,
				pinnedPostFlag,
				state,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#approve-user-post-button');
		expect(byId.exists()).toBe(true);
	});
	it('check existence of remove button if inYourSubreddit is true i.e means that the user is moderator of post', () => {
		const wrapper = shallowMount(PostOptions, {
			props: {
				postData,
				pinnedPostFlag,
				state,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#remove-user-post-button');
		expect(byId.exists()).toBe(true);
	});
	it('check existence of spam button if inYourSubreddit is true i.e means that the user is moderator of post', () => {
		const wrapper = shallowMount(PostOptions, {
			props: {
				postData,
				pinnedPostFlag,
				state,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#spam-user-post-button');
		expect(byId.exists()).toBe(true);
	});
	it('check existence of mod button if inYourSubreddit is true i.e means that the user is moderator of post', () => {
		const wrapper = shallowMount(PostOptions, {
			props: {
				postData,
				pinnedPostFlag,
				state,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#shield-user-post-button');
		expect(byId.exists()).toBe(true);
	});
	it('check existence of three dot button if inYourSubreddit is true i.e means that the user is moderator of post', () => {
		const wrapper = shallowMount(PostOptions, {
			props: {
				postData,
				pinnedPostFlag,
				state,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find(
			'#post-options-icon-post-data-three-dot-icon-box'
		);
		expect(byId.exists()).toBe(true);
	});
	it('check at clicking on three dot button to show more options ', async () => {
		const wrapper = shallowMount(PostOptions, {
			props: {
				postData,
				pinnedPostFlag,
				state,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find(
			'#post-options-icon-post-data-three-dot-icon-box'
		);
		await byId.trigger('click');
		const byId2 = wrapper.find('#show-dots-options-BoxList');
		expect(byId2.exists()).toBe(true);
	});
	it('check at clicking on three dot button to show more options and contains more moderation options like lock comments ', async () => {
		const wrapper = shallowMount(PostOptions, {
			props: {
				postData,
				pinnedPostFlag,
				state,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find(
			'#post-options-icon-post-data-three-dot-icon-box'
		);
		await byId.trigger('click');
		const byId2 = wrapper.find('#show-dots-options-BoxList');
		const byId3 = wrapper.find('#lock-unlock-comments-post-data');
		expect(byId2.exists() && byId3.exists()).toBe(true);
	});
	it('check correct rendering the number of comments ', async () => {
		const wrapper = shallowMount(PostOptions, {
			props: {
				postData,
				pinnedPostFlag,
				state,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#post-options-postData-data-comments-text p');
		expect(byId.text()).toBe('100 comments');
	});
	it('check correct rendering the number of votes in k  ', async () => {
		const wrapper = shallowMount(PostOptions, {
			props: {
				postData,
				pinnedPostFlag,
				state,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#post-options-bottom-vote-down-clicked');
		expect(byId.text()).toBe('1k');
	});
	const postData3 = {
		after: 'string',
		before: 'string',

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
			comments: 100,
			votes: 1000000,
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
	};
	it('check correct rendering the number of votes in M  ', async () => {
		const wrapper = shallowMount(PostOptions, {
			props: {
				postData: postData3,
				pinnedPostFlag,
				state,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#post-options-bottom-vote-down-clicked');
		expect(byId.text()).toBe('1m');
	});

	const postData2 = {
		after: 'string',
		before: 'string',

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
	};
	it('check unexistence of approve button if inYourSubreddit is false i.e means that the user is not moderator of post', () => {
		const wrapper = shallowMount(PostOptions, {
			props: {
				postData: postData2,
				pinnedPostFlag,
				state,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#approve-user-post-button');
		expect(byId.exists()).toBe(false);
	});
	it('check unexistence of remove button if inYourSubreddit is false i.e means that the user is not moderator of post', () => {
		const wrapper = shallowMount(PostOptions, {
			props: {
				postData: postData2,
				pinnedPostFlag,
				state,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#remove-user-post-button');
		expect(byId.exists()).toBe(false);
	});
	it('check unexistence of spam button if inYourSubreddit is false i.e means that the user is not moderator of post', () => {
		const wrapper = shallowMount(PostOptions, {
			props: {
				postData: postData2,
				pinnedPostFlag,
				state,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#spam-user-post-button');
		expect(byId.exists()).toBe(false);
	});
	it('check existence of save button if inYourSubreddit is false i.e means that the user is not moderator of post', () => {
		const wrapper = shallowMount(PostOptions, {
			props: {
				postData,
				pinnedPostFlag,
				state,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#savepost-ann-user-user-post-button');
		expect(byId.exists()).toBe(true);
	});
	it('check existence of hide button if inYourSubreddit is false i.e means that the user is not moderator of post', () => {
		const wrapper = shallowMount(PostOptions, {
			props: {
				postData,
				pinnedPostFlag,
				state,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#savepost-ann-user-user-post-button');
		expect(byId.exists()).toBe(true);
	});
});
