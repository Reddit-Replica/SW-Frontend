import { mount } from '@vue/test-utils';
import { shallowMount } from '@vue/test-utils';
import ProfileNavbar from '../../src/components/UserComponents/ProfileNav.vue';
import Vuex from 'vuex';
import store from '../../src/store/index.js';

import { describe, it, expect } from 'vitest';
describe('SocialLink.vue', () => {
	it('Check render of user moderator card', async () => {
		const wrapper = mount(ProfileNavbar, {
			props: {
				userName: 'medo',
			},
			global: {
				// OR:
				mocks: {
					$store: store,
					$route: {
						params: {
							userName: 'medo',
						},
					},
				},
			},
		});
		expect(wrapper.exists()).toBe(true);
	});
});