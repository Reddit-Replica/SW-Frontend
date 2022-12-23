import {mount} from '@vue/test-utils';
import {shallowMount} from '@vue/test-utils';
import TheBanned from '../../src/pages/moderation/TheBanned.vue';
import Vuex from 'vuex';
// import store from '../../src/store/index.js';

import {describe, it, expect} from 'vitest';
describe ('TheBanned', () => {
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
  const listOfBanned = {
    username: 'asmaa',
    nickname: 'asmaa',
    dateOfModeration: '2 years ago',
    permissions: ['everything'],
  };
  const subredditName = 'subredditName';
  let noItems = true;
  const search = 'asmaa';
  const invitedMod = true;

  //--------------------------------------------------------
  //                     Rendering
  //--------------------------------------------------------
  it ('should renders if TheBanned content is correct', () => {
    const wrapper = shallowMount (TheBanned, {
      props: {
        listOfBanned,
      },
      computed: {
        subredditName,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.exists ()).toBe (true);
  });

  //--------------------------------------------------------
  //                     Testing content page
  //--------------------------------------------------------

  it ('Testing content is correct', () => {
    const wrapper = mount (TheBanned, {
      props: {
        listOfBanned,
        search,
        noItems,
        invitedMod,
      },
      data () {
        return {
          listOfBanned,
          search,
          noItems,
          invitedMod,
        };
      },
      computed: {
        subredditName,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('Banned users');
  });

  //--------------------------------------------------------
  //                     Testing clicking buttons
  //--------------------------------------------------------

  it ('Testing clicking Ban user button', () => {
    const wrapper = mount (TheBanned, {
      props: {
        listOfBanned,
        search,
        noItems,
        invitedMod,
      },
      data () {
        return {
          listOfBanned,
          search,
          noItems,
          invitedMod,
        };
      },
      computed: {
        subredditName,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    const spamBtn = wrapper.find ('#ban-user-button');
    spamBtn
      .trigger ('click')
      .then (() => {
        expect (wrapper.text ()).contain ('Ban user');
        expect (wrapper.text ()).contain ('Cancel');
      })
      .catch (function () {
        console.log ('Promise Rejected');
      });
  });
});
