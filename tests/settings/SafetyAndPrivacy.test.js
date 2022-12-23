import { shallowMount, mount } from '@vue/test-utils';
import PrivacySettings from '../../src/pages/settings/PrivacySettings.vue';
import Vuex from 'vuex';
import { describe, it, expect } from 'vitest';
import { vi } from 'vitest';
describe('Post Options Bar', () => {
	let store = new Vuex.Store({
		modules: {
			user: {
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
				},
				getters: {
					getBlockedUsersData() {
						return {
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
						};
					},
				},
			},
		},
	});
	//--------------------------------------------------------
	//                     Rendering
	//--------------------------------------------------------
	it('should renders if TheInsights content is correct', () => {
		const wrapper = mount(PrivacySettings, {
			created() {
				getMoment: vi.fn();
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
	//                     Testing no Moderation title
	//--------------------------------------------------------
	it('should renders if TheInsights content is correct', () => {
		const wrapper = mount(PrivacySettings, {
			created() {
				getMoment: vi.fn();
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('.h2-main-title');
		expect(byId.text()).toBe('Safety & Privacy');
		// expect(wrapper.exists()).toBe(true);
	});
});
