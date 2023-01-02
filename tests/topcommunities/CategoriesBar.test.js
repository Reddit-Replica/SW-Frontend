import { mount } from '@vue/test-utils';
import CategoriesBar from '../../src/components/TopCommunities/CategoriesBar.vue';
import Vuex from 'vuex';
import { describe, it, expect, vi } from 'vitest';
describe('CategoriesBar', () => {
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
		const categories = ['News', 'Sports', 'Beauty', 'Art', 'AWW'];
		const categoryClicked = 'All Communities';
		const smallList = true;
		const buttonText = 'Show More';

		const wrapper = mount(CategoriesBar, {
			data() {
				return { categories, categoryClicked, smallList };
			},
			computed: {
				buttonText,
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
	it('Show Button', async () => {
		const categories = ['News', 'Sports', 'Beauty', 'Art', 'AWW'];
		const categoryClicked = 'All Communities';
		const smallList = true;
		const buttonText = 'Show More';
		const wrapper = mount(CategoriesBar, {
			data() {
				return { categories, categoryClicked, smallList };
			},
			computed: {
				buttonText,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
					$router: mockRouter,
				},
			},
		});
		expect(wrapper.find('#catg-bar-6').exists()).toBe(true);
	});

	it('Select All communities', async () => {
		const categories = ['News', 'Sports', 'Beauty', 'Art', 'AWW'];
		const categoryClicked = 'All Communities';
		const smallList = true;
		const buttonText = 'Show More';
		const wrapper = mount(CategoriesBar, {
			data() {
				return { categories, categoryClicked, smallList };
			},
			computed: {
				buttonText,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
					$router: mockRouter,
				},
			},
		});
		expect(wrapper.find('#catg-bar-3').text()).contain('All Communities');
	});
});
