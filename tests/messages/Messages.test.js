import {mount} from '@vue/test-utils';
import MessagesComponent
  from '../../src/components/MessageComponents/MessagesComponent.vue';
import {describe, it, expect} from 'vitest';
import Vuex from 'vuex';
// import store from '../../src/store/index.js';
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
  const isRead = true;
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

  const usersAction = {
    getUserData: vi.fn (),
    getUserPostData: vi.fn (),
    getUserCommentsData: vi.fn (),
    AddNewSocialLink: vi.fn (),
    AddProfilePicture: vi.fn (),
    AddProfileBanner: vi.fn (),
    followUnfollowUser: vi.fn (),
    blockUnblockUser: vi.fn (),
    FetchListOfBlockedUsers: vi.fn (),
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
          postData: {
            after: 'string',
            before: 'string',
            children: [
              {
                kind: 'image',
                subreddit: 'string',
                content: 'string',
                images: [
                  {
                    path: 'string',
                    caption: 'string',
                    link: 'string',
                  },
                ],
                nsfw: true,
                spoiler: true,
                title: 'string',
                sharePostId: 'string',
                flair: {
                  id: 'string',
                  flairName: 'meta',
                  order: 0,
                  backgroundColor: 'rgb(100, 109, 115)',
                  textColor: 'rgb(255, 255, 255)',
                },
                comments: 0,
                votes: 0,
                postedAt: 'string',
                deletedAt: 'string',
                editedAt: 'string',
                postedBy: 'string',
                votingType: 1,
                saved: false,
                followed: false,
                hidden: false,
                spammed: false,
                inYourSubreddit: false,
                moderation: {
                  approve: {
                    approvedBy: 'string',
                    approvedDate: '2019-08-24T14:15:22Z',
                  },
                  remove: {
                    removedBy: 'string',
                    removedDate: '2019-08-24T14:15:22Z',
                  },
                  spam: {
                    spammedBy: 'string',
                    spammedDate: '2019-08-24T14:15:22Z',
                  },
                  lock: true,
                },
              },
            ],
          },
          commentsData: {
            before: 'string',
            after: 'string',
            children: [
              {
                id: 'string',
                data: {
                  post: {
                    kind: 'link',
                    title: 'string',
                    subreddit: 'string',
                    link: 'string',
                    images: [
                      {
                        path: 'string',
                        caption: 'string',
                        link: 'string',
                      },
                    ],
                    video: 'string',
                    content: {},
                    nsfw: true,
                    spoiler: true,
                    sharePostId: 'string',
                    flair: {
                      id: 'string',
                      flairName: 'string',
                      order: 0,
                      backgroundColor: 'string',
                      textColor: 'string',
                    },
                    comments: 0,
                    votes: 0,
                    postedAt: 'string',
                    sendReplies: true,
                    markedSpam: true,
                    suggestedSort: 'string',
                    editedAt: 'string',
                    postedBy: 'string',
                    votingType: 1,
                    saved: false,
                    followed: false,
                    hidden: false,
                    spammed: false,
                    inYourSubreddit: false,
                    moderation: {
                      approve: {
                        approvedBy: 'string',
                        approvedDate: '2019-08-24T14:15:22Z',
                      },
                      remove: {
                        removedBy: 'string',
                        removedDate: '2019-08-24T14:15:22Z',
                      },
                      spam: {
                        spammedBy: 'string',
                        spammedDate: '2019-08-24T14:15:22Z',
                      },
                      lock: true,
                    },
                  },
                  comments: [
                    {
                      commentId: 'string',
                      commentedBy: 'string',
                      commentBody: null,
                      points: 0,
                      publishTime: '2019-08-24T14:15:22Z',
                      editTime: '2019-08-24T14:15:22Z',
                      parent: 'string',
                      level: 2,
                      inYourSubreddit: true,
                      moderation: {
                        approve: {
                          approvedBy: 'string',
                          approvedDate: '2019-08-24T14:15:22Z',
                        },
                        remove: {
                          removedBy: 'string',
                          removedDate: '2019-08-24T14:15:22Z',
                        },
                        spam: {
                          spammedBy: 'string',
                          spammedDate: '2019-08-24T14:15:22Z',
                        },
                        lock: true,
                      },
                    },
                  ],
                },
              },
            ],
          },
          blockedUsersData: {
            before: 'string',
            after: 'string',
            children: [
              {
                id: 'string',
                data: {
                  username: 'string',
                  blockDate: '2019-08-24T14:15:22Z',
                  userImage: 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png',
                },
              },
            ],
          },
        },
        actions: usersAction,
      },
    },
  });
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

  // it ('Testing text message is correct', () => {
  //   const wrapper = mount (MessagesComponent, {
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
    // expect (wrapper.find ('#time-0').text ()).contain ('2 years ago');
  });

  // it ('Testing the Permalink button text is correct', () => {
  //   const wrapper = mount (MessagesComponent, {
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
  //   expect (wrapper.find ('#permalink-link-0').text ()).contain ('Permalink');
  // });

  // it ('Testing the delete button text is correct', () => {
  //   const wrapper = mount (MessagesComponent, {
  //     props: {
  //       message,
  //       index,
  //       count,
  //     },
  //     global: {
  //       // OR:
  //       mocks: {
  //         $store: store,
  //       },
  //     },
  //   });
  //   expect (wrapper.find ('#click-delete-0').text ()).contain ('Delete');
  // });

  // it ('Testing the spam button text is correct', () => {
  //   const wrapper = mount (MessagesComponent, {
  //     props: {
  //       message,
  //       index,
  //       count,
  //     },
  //     global: {
  //       // OR:
  //       mocks: {
  //         $store: store,
  //       },
  //     },
  //   });
  //   expect (wrapper.find ('#click-spam-0').text ()).contain ('spam');
  // });

  // it ('Testing the block button text is correct', () => {
  //   const wrapper = mount (MessagesComponent, {
  //     props: {
  //       message,
  //       index,
  //       count,
  //     },
  //     global: {
  //       // OR:
  //       mocks: {
  //         $store: store,
  //       },
  //     },
  //   });
  //   expect (wrapper.find ('#click-block-0').text ()).contain ('Block User');
  // });

  // it ('Testing the mark un read button text is correct', () => {
  //   const wrapper = mount (MessagesComponent, {
  //     props: {
  //       message,
  //       index,
  //       count,
  //     },
  //     global: {
  //       // OR:
  //       mocks: {
  //         $store: store,
  //       },
  //     },
  //   });
  //   expect (wrapper.find ('#mark-un-read-0').text ()).contain ('Mark Unread');
  // });

  // it ('Testing the mark un read button text is correct', () => {
  //   const wrapper = mount (MessagesComponent, {
  //     props: {
  //       message,
  //       index,
  //       count,
  //     },
  //     global: {
  //       // OR:
  //       mocks: {
  //         $store: store,
  //       },
  //     },
  //   });
  //   expect (wrapper.find ('#reply-0').text ()).contain ('Reply');
  // });
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
  // it ('Testing clicking delete', () => {
  //   const wrapper = mount (MessagesComponent, {
  //     props: {
  //       message,
  //       index,
  //       count,
  //     },
  //     global: {
  //       // OR:
  //       mocks: {
  //         $store: store,
  //         fetch: mockservice,
  //       },
  //     },
  //     computed: {
  //       ifMessageRecieved,
  //       getUserName,
  //     },
  //   });
  //   const deleteBtn = wrapper.find ('#delete-message-0');
  //   deleteBtn
  //     .trigger ('click')
  //     .then (() => {
  //       const yesBtn = wrapper.find ('#yes-delete-user-0');
  //       yesBtn
  //         .trigger ('click')
  //         .then (() => {
  //           expect (wrapper.text ()).contain ('');
  //         })
  //         .catch (function () {
  //           console.log ('Promise Rejected');
  //         });
  //     })
  //     .catch (function () {
  //       console.log ('Promise Rejected');
  //     });
  //   return Promise.resolve ();
  // });

  // it ('Testing clicking unread', () => {
  //   const wrapper = mount (MessagesComponent, {
  //     props: {
  //       message,
  //       index,
  //       count,
  //       isRead,
  //     },
  //     global: {
  //       // OR:
  //       mocks: {
  //         $store: store,
  //         fetch: mockservice,
  //       },
  //     },
  //     computed: {
  //       ifMessageRecieved,
  //       getUserName,
  //     },
  //   });
  //   const blockBtn = wrapper.find ('#mark-un-read-0');
  //   blockBtn
  //     .trigger ('click')
  //     .then (() => {
  //       expect (this.isRead == true).toBe (false);
  //     })
  //     .catch (function () {
  //       console.log ('Promise Rejected');
  //     });
  // });

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
