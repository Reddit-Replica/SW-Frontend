import { mount } from '@vue/test-utils';
import SociallinksConfig from '../../src/components/UserComponents/BaseUserComponents/SocialLinksComponents/SociallinksConfig.vue';
import { describe, it, expect } from 'vitest';
describe('SocialLinkConfig.vue', () => {
	it('check data prop', () => {
		const data = {
			type: 'link',
			text: 'Twitter',
			alt: 'img',
			imgSrc: '',
		};
		const wrapper = mount(SociallinksConfig, {
			props: {
				data,
			},
		});
		expect(wrapper.html().includes('Add Social Link')).toBe(true);
	});

	it('check data props', () => {
		const data = {
			type: 'link',
			text: 'Twitter',
			alt: 'img',
			imgSrc: '',
		};
		const wrapper = mount(SociallinksConfig, {
			props: {
				data,
			},
		});
		expect(wrapper.html().includes('Twitter')).toBe(true);
	});
	it('Test in case of data.type equal link for ex:facebook it should  render url input box && username input box ', () => {
		const data = {
			type: 'link',
			text: 'Twitter',
			alt: 'img',
			imgSrc: '',
		};
		const wrapper = mount(SociallinksConfig, {
			props: {
				data,
			},
		});
		const byId = wrapper.find('input#social-link-config-input-displayedText');
		const byId2 = wrapper.find('input#social-link-config-input-sociallink');
		expect(byId2.exists() && byId.exists()).toBe(true);
	});
	it('Test in case of data.type equal username for ex:instagram it should  render username text input box ', () => {
		const data = {
			type: 'username',
			text: 'Twitter',
			alt: 'img',
			imgSrc: '',
		};
		const wrapper = mount(SociallinksConfig, {
			props: {
				data,
			},
		});
		const byId = wrapper.find('input#social-link-config-input-displayedText');
		expect(byId.exists()).toBe(true);
	});
	it('Test in case of data.type equal username for ex:instagram it should not render url input box ', () => {
		const data = {
			type: 'username',
			text: 'Twitter',
			alt: 'img',
			imgSrc: '',
		};
		const wrapper = mount(SociallinksConfig, {
			props: {
				data,
			},
		});
		const byId2 = wrapper.find('input#social-link-config-input-sociallink');
		expect(byId2.exists()).toBe(false);
	});
	it('should renklnders if page content is correct', async () => {
		const data = {
			type: 'link',
			text: 'Twitter',
			alt: 'img',
			imgSrc: '',
		};
		const wrapper = mount(SociallinksConfig, {
			props: {
				data,
			},
			data() {
				return {
					activeSaveButton: false,
				};
			},
		});
		const byId = wrapper.find('#back-button');
		await byId.trigger('click');
		expect(wrapper.isVisible()).toBe(false);
	});
});
