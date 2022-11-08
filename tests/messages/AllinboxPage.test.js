import {mount} from '@vue/test-utils';
import {shallowMount} from '@vue/test-utils';
import AllinboxPage from '../../src/pages/messages/AllInbox.vue';
import Vuex from 'vuex';
import store from '../../src/store/index.js';

import {describe, it, expect} from 'vitest';
describe ('AllinboxPage', () => {
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
  it ('should renders if AllinboxPage content is correct', () => {
    const wrapper = shallowMount (AllinboxPage, {
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
