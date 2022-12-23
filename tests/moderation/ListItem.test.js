import {mount} from '@vue/test-utils';
import ListItem from '../../src/components/moderation/ListItem.vue';
import {describe, it, expect} from 'vitest';
import Vuex from 'vuex';
// import store from '../../src/store/index.js';
import mockservice from '../../../mockservice.txt';

describe ('ListItem.vue', () => {
  const moderator = {
    username: 'username',
    avatar: '',
    dateOfModeration: 'date',
    permissions: ['permission'],
  };
  const index = 0;

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
    const wrapper = mount (ListItem, {
      props: {
        moderator,
        index,
      },
      beforeMount () {
        calculateTime: vi.fn ();
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

  it ('Testing moderator username is correct', () => {
    const wrapper = mount (ListItem, {
      props: {
        moderator,
        index,
      },
      beforeMount () {
        calculateTime: vi.fn ();
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('username');
  });

  it ('Testing moderator permission is correct', () => {
    const wrapper = mount (ListItem, {
      props: {
        moderator,
        index,
      },
      beforeMount () {
        calculateTime: vi.fn ();
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('#permission-0').text ()).contain ('permission');
  });

  it ('Testing invitation text is correct', () => {
    const wrapper = mount (ListItem, {
      props: {
        moderator,
        index,
      },
      beforeMount () {
        calculateTime: vi.fn ();
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain (
      'Are you sure you want to rescind the moderator invite to'
    );
  });

  it ('Testing Cancel button is correct', () => {
    const wrapper = mount (ListItem, {
      props: {
        moderator,
        index,
      },
      beforeMount () {
        calculateTime: vi.fn ();
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('#cancel-button0').text ()).contain ('Cancel');
  });

  it ('Testing Cancel button is correct', () => {
    const wrapper = mount (ListItem, {
      props: {
        moderator,
        index,
      },
      beforeMount () {
        calculateTime: vi.fn ();
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('#create-rule-button0').text ()).contain ('Remove');
  });
});
