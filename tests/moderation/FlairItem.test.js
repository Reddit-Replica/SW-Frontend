import {mount} from '@vue/test-utils';
import FlairItem from '../../src/components/moderation/FlairItem.vue';
import {describe, it, expect} from 'vitest';
import Vuex from 'vuex';
// import store from '../../src/store/index.js';
import mockservice from '../../../mockservice.txt';

describe ('FlairItem.vue', () => {
  const flair = {
    flairId: 'id',
    flairName: 'name',
    flairOrder: 'order',
    backgroundColor: 'color',
    textColor: 'color',
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
    const wrapper = mount (FlairItem, {
      props: {
        flair,
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

  it ('Testing flair text is correct', () => {
    const wrapper = mount (FlairItem, {
      props: {
        flair,
        index,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('name');
  });

  it ('Testing button Edit flair is correct', () => {
    const wrapper = mount (FlairItem, {
      props: {
        flair,
        index,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('#edit-flair-0').text ()).contain ('Edit');
  });
});
