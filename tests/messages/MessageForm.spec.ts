// import { describe, it, expect } from 'vitest';
// import { mount } from '@vue/test-utils';
// import MessageForm from '../../src/pages/messages/MessageForm.vue';

// describe('Message Form unit test', async () => {
// 	it('should render', () => {
// 		const wrapper = mount(MessageForm);
// 	});
// });
// it('form result section is hidden while there are no any result', async () => {
// 	const wrapper = mount(MessageForm);
// 	const senderUsername = wrapper.find('[data-testid="senderUsername"]');
// 	const receiverUsername = wrapper.find('[data-testid="receiverUsername"]');
// 	const subject = wrapper.find('[data-testid="subject"]');
// 	const text = wrapper.find('[data-testid="text"]');
// 	const submitButton = wrapper.find('[data-testid="submit-form"]');
// 	const formResult = wrapper.find('[data-testid="form-result"]');
// 	const error = wrapper.find('[data-testid="error"]');

// 	senderUsername.element.value = 'fred';
// 	receiverUsername.trigger('input');

// 	receiverUsername.element.value = 'asmaa';
// 	receiverUsername.trigger('input');

// 	await submitButton.trigger('click');

// 	subject.element.value = 'subject';
// 	subject.trigger('input');

// 	text.element.value = 'text';
// 	text.trigger('input');

// 	expect(formResult.text()).toBe('');

//   expect(formResult.text()).toBe('your message has been delivered');
// });

// import { mount } from '@vue/test-utils';
// import { MessageForm } from '../../src/pages/messages/MessageForm.vue';
// import { describe, it, expect } from 'vitest';

// describe('MessageForm.vue', () => {
// 	it('renders a message and responds correctly to user input', () => {
// 		const wrapper = mount(MessageForm, {
// 			data() {
// 				return {
// 					senderUsername: '/u/asmaaadel0',
// 					receiverUsername: '',
// 					subject: '',
// 					text: '',
// 				};
// 			},
// 		});

// 		// see if the message renders
// 		expect(wrapper.find('.senderUsername').text()).toEqual('/u/asmaaadel0');

// 		// assert the error is rendered
// 		expect(wrapper.find('.error').exists()).toBeTruthy();

// 		// update the `username` and assert error is no longer rendered
// 		wrapper.setData({ receiverUsername: 'Lachlan' });
// 		wrapper.setData({ subject: 'Lachlan' });
// 		wrapper.setData({ text: 'Lachlan' });

// 		expect(wrapper.find('.error').exists()).toBeFalsy();
// 	});
// });

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
