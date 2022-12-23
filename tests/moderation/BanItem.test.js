import {mount} from '@vue/test-utils';
import BanItem from '../../src/components/moderation/BanItem.vue';
import {describe, it, expect} from 'vitest';
import Vuex from 'vuex';
// import store from '../../src/store/index.js';
import mockservice from '../../../mockservice.txt';

describe ('BanItem.vue', () => {
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
    const wrapper = mount (BanItem, {
      props: {
        ban,
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

  it ('Testing input user ban is correct', () => {
    const wrapper = mount (BanItem, {
      props: {
        ban,
        index,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('asmaa');
  });

  it ('Testing time is correct', () => {
    const wrapper = mount (BanItem, {
      props: {
        ban,
        index,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('(Permanent)•');
  });

  it ('Testing button Edit ban is correct', () => {
    const wrapper = mount (BanItem, {
      props: {
        ban,
        index,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('#button-edit0').text ()).contain ('Edit');
  });

  it ('Testing button More Details ban is correct', () => {
    const wrapper = mount (BanItem, {
      props: {
        ban,
        index,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('#button-more-details0').text ()).contain (
      'More Details'
    );
  });

  it ('Testing More Details is correct', () => {
    const wrapper = mount (BanItem, {
      props: {
        ban,
        index,
      },
      data () {
        return {
          viewDetails: true,
        };
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('Banned For:');
  });

  it ('Testing reason For Ban is correct', () => {
    const wrapper = mount (BanItem, {
      props: {
        ban,
        index,
      },
      data () {
        return {
          viewDetails: true,
        };
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('reason');
  });
});
