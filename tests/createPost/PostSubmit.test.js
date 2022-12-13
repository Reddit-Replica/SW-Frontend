import { describe, expect, it, vitest } from 'vitest';
import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import  PostSubmit from '../../src/components/SubmitComponents/PostSubmit.vue'
import Vuex from 'vuex';
import store from '../../src/store/index.js';
import mockservice from '../../../mockservice.txt';

describe('Submit footer rendring', () => {

	//it-> test block
	it('Render component exist', async () => {
		//our component
		const wrapper = shallowMount(PostSubmit, {
			global: {
				components: {},
				mocks: {},
			},
		});
		expect(wrapper.exists()).toBe(true);
	});







});

