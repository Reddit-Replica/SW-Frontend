import { mount } from '@vue/test-utils';
import { shallowMount } from '@vue/test-utils';
import CreateCommunity from '../../src/components/CommunityComponents/CreateCommunity.vue';
import Vuex from 'vuex';
import store from '../../src/store/index.js';
import { describe, it, expect } from 'vitest';

describe('CreateCommunity.vue', () => {
	it('test', async () => {
		const wrapper = shallowMount(CreateCommunity, {
			global: {
				components: {},
				mocks: {},
			},
		});

		const name = wrapper.find('#name-input');
		await name.setValue('');
		await wrapper.find('#create-button').trigger('click');

		expect(name.element.value).toBe('');
		expect(wrapper.find('#required-name').exists()).toBe(true);
	});
});
