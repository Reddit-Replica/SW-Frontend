import { shallowMount, mount } from '@vue/test-utils';
import SubredditCardMini from '../../src/components/UserComponents/BaseUserComponents/PostComponents/SubredditCardMini.vue';
import Vuex from 'vuex';
import { describe, it, expect } from 'vitest';
describe('Post Options Bar', () => {
	//--------------------------------------------------------
	//                     Rendering
	//--------------------------------------------------------
	it('should renders if SubredditCardMini content is correct', () => {
		const wrapper = mount(SubredditCardMini, {
			props: {
				subreddit: {
					picture: null,
					description: 'google search engine community',
				},
				subredditName: 'google',
			},
		});
		expect(wrapper.exists()).toBe(true);
	});

	//--------------------------------------------------------
	//                     Testing no SubredditCardMini title
	//--------------------------------------------------------
	it('check correct rendering of subreddit description', () => {
		const wrapper = mount(SubredditCardMini, {
			props: {
				subreddit: {
					picture: null,
					description: 'google search engine community',
				},
				subredditName: 'google',
			},
		});
		const byId = wrapper.find('div.discription p');
		expect(byId.text()).toBe('google search engine community');
	});
	it('check correct rendering of subreddit name', () => {
		const wrapper = mount(SubredditCardMini, {
			props: {
				subreddit: {
					picture: null,
					description: 'google search engine community',
				},
				subredditName: 'google',
			},
		});
		const byId = wrapper.find('#base-user-post-content-post-user-name');
		expect(byId.text()).toBe('r/google');
	});
});
