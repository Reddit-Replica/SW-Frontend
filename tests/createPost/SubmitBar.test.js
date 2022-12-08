import { describe, expect, it, vitest } from 'vitest';
import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import  SubmitBar from '../..//src/components/SubmitComponents/SubmitBar.vue'
import Vuex from 'vuex';
import store from '../../src/store/index.js';
import mockservice from '../../../mockservice.txt';

describe('Submit footer rendring', () => {

	//it-> test block
	it('Render component exist', async () => {
		//our component
		const wrapper = shallowMount(SubmitBar, {
			global: {
				components: {},
				mocks: {},
			},
		});
		expect(wrapper.exists()).toBe(true);
	});







});

