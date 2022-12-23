import { shallowMount, mount } from '@vue/test-utils';
import TheInsights from '../../src/components/UserComponents/BaseUserComponents/PostComponents/TheInsights.vue';
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
	it('should renders if TheInsights content is correct', () => {
		const wrapper = mount(TheInsights, {
			props: {
				id: '5656',
			},
			created() {
				this.getInsightsData = {
					totalViews: 120,
					upvoteRate: 50,
					communityKarma: 30,
					totalShares: 20,
				};
			},
			data() {
				return { getInsightsData };
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
	it('check rendering correct upvoteRate of total views', () => {
		const wrapper = mount(TheInsights, {
			props: {
				id: '5656',
			},
			created() {
				this.getInsightsData = {
					totalViews: 120,
					upvoteRate: 50,
					communityKarma: 30,
					totalShares: 20,
				};
			},
			data() {
				return { getInsightsData };
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find(
			'#base-user-data-post-insights-getInsights-Data-upvoteRate'
		);
		expect(byId.text()).toBe('50%');
	});
	it('check rendering correct community karma of total views', () => {
		const wrapper = mount(TheInsights, {
			props: {
				id: '5656',
			},
			created() {
				this.getInsightsData = {
					totalViews: 120,
					upvoteRate: 50,
					communityKarma: 30,
					totalShares: 20,
				};
			},
			data() {
				return { getInsightsData };
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find(
			'#base-user-data-post-insights-getInsightsData-communityKarma'
		);
		expect(byId.text()).toBe('30');
	});
	it('check rendering correct total shares of total views', () => {
		const wrapper = mount(TheInsights, {
			props: {
				id: '5656',
			},
			created() {
				this.getInsightsData = {
					totalViews: 120,
					upvoteRate: 50,
					communityKarma: 30,
					totalShares: 20,
				};
			},
			data() {
				return { getInsightsData };
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find(
			'#base-user-data-post-insights-getInsightsData-totalShares'
		);
		expect(byId.text()).toBe('20');
	});
});
