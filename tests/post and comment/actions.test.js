import { describe, it,expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MyComment from '../../src/components/PostComponents/MyComment.vue'
import BasePost from '../../src/components/BaseComponents/BasePost.vue'
import store from '../../src/store/index.js';

const comment = {
    userName:'mena',
    duration: '20 hr',
    replies: [],
    content: 'hi'
}
const post = {
        userName: 'mena',
        voteCount: 22,
        subredditName: 'sub-com',
        duration: '22 minutes',
        postName: 'Hello World',
        postDescription:
            'post description Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        commentsCount: 22,
}

it('Test edit comment action', async () => {
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
});
// it('Test post upvote action', async () => {
//     const wrapper = mount(BasePost,{
//         props: {
//             post
//         },
//         global: {
//             // OR:
//             mocks: {
//               $store: store,
//             },
//         },
//     });
//     await wrapper.find('#upvote-service').trigger('click')
//     expect(wrapper.find('span.vote-count').text()).toEqual('23')
// })
// it('Test post downvote action', async () => {
//     const wrapper = mount(BasePost,{
//         props: {
//             post
//         },
//         global: {
//             // OR:
//             mocks: {
//               $store: store,
//             },
//         },
//     });
//     await wrapper.find('#downvote-service').trigger('click')
//     expect(wrapper.find('span.vote-count').text()).toEqual('21')
// })
it('Test hide post action', async () => {
    const wrapper = mount(BasePost,{
        props: {
            post
        },
        global: {
            // OR:
            mocks: {
              $store: store,
            },
        },
    });
    await wrapper.find('#submenu').trigger('click')
    await wrapper.find('#hide').trigger('click')
    expect(wrapper.find('.post-card').exists()).toBe(false);
})
it('Test delete comment action', async () => {
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
    await wrapper.find('#dots').trigger('click')
    await wrapper.find('#sub-menu-delete').trigger('click')
    expect(wrapper.find('.comment').exists()).toBe(false);
})
// it('Test upvote post then downvote post action', async () => {
//     const wrapper = mount(BasePost,{
//         props: {
//             post
//         },
//         global: {
//             // OR:
//             mocks: {
//               $store: store,
//             },
//         },
//     });
//     await wrapper.find('#upvote-service').trigger('click')
//     await wrapper.find('#downvote-service').trigger('click')
//     expect(wrapper.find('span.vote-count').text()).toEqual('21')
// })
// it('Test downvote post then upvote post action', async () => {
//     const wrapper = mount(BasePost,{
//         props: {
//             post
//         },
//         global: {
//             // OR:
//             mocks: {
//               $store: store,
//             },
//         },
//     });
//     await wrapper.find('#downvote-service').trigger('click')
//     await wrapper.find('#upvote-service').trigger('click')
//     expect(wrapper.find('span.vote-count').text()).toEqual('23')
// })