import { mount } from '@vue/test-utils';
import { shallowMount } from '@vue/test-utils';
import CreateCommunity from '../../src/components/CommunityComponents/CreateCommunity.vue';
import Vue from 'vue';
import Vuex from 'vuex';
import store from '../../src/store/index.js';
import { describe, it, expect, vitest } from 'vitest';
describe('CreateCommunity.vue', () => {
	it('renders', () => {
		const wrapper = shallowMount(CreateCommunity, {
			global: {
				components: {},
				mocks: { $store: store },
			},
		});
		expect(wrapper.exists()).toBe(true);
	});

	it('Test name', async () => {
		const wrapper = shallowMount(CreateCommunity, {
			global: {
				components: {},
				mocks: { $store: store },
			},
		});

		expect(wrapper.find('#name-input').exists()).toBe(true);
		await wrapper.find('#name-input').setValue('HelloReddit');
		expect(wrapper.find('#name-input').element.value).toBe('HelloReddit');
	});

	it('Test category', async () => {
		const wrapper = shallowMount(CreateCommunity, {
			global: {
				components: {},
				mocks: { $store: store },
			},
		});

		expect(wrapper.find('#category-input').exists()).toBe(true);
		const select = wrapper.find('#category-input');
		await select.setValue('');
		expect(wrapper.find('#category-input').element.value).toBe('');
	});
});
