import {mount} from '@vue/test-utils';
import AllinboxComponent
  from '../../src/components/MessageComponents/AllinboxComponent.vue';
import {describe, it, expect} from 'vitest';
import Vuex from 'vuex';
import store from '../../src/store/index.js';
import mockservice from '../../../mockservice.txt';

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
  store = new Vuex.Store ({
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
    },
  });
  //--------------------------------------------------------
  //                     Rendering
  //--------------------------------------------------------
  it ('should render', () => {
    const wrapper = mount (AllinboxComponent, {
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

//   it ('Testing the sender name is correct', () => {
//     const wrapper = mount (AllinboxComponent, {
//       props: {
//         message,
//         index,
//       },
//       global: {
//         // OR:
//         mocks: {
//           $store: store,
//         },
//       },
//     });
//     expect (wrapper.find ('#message-sender-0').text ()).contain (
//       '/u/hoda_gamal'
//     );
//   });

//   it ('Testing the reciever name is correct', () => {
//     const wrapper = mount (AllinboxComponent, {
//       props: {
//         message,
//         index,
//       },
//       global: {
//         // OR:
//         mocks: {
//           $store: store,
//         },
//       },
//     });
//     expect (wrapper.find ('#message-receiver-0').text ()).contain (
//       '/u/asmaaadel0'
//     );
//   });

//   it ('Testing subject is correct', () => {
//     const wrapper = mount (AllinboxComponent, {
//       props: {
//         message,
//         index,
//       },
//       global: {
//         // OR:
//         mocks: {
//           $store: store,
//         },
//       },
//     });
//     expect (wrapper.find ('.subject-text').text ()).contain ('hi');
//   });

//   // it ('Testing text message is correct', () => {
//   //   const wrapper = mount (AllinboxComponent, {
//   //     props: {
//   //       message,
//   //       index,
//   //     },
//   //     global: {
//   //       // OR:
//   //       mocks: {
//   //         $store: store,
//   //       },
//   //     },
//   //   });
//   //   expect (wrapper.find ('#md').text ()).contain ('hello asmaa');
//   // });

//   it ('Testing the time is correct', () => {
//     const wrapper = mount (AllinboxComponent, {
//       props: {
//         message,
//         index,
//       },
//       global: {
//         // OR:
//         mocks: {
//           $store: store,
//         },
//       },
//     });
//     // expect (wrapper.find ('#time-0').text ()).contain ('2 years ago');
//   });

//   // it ('Testing the Permalink button text is correct', () => {
//   //   const wrapper = mount (AllinboxComponent, {
//   //     props: {
//   //       message,
//   //       index,
//   //     },
//   //     global: {
//   //       // OR:
//   //       mocks: {
//   //         $store: store,
//   //       },
//   //     },
//   //   });
//   //   expect (wrapper.find ('#permalink-a-0').text ()).contain ('Permalink');
//   // });

//   it ('Testing the delete button text is correct', () => {
//     const wrapper = mount (AllinboxComponent, {
//       props: {
//         message,
//         index,
//         count,
//       },
//       global: {
//         // OR:
//         mocks: {
//           $store: store,
//         },
//       },
//     });
//     expect (wrapper.find ('#click-delete-0').text ()).contain ('Delete');
//   });

//   it ('Testing the spam button text is correct', () => {
//     const wrapper = mount (AllinboxComponent, {
//       props: {
//         message,
//         index,
//         count,
//       },
//       global: {
//         // OR:
//         mocks: {
//           $store: store,
//         },
//       },
//     });
//     expect (wrapper.find ('#click-spam-0').text ()).contain ('spam');
//   });

//   it ('Testing the block button text is correct', () => {
//     const wrapper = mount (AllinboxComponent, {
//       props: {
//         message,
//         index,
//         count,
//       },
//       global: {
//         // OR:
//         mocks: {
//           $store: store,
//         },
//       },
//     });
//     expect (wrapper.find ('#block-user-0').text ()).contain ('Block User');
//   });

//   it ('Testing the mark un read button text is correct', () => {
//     const wrapper = mount (AllinboxComponent, {
//       props: {
//         message,
//         index,
//         count,
//       },
//       global: {
//         // OR:
//         mocks: {
//           $store: store,
//         },
//       },
//     });
//     expect (wrapper.find ('#mark-un-read-0').text ()).contain ('Mark Unread');
//   });

//   it ('Testing the mark reply button text is correct', () => {
//     const wrapper = mount (AllinboxComponent, {
//       props: {
//         message,
//         index,
//         count,
//       },
//       global: {
//         // OR:
//         mocks: {
//           $store: store,
//         },
//       },
//     });
//     expect (wrapper.find ('#reply-0').text ()).contain ('Reply');
//   });

//   //--------------------------------------------------------
//   //                     Testing message color background page
//   //--------------------------------------------------------

//   it ('Testing block message background is white', () => {
//     const wrapper = mount (AllinboxComponent, {
//       props: {
//         message,
//         index,
//         count,
//       },
//       global: {
//         // OR:
//         mocks: {
//           $store: store,
//         },
//       },
//       data () {
//         return {
//           backcolor: 'grey',
//         };
//       },
//     });
//     expect (this.backcolor == 'grey').toBe (false);
//   });

//   //--------------------------------------------------------
//   //                     Testing clickig buttons
//   //--------------------------------------------------------
//   it ('Testing clicking delete', () => {
//     const wrapper = mount (AllinboxComponent, {
//       props: {
//         message,
//         index,
//         count,
//       },
//       global: {
//         // OR:
//         mocks: {
//           $store: store,
//           fetch: mockservice,
//         },
//       },
//     });
//     const deleteBtn = wrapper.find ('#click-delete-0');
//     deleteBtn
//       .trigger ('click')
//       .then (() => {
//         const yesBtn = wrapper.find ('#yes-delete-user-0');
//         yesBtn
//           .trigger ('click')
//           .then (() => {
//             expect (wrapper.text ()).contain ('');
//           })
//           .catch (function () {
//             console.log ('Promise Rejected');
//           });
//       })
//       .catch (function () {
//         console.log ('Promise Rejected');
//       });
//     return Promise.resolve ();
//   });

//   it ('Testing clicking spam', () => {
//     const wrapper = mount (AllinboxComponent, {
//       props: {
//         message,
//         index,
//         count,
//       },
//       global: {
//         // OR:
//         mocks: {
//           $store: store,
//           fetch: mockservice,
//         },
//       },
//       data () {
//         return {
//           isRead: false,
//         };
//       },
//     });
//     const spamBtn = wrapper.find ('#click-spam-0');
//     spamBtn
//       .trigger ('click')
//       .then (() => {
//         const yesBtn = wrapper.find ('#yes-spam-user-0');
//         yesBtn
//           .trigger ('click')
//           .then (() => {
//             expect (wrapper.text ()).contain ('spammed');
//           })
//           .catch (function () {
//             console.log ('Promise Rejected');
//           });
//       })
//       .catch (function () {
//         console.log ('Promise Rejected');
//       });
//   });

//   it ('Testing clicking block', async () => {
//     const wrapper = mount (AllinboxComponent, {
//       props: {
//         message,
//         index,
//         count,
//       },
//       global: {
//         // OR:
//         mocks: {
//           $store: store,
//           fetch: mockservice,
//         },
//       },
//     });
//     const blockBtn = wrapper.find ('#block-user-0');
//     blockBtn
//       .trigger ('click')
//       .then (() => {
//         const yesBtn = wrapper.find ('#yes-block-user-0');
//         yesBtn
//           .trigger ('click')
//           .then (() => {
//             expect (wrapper.text ())
//               .contain ('')
//               .toBeCalledWith ('uncaughtException', expect.any (Function));
//           })
//           .catch (function () {
//             console.log ('Promise Rejected');
//           });
//       })
//       .catch (function () {
//         console.log ('Promise Rejected');
//       });
//   });

//   it ('Testing clicking unread', () => {
//     const wrapper = mount (AllinboxComponent, {
//       props: {
//         message,
//         index,
//         count,
//       },
//       global: {
//         // OR:
//         mocks: {
//           $store: store,
//           fetch: mockservice,
//         },
//       },
//       data () {
//         return {
//           isRead: true,
//         };
//       },
//     });
//     const blockBtn = wrapper.find ('#unread-0');
//     blockBtn
//       .trigger ('click')
//       .then (() => {
//         expect (this.isRead == true).toBe (false);
//       })
//       .catch (function () {
//         console.log ('Promise Rejected');
//       });
//   });
});
