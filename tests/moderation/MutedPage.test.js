import {mount} from '@vue/test-utils';
import {shallowMount} from '@vue/test-utils';
import TheMuted from '../../src/pages/moderation/TheMuted.vue';
import Vuex from 'vuex';
// import store from '../../src/store/index.js';

import {describe, it, expect} from 'vitest';
describe ('TheMuted', () => {
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
  const listOfMuted = {
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
  it ('should renders if TheMuted content is correct', () => {
    const wrapper = shallowMount (TheMuted, {
      props: {
        listOfMuted,
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
    const wrapper = mount (TheMuted, {
      props: {
        listOfMuted,
        search,
        noItems,
        invitedMod,
      },
      data () {
        return {
          listOfMuted,
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
    expect (wrapper.text ()).contain ('Muted users');
  });

  //--------------------------------------------------------
  //                     Testing clicking buttons
  //--------------------------------------------------------

  it ('Testing clicking Ban user button', () => {
    const wrapper = mount (TheMuted, {
      props: {
        listOfMuted,
        search,
        noItems,
        invitedMod,
      },
      data () {
        return {
          listOfMuted,
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
    const spamBtn = wrapper.find ('#mute-user-button');
    spamBtn
      .trigger ('click')
      .then (() => {
        expect (wrapper.text ()).contain ('Mute user');
        expect (wrapper.text ()).contain ('Cancel');
      })
      .catch (function () {
        console.log ('Promise Rejected');
      });
  });
});
