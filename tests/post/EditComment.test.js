import { describe, it,expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MyComment from '../../src/components/MyComment.vue'
import store from '../../src/store/index.js';

const comment = {
    userName:'mena',
    duration: '20 hr',
    replies: [],
    content: 'hi'
}

it('should change comment', async () => {
    const wrapper = mount(MyComment,{
        props: {
            comment
        },
        global: {
            // OR:
            mocks: {
              $store: store,
            },
        },
    });
    await wrapper.find('#edit').trigger('click')
    await wrapper.find('#text1').setValue('LearnVue')
    await wrapper.find('#comment-in-mark-down-mode').trigger('click')
    expect(wrapper.find('div.content p').text()).toEqual('LearnVue')
})