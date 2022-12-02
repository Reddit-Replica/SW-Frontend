import {shallowMount} from '@vue/test-utils';
import PostReplies from '../../src/pages/messages/PostReplies.vue';
import store from '../../src/store/index.js';

import {describe, it, expect} from 'vitest';
describe ('PostReplies', () => {
  const message = {
    id: 2,
    text: 'hello asmaa',
    type: 'Messages',
    subredditName: 'subredditName',
    postTitle: 'postTitle',
    senderUsername: '/u/hoda_gamal',
    receiverUsername: '/u/asmaaadel0',
    subject: 'hi',
    sendAt: '2019-08-24T14:15:22Z',
    isReply: false,
    isRead: true,
  };

  //--------------------------------------------------------
  //                     Rendering
  //--------------------------------------------------------
  it ('should renders if PostReplies content is correct', () => {
    const wrapper = shallowMount (PostReplies, {
      props: {
        message,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.exists ()).toBe (true);
  });

  //--------------------------------------------------------
  //                     Testing no message
  //--------------------------------------------------------
  it ('Testing no message value is false if there is message', () => {
    const wrapper = shallowMount (PostReplies, {
      props: {
        message,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).not.contain ('seem to be anything here');
  });
});
