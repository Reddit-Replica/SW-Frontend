import { mount } from '@vue/test-utils';
import { shallowMount } from '@vue/test-utils';
import ModeratorsBar from '../../src/components/CommunityComponents/ModeratorsBar.vue';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import store from '../../src/store/index.js';
import { describe, it, expect, vitest } from 'vitest';

describe('ModeratorsBar.vue', () => {
	it('renders', () => {
		const wrapper = shallowMount(ModeratorsBar, {
			global: {
				components: {},
				mocks: { $store: store },
			},
		});
		expect(wrapper.exists()).toBe(true);
	});

	it('Test if button exists', async () => {
		const wrapper = shallowMount(ModeratorsBar, {
			global: {
				components: {},
				mocks: { $store: store },
			},
		});

		expect(wrapper.find('#message-mods').exists()).toBe(true);
	});
});