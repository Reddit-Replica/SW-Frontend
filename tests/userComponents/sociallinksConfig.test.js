import { mount } from '@vue/test-utils';
import { shallowMount } from '@vue/test-utils';
import SociallinksConfig from '../../src/components/UserComponents/BaseUserComponents/SocialLinksComponents/SociallinksConfig.vue';
import Vuex from 'vuex';
import store from '../../src/store/index.js';

import { describe, it, expect } from 'vitest';
describe('SocialLink.vue', () => {
	it('check rendering osf social link config ', async () => {
		const data = {
			text: 'Facebook',
			imgSrc: '',
			alt: '',
		};
		const wrapper = mount(SociallinksConfig, {
			props: {
				data,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#social-link-config-header h3');
		await expect(byId.text()).toBe('Add Social Link');
	});
	it('check rendering osf social link config item ', async () => {
		const data = {
			text: 'Facebook',
			imgSrc: '',
			alt: '',
			type: 'link',
		};
		const wrapper = mount(SociallinksConfig, {
			props: {
				data,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#social-link-config-item');
		await expect(byId.text()).toBe('Facebook');
	});
	it('test existence of social link input field in case of type link ', async () => {
		const data = {
			text: 'Facebook',
			imgSrc: '',
			alt: '',
			type: 'link',
		};
		const wrapper = mount(SociallinksConfig, {
			props: {
				data,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#social-link-config-input-sociallink');
		await expect(byId.exists()).toBe(true);
	});
	it('test existence of social link displayed name input field in case of type link ', async () => {
		const data = {
			text: 'Facebook',
			imgSrc: '',
			alt: '',
			type: 'link',
		};
		const wrapper = mount(SociallinksConfig, {
			props: {
				data,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#social-link-config-input-displayedText');
		await expect(byId.exists()).toBe(true);
	});
	it('test existence of social link input field in case of type username it must not exist ', async () => {
		const data = {
			text: 'Facebook',
			imgSrc: '',
			alt: '',
			type: 'username',
		};
		const wrapper = mount(SociallinksConfig, {
			props: {
				data,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#social-link-config-input-sociallink');
		await expect(byId.exists()).toBe(false);
	});
	it('test at writing to an input field in case of type user name (medo -> @medo) ', async () => {
		const data = {
			text: 'Facebook',
			imgSrc: '',
			alt: '',
			type: 'username',
		};
		const wrapper = mount(SociallinksConfig, {
			props: {
				data,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#social-link-config-input-displayedText');
		await byId.setValue('medo');
		expect(byId.element.value).toBe('@medo');
	});
	it('test at writing to an input field in case of type link (medo -> medo) ', async () => {
		const data = {
			text: 'Facebook',
			imgSrc: '',
			alt: '',
			type: 'link',
		};
		const wrapper = mount(SociallinksConfig, {
			props: {
				data,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#social-link-config-input-displayedText');
		await byId.setValue('medo');
		expect(byId.element.value).toBe('medo');
	});
	it('test at writing to an input field  type link (medo -> http://medo) ', async () => {
		const data = {
			text: 'Facebook',
			imgSrc: '',
			alt: '',
			type: 'link',
		};
		const wrapper = mount(SociallinksConfig, {
			props: {
				data,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#social-link-config-input-sociallink');
		await byId.setValue('medo');
		expect(byId.element.value).toBe('http://medo');
	});
	it('test at writing invalid url and test showing the invalid message ', async () => {
		const data = {
			text: 'Facebook',
			imgSrc: '',
			alt: '',
			type: 'link',
		};
		const wrapper = mount(SociallinksConfig, {
			props: {
				data,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId4 = wrapper.find('#social-link-config-input-displayedText');
		await byId4.setValue('medo');
		const byId = wrapper.find('#social-link-config-input-sociallink');
		await byId.setValue('medo');
		const byId3 = wrapper.find('#save-button');
		await byId3.trigger('click');
		const byId2 = wrapper.find('#social-link-config-invalid-url');
		await expect(byId2.exists()).toBe(true);
	});
	it('test at writing wrong spelling i.e link contain ,, url and test showing the wrong spelling message ', async () => {
		const data = {
			text: 'Facebook',
			imgSrc: '',
			alt: '',
			type: 'link',
		};
		const wrapper = mount(SociallinksConfig, {
			props: {
				data,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId4 = wrapper.find('#social-link-config-input-displayedText');
		await byId4.setValue('medo');
		const byId = wrapper.find('#social-link-config-input-sociallink');
		await byId.setValue(',medo,,');
		const byId3 = wrapper.find('#save-button');
		await byId3.trigger('click');
		const byId2 = wrapper.find('#social-link-config-invalid-spelling');
		await expect(byId2.exists()).toBe(true);
	});
	it('test at writing  a true url and displayed text ', async () => {
		const data = {
			text: 'Facebook',
			imgSrc: '',
			alt: '',
			type: 'link',
		};
		const wrapper = mount(SociallinksConfig, {
			props: {
				data,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId4 = wrapper.find('#social-link-config-input-displayedText');
		await byId4.setValue('medo');
		const byId = wrapper.find('#social-link-config-input-sociallink');
		await byId.setValue('google.com');
		const byId3 = wrapper.find('#save-button');
		await byId3.trigger('click');
		const byId2 = wrapper.find('#social-link-config-invalid-url');
		const byId5 = wrapper.find('#social-link-config-invalid-spelling');

		await expect(byId2.exists() == false && byId5.exists() == false).toBe(true);
	});
});
