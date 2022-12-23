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
  // it ('Testing button Edit flair is correct', () => {
  //   const wrapper = mount (InviteModerator, {
  //     props: {
  //       flair,
  //       index,
  //     },
  //     global: {
  //       // OR:
  //       mocks: {
  //         $store: store,
  //       },
  //     },
  //   });
  //   expect (wrapper.find ('#edit-flair-0').text ()).contain ('Edit');
  // });
});
