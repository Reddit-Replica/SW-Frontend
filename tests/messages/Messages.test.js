import {mount} from '@vue/test-utils';
import MessagesComponent
  from '../../src/components/MessageComponents/MessagesComponent.vue';
import {describe, it, expect} from 'vitest';
import Vuex from 'vuex';
import store from '../../src/store/index.js';
import mockservice from '../../../mockservice.txt';

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
  let count = 2;
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
  it ('Testing the time is correct', () => {
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
    expect (wrapper.find ('#time-0').text ()).contain ('2019-08-24T14:15:22Z');
  });

  it ('Testing the Permalink button text is correct', () => {
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
    expect (wrapper.find ('#permalink-link-0').text ()).contain ('Permalink');
  });

  it ('Testing the delete button text is correct', () => {
    const wrapper = mount (MessagesComponent, {
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
    });
    expect (wrapper.find ('#click-delete-0').text ()).contain ('Delete');
  });

  it ('Testing the spam button text is correct', () => {
    const wrapper = mount (MessagesComponent, {
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
    });
    expect (wrapper.find ('#click-spam-0').text ()).contain ('spam');
  });

  it ('Testing the block button text is correct', () => {
    const wrapper = mount (MessagesComponent, {
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
    });
    expect (wrapper.find ('#click-block-0').text ()).contain ('Block User');
  });

  it ('Testing the mark un read button text is correct', () => {
    const wrapper = mount (MessagesComponent, {
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
    });
    expect (wrapper.find ('#mark-un-read-0').text ()).contain ('Mark Unread');
  });

  it ('Testing the mark un read button text is correct', () => {
    const wrapper = mount (MessagesComponent, {
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
    });
    expect (wrapper.find ('#reply-0').text ()).contain ('Reply');
  });
  //--------------------------------------------------------
  //                     Testing message color background page
  //--------------------------------------------------------
  it ('Testing block message background is white', () => {
    const wrapper = mount (MessagesComponent, {
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
  //--------------------------------------------------------
  //                     Testing clickig buttons
  //--------------------------------------------------------
  it ('Testing clicking delete', () => {
    const wrapper = mount (MessagesComponent, {
      props: {
        message,
        index,
        count,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
          fetch: mockservice,
        },
      },
    });
    const deleteBtn = wrapper.find ('#click-delete-0');
    deleteBtn
      .trigger ('click')
      .then (() => {
        const yesBtn = wrapper.find ('#yes-delete-user-0');
        yesBtn
          .trigger ('click')
          .then (() => {
            expect (wrapper.text ()).contain ('');
          })
          .catch (function () {
            console.log ('Promise Rejected');
          });
      })
      .catch (function () {
        console.log ('Promise Rejected');
      });
    return Promise.resolve ();
  });

  it ('Testing clicking unread', () => {
    const wrapper = mount (MessagesComponent, {
      props: {
        message,
        index,
        count,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
          fetch: mockservice,
        },
      },
      data () {
        return {
          isRead: true,
        };
      },
    });
    const blockBtn = wrapper.find ('#unread-0');
    blockBtn
      .trigger ('click')
      .then (() => {
        expect (this.isRead == true).toBe (false);
      })
      .catch (function () {
        console.log ('Promise Rejected');
      });
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
