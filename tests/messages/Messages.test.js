import {mount} from '@vue/test-utils';
import MessagesComponent
  from '../../src/components/MessageComponents/MessagesComponent.vue';
import {describe, it, expect} from 'vitest';
import Vuex from 'vuex';
import store from '../../src/store/index.js';

describe ('PostreplyComponent.vue', () => {
  const message = {
    id: 2,
    text: 'hello asmaa',
    senderUsername: '/u/hoda_gamal',
    receiverUsername: '/u/asmaaadel0',
    sendAt: '2019-08-24T14:15:22Z',
    subject: 'hi',
    isReply: false,
    isRead: true,
  };
  let ifMessageRecieved = false;
  let getUserName = '/u/asmaaadel0';
  const index = 0;
  //--------------------------------------------------------
  //                     Rendering
  //--------------------------------------------------------
  it ('should render', () => {
    const wrapper = mount (MessagesComponent, {
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
      computed: {
        ifMessageRecieved,
        getUserName,
      },
    });
  });

  //--------------------------------------------------------
  //                     Testing content page
  //--------------------------------------------------------

  it ('Testing the sender name is correct', () => {
    const wrapper = mount (MessagesComponent, {
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
      computed: {
        ifMessageRecieved,
        getUserName,
      },
    });
    expect (wrapper.find ('.subject-text').text ()).contain ('/u/asmaaadel0');
  });

  it ('Testing the reciever name is correct', () => {
    const wrapper = mount (MessagesComponent, {
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
      computed: {
        ifMessageRecieved,
      },
    });
    expect (wrapper.find ('#message-receiver-0').text ()).contain (
      '/u/asmaaadel0'
    );
  });

  it ('Testing subject is correct', () => {
    const wrapper = mount (MessagesComponent, {
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
    const wrapper = mount (MessagesComponent, {
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
  //                     testing clicking on buttons
  //--------------------------------------------------------
  it ('Testing expand all button is correct', () => {
    const wrapper = mount (MessagesComponent, {
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
    expect (wrapper.find ('#expand-all-0').text ()).contain ('expand all');
    wrapper
      .find ('#expand-all-0')
      .trigger ('click')
      .then (() => {
        expect (wrapper.text ()).contain ('hello asmaa');
      })
      .catch (function () {
        console.log ('Promise Rejected');
      });
  });

  it ('Testing collapse all button is correct', () => {
    const wrapper = mount (MessagesComponent, {
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
    expect (wrapper.find ('#collapse-all-0').text ()).contain ('collapse all');
    wrapper
      .find ('#collapse-all-0')
      .trigger ('click')
      .then (() => {
        expect (wrapper.text ()).not.contain ('hello asmaa');
      })
      .catch (function () {
        console.log ('Promise Rejected');
      });
  });
});
