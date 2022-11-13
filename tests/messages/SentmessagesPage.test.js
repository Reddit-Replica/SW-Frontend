import {shallowMount} from '@vue/test-utils';
import SentMessages from '../../src/pages/messages/SentMessages.vue';
import store from '../../src/store/index.js';

import {describe, it, expect} from 'vitest';
describe ('SentMessages', () => {
  const message = {
    id: 2,
    text: 'hello asmaa',
    receiverUsername: '/u/asmaaadel0',
    subject: 'hi',
    sendAt: '2019-08-24T14:15:22Z',
  };

  //--------------------------------------------------------
  //                     Rendering
  //--------------------------------------------------------
  it ('should renders if SentMessages content is correct', () => {
    const wrapper = shallowMount (SentMessages, {
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
  it ('Testing no message value is correct', () => {
    const wrapper = shallowMount (SentMessages, {
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

  //--------------------------------------------------------
  //                     Testing no message
  //--------------------------------------------------------
  it ('Testing no message value is correct', () => {
    const wrapper = shallowMount (SentMessages, {
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
