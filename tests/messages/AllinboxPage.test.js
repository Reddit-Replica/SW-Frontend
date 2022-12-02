import {shallowMount} from '@vue/test-utils';
import AllinboxPage from '../../src/pages/messages/AllInbox.vue';
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
  const emptyMessage = {};

  //--------------------------------------------------------
  //                     Rendering
  //--------------------------------------------------------

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

  //--------------------------------------------------------
  //                     Testing no message
  //--------------------------------------------------------

  // it ('Testing no message value is true if there is no messages', () => {
  //   const data = {
  //     noMessages: true,
  //     emptyMessage: [],
	// 	};
  //   const wrapper = shallowMount (AllinboxPage, {
  //     props: {
  //       data,
  //     },
  //     global: {
  //       // OR:
  //       mocks: {
  //         $store: store,
  //       },
  //     },
  //   });
  //   expect (wrapper.text ()).contain ('seem to be anything here');
  // });

  it ('Testing no message value is false if there is message', () => {
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
    expect (wrapper.text ()).not.contain ('seem to be anything here');
  });
});
