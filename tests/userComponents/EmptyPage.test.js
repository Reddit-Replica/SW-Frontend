import { shallowMount, mount } from '@vue/test-utils';
import EmptyPage from '../../src/components/UserComponents/BaseUserComponents/PostComponents/EmptyPage.vue';
import Vuex from 'vuex';
import { describe, it, expect } from 'vitest';
describe('EmptyPage', () => {
	//--------------------------------------------------------
	//                     Rendering
	//--------------------------------------------------------
	it('should renders if EmptyPage content is correct', () => {
		const wrapper = mount(EmptyPage, {
			props: {
				pageTitle: 'hmm no comments found yet',
			},
			created() {},
		});
		expect(wrapper.exists()).toBe(true);
	});

	//--------------------------------------------------------
	//                     Testing no SubredditCardMini title
	//--------------------------------------------------------
	it('check correct rendering of empty page title', () => {
		const wrapper = mount(EmptyPage, {
			props: {
				pageTitle: 'hmm no comments found yet',
			},
		});
		const byId = wrapper.find('#empty-user-unfound-paragraph-page-content');
		expect(byId.text()).toBe('hmm no comments found yet');
	});
});
