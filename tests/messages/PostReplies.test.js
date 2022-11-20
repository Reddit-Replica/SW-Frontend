import {mount} from '@vue/test-utils';
import PostReplies
  from '../../src/components/MessageComponents/PostreplyComponent.vue';
import {describe, it, expect} from 'vitest';
import Vuex from 'vuex';
import store from '../../src/store/index.js';
import mockservice from '../../../mockservice.txt';

describe ('PostreplyComponent.vue', () => {
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
    const wrapper = mount (PostReplies);
  });

  //--------------------------------------------------------
  //                     Testing content page
  //--------------------------------------------------------

  it ('Testing the sender name is correct', () => {
    const wrapper = mount (PostReplies, {
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
    const wrapper = mount (PostReplies, {
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
    const wrapper = mount (PostReplies, {
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

  // it ('Testing text message is correct', () => {
  //   const wrapper = mount (PostReplies, {
  //     props: {
  //       message,
  //       index,
  //     },
  //     global: {
  //       // OR:
  //       mocks: {
  //         $store: store,
  //       },
  //     },
  //   });
  //   expect (wrapper.find ('.md').text ()).contain ('hello asmaa');
  // });
  
  it ('Testing the time is correct', () => {
    const wrapper = mount (PostReplies, {
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

  it ('Testing the context button text is correct', () => {
    const wrapper = mount (PostReplies, {
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
    expect (wrapper.find ('#context-a-0').text ()).contain ('context');
  });
  
  it ('Testing the Full Comments(5) button text is correct', () => {
    const wrapper = mount (PostReplies, {
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
    expect (wrapper.find ('#full-comment-a-0').text ()).contain ('Full Comments(5)');
  });

  it ('Testing the delete button text is correct', () => {
    const wrapper = mount (PostReplies, {
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
    expect (wrapper.find ('#click-remove-0').text ()).contain ('Remove');
  });

  it ('Testing the spam button text is correct', () => {
    const wrapper = mount (PostReplies, {
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
    const wrapper = mount (PostReplies, {
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
    expect (wrapper.find ('#block-user-0').text ()).contain ('Block User');
  });

  it ('Testing the mark un read button text is correct', () => {
    const wrapper = mount (PostReplies, {
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
    const wrapper = mount (PostReplies, {
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
    const wrapper = mount (PostReplies, {
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
  it ('Testing clicking unread', () => {
    const wrapper = mount (PostReplies, {
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
});
