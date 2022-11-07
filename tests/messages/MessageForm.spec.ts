import { mount } from '@vue/test-utils';
import MessageForm from '../../src/pages/messages/MessageForm.vue';
import { describe, it, expect } from 'vitest';
describe('MessageForm.vue', () => {
	//--------------------------------------------------------
	//                     Rendering
	//--------------------------------------------------------
	it('should render', () => {
		const wrapper = mount(MessageForm);
	});
	//--------------------------------------------------------
	//        Check the error in submitting empty fields
	//--------------------------------------------------------
	it('test error in empty fields', async () => {
		const wrapper = mount(MessageForm, {
			data() {
				return {
					senderUsername: '/u/asmaaadel0',
					receiverUsername: '',
					subject: '',
					text: '',
				};
			},
		});
		expect(wrapper.text()).contain('/u/asmaaadel0');
		wrapper
			.trigger('click')
			.then(() => {
				expect(wrapper.text()).contain('please enter a username');
				expect(wrapper.text()).not.contain('your message has been delivered');
			})
			.catch(function () {
				console.log('Promise Rejected');
			});

		wrapper.setData({ receiverUsername: 'Lachlan' });
		wrapper
			.trigger('click')
			.then(() => {
				expect(wrapper.text()).contain('please enter a subject');
				expect(wrapper.text()).not.contain('your message has been delivered');
			})
			.catch(function () {
				console.log('Promise Rejected');
			});
		wrapper.setData({ subject: 'Lachlan' });
		wrapper
			.trigger('click')
			.then(() => {
				expect(wrapper.text()).contain('we need something here');
				expect(wrapper.text()).not.contain('your message has been delivered');
			})
			.catch(function () {
				console.log('Promise Rejected');
			});
	});

	//--------------------------------------------------------
	//        Check text of button
	//--------------------------------------------------------
	it('Contains formatting button', () => {
		const wrapper = mount(MessageForm);
		const formattingBtn = wrapper.find('#formatting-button');
		expect(
			formattingBtn.text() == 'formatting help' ||
				formattingBtn.text() == 'hide help'
		).toBe(true);
	});

	it('Contains content policy link', () => {
		const wrapper = mount(MessageForm);
		const contentPolicyBtn = wrapper.find('#content-policy-link');
		expect(contentPolicyBtn.text() == 'content policy').toBe(true);
	});

	//--------------------------------------------------------
	//        Check clicking on formatting button
	//--------------------------------------------------------
	it('test clicking on formatting button', async () => {
		const wrapper = mount(MessageForm);
		const formattingBtn = wrapper.find('#formatting-button');
		formattingBtn
			.trigger('click')
			.then(() => {
				expect(wrapper.text()).contain(
					'reddit uses a slightly-customized version of Markdown for formatting. See below for some basics, or check the commenting wiki page for more detailed help and solutions to common issues.'
				);
			})
			.catch(function () {
				console.log('Promise Rejected');
			});
	});
		//--------------------------------------------------------
	//        Check clicking on hide button
	//--------------------------------------------------------
	it('test clicking on hide button', async () => {
		const wrapper = mount(MessageForm);
		const formattingBtn = wrapper.find('#formatting-button');
		formattingBtn
			.trigger('click')
			.then(() => {
				expect(wrapper.text()).not.contain(
					'reddit uses a slightly-customized version of Markdown for formatting. See below for some basics, or check the commenting wiki page for more detailed help and solutions to common issues.'
				);
			})
			.catch(function () {
				console.log('Promise Rejected');
			});
	});

	//--------------------------------------------------------
	//        Check success submitting
	//--------------------------------------------------------
	it('test successfully recieved', async () => {
		const wrapper = mount(MessageForm, {
			data() {
				return {
					senderUsername: '/u/asmaaadel0',
					receiverUsername: '',
					subject: '',
					text: '',
				};
			},
		});
		wrapper.setData({ receiverUsername: 'Lachlan' });
		wrapper.setData({ subject: 'Lachlan' });
		wrapper.setData({ text: 'Lachlan' });
		wrapper
			.trigger('click')
			.then(() => {
				expect(wrapper.text()).contain('your message has been delivered');
			})
			.catch(function () {
				console.log('Promise Rejected');
			});
	});
});
