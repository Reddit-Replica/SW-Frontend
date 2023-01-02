import { mount } from '@vue/test-utils';
import AboutCommunityBar from '../../src/components/CommunityComponents/AboutCommunityBar.vue';
import Vuex from 'vuex';
import { describe, it, expect } from 'vitest';

describe('AboutCommunityBar.vue', () => {
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

	const topics = ['Art', 'Anime', 'Beauty'];
	const membersCount = 1;
	const onlineMembersCount = 1;
	const communityDate = '2019-08-24T14:15:22Z';
	const communityType = 'Public';
	const subredditName = 'hello';
	const communityDescriptionProp = 'hi';
	const communityTopicProp = '';
	const communitySubtopicsProp = [];
	const isFavourite = false;
	const isModerator = true;
	const nsfw = false;

	it('should render', () => {
		const wrapper = mount(AboutCommunityBar, {
			props: {
				membersCount,
				onlineMembersCount,
				communityDate,
				communityType,
				subredditName,
				communityDescriptionProp,
				communityTopicProp,
				communitySubtopicsProp,
				isFavourite,
				isModerator,
				nsfw,
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

	it('Test options list', async () => {
		const wrapper = mount(AboutCommunityBar, {
			global: {
				props: {
					membersCount,
					onlineMembersCount,
					communityDate,
					communityType,
					subredditName,
					communityDescriptionProp,
					communityTopicProp,
					communitySubtopicsProp,
					isFavourite,
					isModerator,
					nsfw,
				},
				data() {
					return {};
				},
				computed: {},
				mocks: { $store: store, $router: mockRouter },
			},
		});

		expect(wrapper.find('#three-dots').exists()).toBe(true);
		//show options list
		await wrapper.find('#three-dots').trigger('click');
		expect(wrapper.find('.box-options').exists()).toBe(true);
		expect(wrapper.find('#add-to-favourite').text()).toBe('Add To Favorites');
	});

	it('Test type', async () => {
		const wrapper = mount(AboutCommunityBar, {
			global: {
				props: {
					membersCount,
					onlineMembersCount,
					communityDate,
					communityType,
					subredditName,
					communityDescriptionProp,
					communityTopicProp,
					communitySubtopicsProp,
					isFavourite,
					isModerator,
					nsfw,
				},
				data() {
					return {};
				},
				computed: {},
				mocks: { $store: store, $router: mockRouter },
			},
		});

		expect(wrapper.find('#comm-type').exists()).toBe(true);
		expect(wrapper.find('#comm-type').text()).contain('');
	});

	it('Test nsfw', async () => {
		const wrapper = mount(AboutCommunityBar, {
			global: {
				props: {
					membersCount,
					onlineMembersCount,
					communityDate,
					communityType,
					subredditName,
					communityDescriptionProp,
					communityTopicProp,
					communitySubtopicsProp,
					isFavourite,
					isModerator,
					nsfw,
				},
				data() {
					return {};
				},
				computed: {},
				mocks: { $store: store, $router: mockRouter },
			},
		});

		expect(wrapper.find('#is-nsfw').exists()).toBe(false);
	});

	it('Test members', async () => {
		const wrapper = mount(AboutCommunityBar, {
			global: {
				props: {
					membersCount,
					onlineMembersCount,
					communityDate,
					communityType,
					subredditName,
					communityDescriptionProp,
					communityTopicProp,
					communitySubtopicsProp,
					isFavourite,
					isModerator,
					nsfw,
				},
				data() {
					return {};
				},
				computed: {},
				mocks: { $store: store, $router: mockRouter },
			},
		});

		expect(wrapper.find('#comm-mem').exists()).toBe(true);
		expect(wrapper.find('#comm-mem').text()).contain('1');
	});

	it('Test description', async () => {
		const wrapper = mount(AboutCommunityBar, {
			global: {
				props: {
					membersCount,
					onlineMembersCount,
					communityDate,
					communityType,
					subredditName,
					communityDescriptionProp,
					communityTopicProp,
					communitySubtopicsProp,
					isFavourite,
					isModerator,
					nsfw,
				},
				data() {
					return {};
				},
				computed: {},
				mocks: { $store: store, $router: mockRouter },
			},
		});

		expect(wrapper.find('#add-desc').exists()).toBe(false);
	});

	it('Test description', async () => {
		const wrapper = mount(AboutCommunityBar, {
			global: {
				props: {
					membersCount,
					onlineMembersCount,
					communityDate,
					communityType,
					subredditName,
					communityDescriptionProp,
					communityTopicProp,
					communitySubtopicsProp,
					isFavourite,
					isModerator,
					nsfw,
				},
				data() {
					return {};
				},
				computed: {},
				mocks: { $store: store, $router: mockRouter },
			},
		});
		expect(wrapper.find('#add-desc').exists()).toBe(false);
	});
});
