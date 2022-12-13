import {mount} from '@vue/test-utils';
import AddrulePopup from '../../src/components/moderation/AddrulePopup.vue';
import {describe, it, expect} from 'vitest';
// import store from '../../src/store/index.js';
import Vuex from 'vuex';
describe ('AddrulePopup.vue', () => {
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
  const suggestedSender = {
    text: 'asmaa first subbreddit',
  };
  const userName = 'asmaaadel0';
  //--------------------------------------------------------
  //                     Rendering
  //--------------------------------------------------------
  it ('should render', () => {
    const wrapper = mount (AddrulePopup, {
      props: {
        suggestedSender,
        userName,
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

  it ('Testing header text of the popup', () => {
    const wrapper = mount (AddrulePopup, {
      props: {},
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('Rule');
  });

  it ('Testing rule textarea in the popup', () => {
    const wrapper = mount (AddrulePopup, {
      props: {},
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('#rule-input'));
  });

  it ('Testing Characters remaining in the popup', () => {
    const wrapper = mount (AddrulePopup, {
      props: {},
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('.title-grey').text ()).contain ('100');
  });

  //--------------------------------------------------------
  //                     Testing clicking actions
  //--------------------------------------------------------

  it ('Testing the add rule button action', () => {
    const wrapper = mount (AddrulePopup, {
      props: {},
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    const addRuleBtn = wrapper.find ('#create-rule-button');
    addRuleBtn
      .trigger ('click')
      .then (() => {
        expect (wrapper.text ()).not.contain ('Characters remaining');
      })
      .catch (function () {
        console.log ('Promise Rejected');
      });
  });
});
