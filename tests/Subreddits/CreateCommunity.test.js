import { mount, shallowMount } from '@vue/test-utils';
import CreateCommunity from '../../src/components/CommunityComponents/CreateCommunity.vue';
import { describe, it, expect } from 'vitest';
import Vuex from 'vuex';
import store from '../../src/store/index.js';
import mockservice from '../../../mockservice.txt';

describe('CreateCommunity.vue', () => {
	const subreddit = {
		subredditName: 'Hello',
		category: 'Sports',
		nsfw: true,
		type: 'Public',
	};

	const actions = {
		createSubreddit: vi.fn(),
		checkSubredditName: vi.fn(),
		getSavedCategories: vi.fn(),
		ToggleFavourite: vi.fn(),
		AddDescription: vi.fn(),
		AddMainTopic: vi.fn(),
		AddSubTopic: vi.fn(),
		getSubreddit: vi.fn(),
		changeFirstcreated: vi.fn(),
		joinSubreddit: vi.fn(),
		fetchSubredditPosts: vi.fn(),
	};
	const mutation = {
		checkSubredditName: vi.fn(),
		setSavedCategories: vi.fn(),
		setSubreddit: vi.fn(),
		setPosts: vi.fn(),
		createdSuccessfully: vi.fn(),
	};

	//Mocking the store
	store = new Vuex.Store({
		modules: {
			commModule: {
				namespaced: true,
				state: {
					subredditNameTaken: false,
					categories: ['Gaming', 'Sports', 'Memes', 'News'],
					subreddit: {},
					posts: [],
					createdSuccessfully: false,
				},
				getters: {
					categories: (state) => {
						return state.categories;
					},
					subredditNameTaken: (state) => {
						return state.subredditNameTaken;
					},
				},
				actions: actions,
				mutations: mutation,
			},
		},
	});

	//Rendering
	it('should render', () => {
		const wrapper = mount(CreateCommunity, {
			props: {},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
	});

	it('Test empty subredddit name', async () => {
		const wrapper = mount(CreateCommunity, {
			props: {},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const nameInput = wrapper.find('#name-input');
		await nameInput.trigger('click');
		await nameInput.trigger('blur');
		const nameRequired = wrapper.find('#required-name');
		expect(nameRequired.exists()).toBe(true);
	});

	it('Test empty subredddit category', async () => {
		const wrapper = mount(CreateCommunity, {
			props: {},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const categoryInput = wrapper.find('#category-input');
		await categoryInput.trigger('click');
		await categoryInput.trigger('blur');
		const categoryRequired = wrapper.find('#required-category');
		expect(categoryRequired.exists()).toBe(true);
	});

	it('Test invalid subredddit name', async () => {
		const wrapper = mount(CreateCommunity, {
			props: {},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});

		//set name using invalid value
		const nameInput = wrapper.find('#name-input');
		await nameInput.trigger('click');
		await nameInput.setValue('hi++');
		await nameInput.trigger('blur');

		//check on error text
		const nameerror = wrapper.find('#name-symbols');
		expect(nameerror.exists()).toBe(true);

		//check on error dialog
		const moreText = wrapper.find('#more');
		const moreDialog = wrapper.find('#more-dialog');
		await moreText.trigger('click');
		expect(moreDialog.exists()).toBe(true);
	});

	it('Test valid subredddit name', async () => {
		const wrapper = mount(CreateCommunity, {
			props: {},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});

		//set name using valid value
		const nameInput = wrapper.find('#name-input');
		await nameInput.trigger('click');
		await nameInput.setValue('hii');
		await nameInput.trigger('blur');

		//check on error text
		const nameerror = wrapper.find('#name-symbols');
		expect(nameerror.exists()).toBe(false);

		//check on empty error
		const nameRequired = wrapper.find('#required-name');
		expect(nameRequired.exists()).toBe(false);
	});

	it('nsfw', async () => {
		const wrapper = mount(CreateCommunity, {
			props: {},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});

		//nsfw false
		const squareBefore = wrapper.find('.bi-square');
		expect(squareBefore.exists()).toBe(true);

		//click
		const nsfwInput = wrapper.find('#nsfw-input');
		await nsfwInput.trigger('click');

		//nsfw true
		const squareAfter = wrapper.find('.bi-check-square-fill');
		expect(squareAfter.exists()).toBe(true);
	});

	it('type public default', async () => {
		const wrapper = mount(CreateCommunity, {
			props: {},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});

		//type 1 true by defult
		const circleAfter = wrapper.find('#bi-record-circle-fill-1');
		expect(circleAfter.exists()).toBe(true);
	});

	it('type restricted', async () => {
		const wrapper = mount(CreateCommunity, {
			props: {},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});

		//type 2 not chosen
		const circleBefore = wrapper.find('#bi-circle-2');
		expect(circleBefore.exists()).toBe(true);

		//choose type 2
		const typeInput=wrapper.find('#type-restricted');
		await typeInput.trigger('click');

		//type 2 chosen
		const circleAfter = wrapper.find('#bi-record-circle-fill-2');
		expect(circleAfter.exists()).toBe(true);

		//type 1 not chosen
		const circleAfter1 = wrapper.find('#bi-record-circle-fill-1');
		expect(circleAfter1.exists()).toBe(false);

	});
});
