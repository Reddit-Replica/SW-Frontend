import { describe, expect, it, vitest } from 'vitest';
import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import  LinkSubmit from '../../src/components/SubmitComponents/LinkSubmit.vue'
import Vuex from 'vuex';
import store from '../../src/store/index.js';
import mockservice from '../../../mockservice.txt';

describe('Submit footer rendring', () => {

	//it-> test block
	it('Render component exist', async () => {
		//our component
		const wrapper = shallowMount(LinkSubmit, {
			global: {
				components: {},
				mocks: {},
			},
		});
		expect(wrapper.exists()).toBe(true);
	});

    
    // it('Render text box', async () => {
	// 	//our component
	// 	const wrapper = shallowMount(LinkSubmit, {
	// 		global: {
	// 			components: {},
	// 			mocks: {},
	// 		},
	// 	});
       
	// });




});

