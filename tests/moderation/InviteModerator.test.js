import {mount} from '@vue/test-utils';
import InviteModerator
  from '../../src/components/moderation/InviteModerator.vue';
import {describe, it, expect} from 'vitest';
import Vuex from 'vuex';
// import store from '../../src/store/index.js';
import mockservice from '../../../mockservice.txt';

describe ('InviteModerator.vue', () => {
  //Mocking the store
  let store = new Vuex.Store ({
    modules: {
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
    const wrapper = mount (InviteModerator, {
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

  it ('Testing choose Everything text is correct', () => {
    const wrapper = mount (InviteModerator, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('Everything');
  });

  it ('Testing choose Everything text details is correct', () => {
    const wrapper = mount (InviteModerator, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain (
      'Full access including the ability to manage moderator access and permissions'
    );
  });

  it ('Testing choose Manage Users text is correct', () => {
    const wrapper = mount (InviteModerator, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('Manage Users');
  });

  it ('Testing choose Manage Users text details is correct', () => {
    const wrapper = mount (InviteModerator, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain (
      'Access mod notes, ban and mute users, and approve submitters*.'
    );
  });

  it ('Testing choose Manage Settings text is correct', () => {
    const wrapper = mount (InviteModerator, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('Manage Settings');
  });

  it ('Testing choose Manage Settings text details is correct', () => {
    const wrapper = mount (InviteModerator, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain (
      'Manage community settings, appearance, emojis, rules, and AutoMod*.'
    );
  });

  it ('Testing choose Manage Flair is correct', () => {
    const wrapper = mount (InviteModerator, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('Manage Flair');
  });

  it ('Testing choose Manage Flair is correct', () => {
    const wrapper = mount (InviteModerator, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('Create and manage user and post flair.');
  });

  it ('Testing choose Manage Posts & Comments is correct', () => {
    const wrapper = mount (InviteModerator, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('Manage Posts & Comments');
  });

  it ('Testing choose Manage Manage Posts & Comments is correct', () => {
    const wrapper = mount (InviteModerator, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain (
      'Access queues, take action on content, and manage collections and events.'
    );
  });

  it ('Testing choose Cancel button is correct', () => {
    const wrapper = mount (InviteModerator, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('#cancel-button').text ()).contain ('Cancel');
  });

  it ('Testing choose Invite button is correct', () => {
    const wrapper = mount (InviteModerator, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('#invite-moderation-button').text ()).contain (
      'Invite'
    );
  });
});
