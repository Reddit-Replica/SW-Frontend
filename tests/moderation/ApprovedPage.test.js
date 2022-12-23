import {mount} from '@vue/test-utils';
import {shallowMount} from '@vue/test-utils';
import TheApproved from '../../src/pages/moderation/TheApproved.vue';
import Vuex from 'vuex';
// import store from '../../src/store/index.js';

import {describe, it, expect} from 'vitest';
describe ('TheApproved', () => {
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
  const listOfApproved = {
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
  it ('should renders if TheApproved content is correct', () => {
    const wrapper = shallowMount (TheApproved, {
      props: {
        listOfApproved,
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

  it ('Testing Approve user is correct', () => {
    const wrapper = mount (TheApproved, {
      props: {
        listOfApproved,
        search,
        noItems,
        invitedMod,
      },
      data () {
        return {
          listOfApproved,
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
    expect (wrapper.find ('#approve-user-button').text ()).contain (
      'Approve user'
    );
  });
  //--------------------------------------------------------
  //                     Testing clicking buttons
  //--------------------------------------------------------
  it ('Testing clicking Approve user button', () => {
    const wrapper = mount (TheApproved, {
      props: {
        listOfApproved,
        search,
        noItems,
        invitedMod,
      },
      data () {
        return {
          listOfApproved,
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
    const spamBtn = wrapper.find ('#approve-user-button');
    spamBtn
      .trigger ('click')
      .then (() => {
        expect (wrapper.text ()).contain ('Add user');
        expect (wrapper.text ()).contain ('Cancel');
      })
      .catch (function () {
        console.log ('Promise Rejected');
      });
  });

  it ('Testing clicking Cancel button', () => {
    const wrapper = mount (TheApproved, {
      props: {
        listOfApproved,
        search,
        noItems,
        invitedMod,
      },
      data () {
        return {
          listOfApproved,
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
    const spamBtn = wrapper.find ('#approve-user-button');
    spamBtn
      .trigger ('click')
      .then (() => {
        const cancel = wrapper.find ('#cancel-button');
        cancel.trigger ('click').then (() => {
          expect (wrapper.text ()).not.contain ('Add User');
        });
      })
      .catch (function () {
        console.log ('Promise Rejected');
      });
  });
});
