import { mount } from '@vue/test-utils';
import TopCommunity from '../../src/components/TopCommunities/TopCommunity.vue';
import Vuex from 'vuex';
import { describe, it, expect, vi } from 'vitest';
describe('TopCommunity', () => {
	const index = 0;
	const image = null;
	const name = 'hello';
	const id = 'hello';
	const members = 25000;
	const showMembers = false;
	const isMember = true;
	const membersCount = '25 k';
	const noImage = true;

	const mockRouter = {
		push: vi.fn(),
		replace: vi.fn(),
	};

	const topcommAction = {
		getAllCommunities: vi.fn(),
		getCategoryCommunities: vi.fn(),
		getTwoCommunities: vi.fn(),
		getTrendingCommunities: vi.fn(),
		getSuggestedCommunity: vi.fn(),
	};

	let store = new Vuex.Store({
		modules: {
			topCommModule: {
				namespaced: true,
				state: {
					allCommunities: [],
					categoryCommunities: [],
					secondCategory: '',
					firstCategory: '',
					secondCommunities: [],
					firstCommunities: [],
					oneCategory: '',
					oneCommunities: [],
					trendingCommunities: [],
					suggestedCommunity: [],
				},
				actions: topcommAction,
			},
		},
	});

	it('should render', () => {
		const wrapper = mount(TopCommunity, {
			props: {
				index,
				image,
				name,
				id,
				members,
				showMembers,
				isMember,
			},
			data() {
				return {};
			},
			computed: {
				membersCount,
				noImage,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
					$router: mockRouter,
				},
			},
		});
		expect(wrapper.exists()).toBe(true);
	});
	it('Top community order', () => {
		const wrapper = mount(TopCommunity, {
			props: {
				index,
				image,
				name,
				id,
				members,
				showMembers,
				isMember,
			},
			data() {
				return {};
			},
			computed: {
				membersCount,
				noImage,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
					$router: mockRouter,
				},
			},
		});
		expect(wrapper.find('#top-community-order-0').text()).contain('1');
	});
	it('Top community name', () => {
		const wrapper = mount(TopCommunity, {
			props: {
				index,
				image,
				name,
				id,
				members,
				showMembers,
				isMember,
			},
			data() {
				return {};
			},
			computed: {
				membersCount,
				noImage,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
					$router: mockRouter,
				},
			},
		});
		expect(wrapper.find('#top-community-link2-0').text()).contain('hello');
	});

	it('Top community leave button', async () => {
		const doneLeft = true;
		const wrapper = mount(TopCommunity, {
			props: {
				index,
				image,
				name,
				id,
				members,
				showMembers,
				isMember,
			},
			data() {
				return { doneLeft };
			},
			computed: {
				membersCount,
				noImage,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
					$router: mockRouter,
				},
			},
		});
		expect(wrapper.find('.white-button').exists()).toBe(true);
		expect(wrapper.find('.white-button').text()).contain('Joined');
		await wrapper.find('.white-button').trigger('click');
		expect(wrapper.find('#pop-leave').exists()).toBe(true);
	});
});
