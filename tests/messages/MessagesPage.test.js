import {mount} from '@vue/test-utils';
import {shallowMount} from '@vue/test-utils';
import MessagesInbox from '../../src/pages/messages/MessagesInbox.vue';
import Vuex from 'vuex';
import store from '../../src/store/index.js';

import {describe, it, expect} from 'vitest';
describe ('MessagesInbox', () => {
  const message = {
    id: 2,
    text: 'hello asmaa',
    senderUsername: '/u/hoda_gamal',
    receiverUsername: '/u/asmaaadel0',
    subject: 'hi',
    sendAt: '2019-08-24T14:15:22Z',
    isReply: false,
    isRead: true,
  };
  it ('should renders if MessagesInbox content is correct', () => {
    const wrapper = shallowMount (MessagesInbox, {
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
