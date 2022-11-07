import { mount } from '@vue/test-utils';
import MessageForm from '../../src/pages/messages/MessageForm.vue';
import { describe, it, expect } from 'vitest';
describe('MessageForm.vue', () => {
	it('should render', () => {
		const wrapper = mount(MessageForm);
	});
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
