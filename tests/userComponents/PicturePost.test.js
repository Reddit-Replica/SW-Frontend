import { shallowMount, mount } from '@vue/test-utils';
import PicturePost from '../../src/components/UserComponents/BaseUserComponents/PostComponents/PicturePost.vue';
import Vuex from 'vuex';
import { describe, it, expect } from 'vitest';
describe('Post Options Bar', () => {
	//--------------------------------------------------------
	//                     Rendering
	//--------------------------------------------------------
	it('should renders if PicturePost content is correct', () => {
		const wrapper = mount(PicturePost, {
			props: {
				images: [
					{
						link: 'www.google.come',
						caption: 'hi how are you',
						imgUrl: '',
					},
				],
			},
			created() {},
		});
		expect(wrapper.exists()).toBe(true);
	});

	//--------------------------------------------------------
	//                     Testing no SubredditCardMini title
	//--------------------------------------------------------
	it('check correct rendering of images caption description', () => {
		const wrapper = mount(PicturePost, {
			props: {
				images: [
					{
						link: 'www.google.come',
						caption: 'hi how are you',
						imgUrl: '',
					},
				],
			},
		});
		const byId = wrapper.find(
			'#post-picture-components-post-footer-router-link'
		);
		expect(byId.text()).toBe('hi how are you');
	});
});
