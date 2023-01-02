import {mount} from '@vue/test-utils';
import deleteFlair from '../../src/components/moderation/deleteFlair.vue';
import {describe, it, expect} from 'vitest';
import Vuex from 'vuex';
// import store from '../../src/store/index.js';
import mockservice from '../../../mockservice.txt';

describe ('deleteFlair.vue', () => {
  const ban = {
    username: 'asmaa',
    userId: 'id',
    avatar: '',
    bannedAt: '10-10-2002',
    banPeriod: false,
    modNote: 'note',
    noteInclude: 'note include',
    reasonForBan: 'reason',
  };
  const index = 0;
  let count = 2;
  let handleTime = '2 years ago';

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
    const wrapper = mount (deleteFlair, {
      props: {
        ban,
        index,
      },
      computed: {
        handleTime,
      },
      methods: {
        hideSure: vi.fn (),
        deleteFlair: vi.fn (),
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

  it ('Testing delete flair test is correct', () => {
    const wrapper = mount (deleteFlair, {
      props: {
        ban,
        index,
      },
      methods: {
        hideSure: vi.fn (),
        deleteFlair: vi.fn (),
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('Do you wish to delete this post flair?');
  });

  it ('Testing button Cancel flair is correct', () => {
    const wrapper = mount (deleteFlair, {
      props: {
        ban,
        index,
      },
      methods: {
        hideSure: vi.fn (),
        deleteFlair: vi.fn (),
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('#cancel-button').text ()).contain ('Cancel');
  });

  it ('Testing button Delete flair is correct', () => {
    const wrapper = mount (deleteFlair, {
      props: {
        ban,
        index,
      },
      methods: {
        hideSure: vi.fn (),
        deleteFlair: vi.fn (),
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('#delete-flair-button').text ()).contain ('Delete');
  });
});
