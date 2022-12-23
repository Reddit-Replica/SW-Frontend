import { mount } from '@vue/test-utils';
import SubredditTop from '../../src/components/CommunityComponents/SubredditTop.vue';
import Vuex from 'vuex';
import { describe, it, expect } from 'vitest';

describe('SubredditTop.vue', () => {
	const commAction = {
		createSubreddit: vi.fn(),
		checkSubredditName: vi.fn(),
		getSavedCategories: vi.fn(),
		addToFavourite: vi.fn(),
		removeFromFavourite: vi.fn(),
		AddDescription: vi.fn(),
		AddMainTopic: vi.fn(),
		AddSubTopic: vi.fn(),
		getSubreddit: vi.fn(),
		changeFirstcreated: vi.fn(),
		joinSubreddit: vi.fn(),
		leaveSubreddit: vi.fn(),
		fetchSubredditPosts: vi.fn(),
		getsuggestedTopics: vi.fn(),
		addSubredditPicture: vi.fn(),
		addSubredditBanner: vi.fn(),
	};

	let store = new Vuex.Store({
		modules: {
			CommModule: {
				namespaced: true,
				state: {
					subredditNameTaken: false,
					categories: [],
					subreddit: {},
					posts: [],
					createdSuccessfully: false,
					topics: [],
					notFound: false,
					leaveOwner: false,
					subredditPicture: '',
					subredditBanner: '',
				},
				actions: commAction,
			},
		},
	});

	const mockRouter = {
		push: vi.fn(),
		replace: vi.fn(),
	};

	const subredditId = '1';
	//const subredditName = 'hello';
	const subredditNickname = 'hii';
	const subredditImageUrl = '';
	const subredditBannerUrl = '';
	const joined = true;

	it('should render', () => {
		const wrapper = mount(SubredditTop, {
			props: {
				subredditId,
				//subredditName,
				subredditNickname,
				subredditImageUrl,
				subredditBannerUrl,
				joined,
			},
			data() {
				return {};
			},
			computed: {},
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
	it('button test', () => {
		const wrapper = mount(SubredditTop, {
			props: {
				subredditId,
				//subredditName,
				subredditNickname,
				subredditImageUrl,
				subredditBannerUrl,
				joined,
			},
			data() {
				return {};
			},
			computed: {},
			global: {
				// OR:
				mocks: {
					$store: store,
					$router: mockRouter,
				},
			},
		});
		expect(wrapper.find('join-button').exists()).toBe(false);
	});
});
