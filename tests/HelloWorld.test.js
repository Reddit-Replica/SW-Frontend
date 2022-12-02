import { mount } from '@vue/test-utils';
import HelloWorld from '../src/components/HelloWorld.vue';
import { describe, it, expect } from 'vitest';
describe('HelloWorld.vue', () => {
	it('should renders if page content is correct', () => {
		const message = 'Happy People';
		const testMessage = 'Happy People';
		const wrapper = mount(HelloWorld, {
			props: { message },
		});
		expect(wrapper.text()).toBe(testMessage);
	});

	it('should render if props value is correct', () => {
		const message = 'Happy People';
		const testMessage = 'Happy People';
		const wrapper = mount(HelloWorld, {
			props: { message },
		});
		expect(wrapper.vm.message).toBe(testMessage);
	});
});

