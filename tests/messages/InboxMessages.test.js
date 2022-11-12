import {mount} from '@vue/test-utils';
import AllinboxComponent
  from '../../src/components/MessageComponents/AllinboxComponent.vue';
import {describe, it, expect} from 'vitest';
import Vuex from 'vuex';
import store from '../../src/store/index.js';

describe ('AllinboxComponent.vue', () => {
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
  const index = 0;
  let count = 2;
  //--------------------------------------------------------
  //                     Rendering
  //--------------------------------------------------------
  it ('should render', () => {
    const wrapper = mount (AllinboxComponent);
  });

  //--------------------------------------------------------
  //                     Testing content page
  //--------------------------------------------------------

  it ('Testing the sender name is correct', () => {
    const wrapper = mount (AllinboxComponent, {
      props: {
        message,
        index,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('#message-sender-0').text ()).contain (
      '/u/hoda_gamal'
    );
  });

  it ('Testing the reciever name is correct', () => {
    const wrapper = mount (AllinboxComponent, {
      props: {
        message,
        index,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('#message-receiver-0').text ()).contain (
      '/u/asmaaadel0'
    );
  });

  it ('Testing subject is correct', () => {
    const wrapper = mount (AllinboxComponent, {
      props: {
        message,
        index,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('.subject-text').text ()).contain ('hi');
  });

  it ('Testing text message is correct', () => {
    const wrapper = mount (AllinboxComponent, {
      props: {
        message,
        index,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('.md').text ()).contain ('hello asmaa');
  });

  //--------------------------------------------------------
  //                     Testing message color background page
  //--------------------------------------------------------
  it ('Testing block message background is white', () => {
    const wrapper = mount (AllinboxComponent, {
      props: {
        message,
        index,
        count,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
      data () {
        return {
          backcolor: 'grey',
        };
      },
    });
    expect (this.backcolor == 'grey').toBe (false);
  });
});
