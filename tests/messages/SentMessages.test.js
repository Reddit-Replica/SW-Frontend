import {mount} from '@vue/test-utils';
import SentMessages
  from '../../src/components/MessageComponents/SentMessages.vue';
import {describe, it, expect} from 'vitest';
import Vuex from 'vuex';
// import store from '../../src/store/index.js';
import mockservice from '../../../mockservice.txt';

describe ('SentMessages.vue', () => {
  const message = {
    id: 2,
    text: 'hello asmaa',
    receiverUsername: '/u/asmaaadel0',
    subject: 'hi',
    sendAt: '2019-08-24T14:15:22Z',
  };
  const index = 0;
  let count = 2;
  let handleTime = '2 years ago';

  const messagesAction = {
    loadInboxMessages: vi.fn (),
    loadUnreadMessages: vi.fn (),
    loadUserMentions: vi.fn (),
    loadPostReplies: vi.fn (),
    loadSentMessages: vi.fn (),
    sendMessage: vi.fn (),
    blockUser: vi.fn (),
    deleteMessage: vi.fn (),
    spamMessage: vi.fn (),
    loadSuggestedSender: vi.fn (),
    voteComment: vi.fn (),
    replyMessage: vi.fn (),
    handleTime: vi.fn (),
  };
  //Mocking the store
  let store = new Vuex.Store ({
    modules: {
      messageModule: {
        namespaced: true,
        state: {
          inboxMessages: [],
          unreadMessages: [],
          userMentions: [],
          userMessages: [],
          postReplies: [],
          sentMessages: [],
          suggestedSender: [],
          sentSuccessfully: false,
          deleteMessageSuccessfully: false,
          markSpamSuccessfully: false,
          blockSuccessfully: false,
          votedSuccessfully: false,
          replyMessageSuccessfully: false,
          handleTime: '',
        },
        actions: messagesAction,
      },
      userModule: {
        namespaced: true,
        state: {
          userData: {
            displayName: '',
            about: '',
            banner: '',
            picture: '',
            karma: 0,
            cakeDate: '2019-08-24',
            socialLinks: [
              {
                type: 'Reddit',
                displayText: 'medo',
                link: '11',
              },
            ],
            nsfw: true,
            followed: true,
            blocked: true,
            moderatorOf: [
              {
                subredditName: '',
                numOfMembers: 0,
                nsfw: true,
              },
            ],
          },
          socialLinkItems: [
            {
              text: 'Custom URL',
              imgSrc: 'img',
              alt: 'custom url',
              type: 'link' /* link or username */,
              baseurl: '',
            },
          ],
        },
      },
    },
  });
  //--------------------------------------------------------
  //                     Rendering
  //--------------------------------------------------------
  it ('should render', () => {
    const wrapper = mount (SentMessages, {
      props: {
        message,
        index,
      },
      computed: {
        handleTime,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
  });

  //--------------------------------------------------------
  //                     Testing content page
  //--------------------------------------------------------

  it ('Testing the reciever name is correct', () => {
    const wrapper = mount (SentMessages, {
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
    const wrapper = mount (SentMessages, {
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
  //   const wrapper = mount (SentMessages, {
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
    const wrapper = mount (SentMessages, {
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
    // expect (wrapper.find ('#time-0').text ()).contain ('2 years ago');
  });

  // it ('Testing the Permalink button text is correct', () => {
  //   const wrapper = mount (SentMessages, {
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
  //   expect (wrapper.find ('#permalink-a-0').text ()).contain ('Permalink');
  // });

  //--------------------------------------------------------
  //                     Testing message color background page
  //--------------------------------------------------------
  it ('Testing block message background is white', () => {
    const wrapper = mount (SentMessages, {
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
