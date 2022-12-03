import { describe, expect, it, vitest } from 'vitest';
import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import SubmitPage from '../../src/pages/submit/SubmitPage.vue'
import Vuex from 'vuex';
import store from '../../src/store/index.js';
import mockservice from '../../../mockservice.txt';

describe('SubmitPage rendring', () => {

    const categories = ['Gaming', 'Sports', 'Memes', 'News'];

	const communityAction = {
		createPost: vi.fn(),

	};
	const communityMutation = {
		setTitle: vi.fn(),
		setNsfw: vi.fn(),
		setSpoiler: vi.fn(),
		setFlairId: vi.fn(),
		setsendReplies: vi.fn(),
        setContent: vi.fn(),
        setallSubreddits: vi.fn(),
        setSubreddit: vi.fn(),
        setinSubreddit: vi.fn(),
	};
	const communityGetters = {
		getTitle: vi.fn(),
		getNsfw: vi.fn(),
		getSpoiler: vi.fn(),
		getFlairId: vi.fn(),
		getsendReplies: vi.fn(),
        getContent: vi.fn(),
        getallSubreddits: vi.fn(),
        getSubreddit: vi.fn(),
        getinSubreddit: vi.fn(),
	};
	//it-> test block
	it('Render component exist', async () => {
		//our component
		const wrapper = shallowMount(SubmitPage, {
			global: {
				components: {},
				mocks: {},
			},
		});
		expect(wrapper.exists()).toBe(true);
	});







});

