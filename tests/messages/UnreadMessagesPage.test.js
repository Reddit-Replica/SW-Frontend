import {shallowMount} from '@vue/test-utils';
import UnreadInbox from '../../src/pages/messages/UnreadInbox.vue';
import store from '../../src/store/index.js';

import {describe, it, expect} from 'vitest';
describe ('UnreadInbox', () => {
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
  it ('should renders if UnreadInbox content is correct', () => {
    const wrapper = shallowMount (UnreadInbox, {
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
});
