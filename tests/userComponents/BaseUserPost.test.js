import { shallowMount } from '@vue/test-utils';
import BaseUserPost from '../../src/components/UserComponents/BaseUserComponents/BaseUserPost.vue';
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
	it('should renders if BaseUserPost content is correct', () => {
		const wrapper = shallowMount(BaseUserPost, {
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
});
