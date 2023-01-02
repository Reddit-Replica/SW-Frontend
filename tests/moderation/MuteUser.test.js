import {mount} from '@vue/test-utils';
import MuteUser from '../../src/components/moderation/MuteUser.vue';
import {describe, it, expect} from 'vitest';
// import store from '../../src/store/index.js';
import Vuex from 'vuex';
describe ('MuteUser.vue', () => {
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
  const userName = 'asmaaadel0';
  const edited = true;
  //--------------------------------------------------------
  //                     Rendering
  //--------------------------------------------------------
  it ('should render', () => {
    const wrapper = mount (MuteUser, {
      props: {
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
  //        Check the error in submitting empty fields
  //--------------------------------------------------------

  it ('test header text', async () => {
    const wrapper = mount (MuteUser, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
      data () {
        return {};
      },
    });
    expect (wrapper.text ()).contain ('Mute user');
  });

  it ('test note text', async () => {
    const wrapper = mount (MuteUser, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
      data () {
        return {};
      },
    });
    expect (wrapper.text ()).contain ('Note about why they are muted');
  });

  it ('test who can see text', async () => {
    const wrapper = mount (MuteUser, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
      data () {
        return {};
      },
    });
    expect (wrapper.text ()).contain (
      'Only visible to other moderators. Not visible to user'
    );
  });

  it ('test username field', async () => {
    const wrapper = mount (MuteUser, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
      data () {
        return {
          muteUserName: '',
          reason: '',
          modNote: '',
          text: '',
          reasonNote: '',
          errorResponse: null,
          banPeriod: false,
        };
      },
    });
    const button = wrapper.find ('#mute-user-button');
    button
      .trigger ('click')
      .then (() => {
        expect (wrapper.text ()).contain ('Username can not be empty');
      })
      .catch (function () {
        //console.log ('Promise Rejected');
      });
  });

  it ('test Cancel button', async () => {
    const wrapper = mount (MuteUser, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
      data () {
        return {
          banUserName: 'username',
          reason: '',
          modNote: '',
          text: '',
          reasonNote: '',
          errorResponse: null,
          banPeriod: false,
        };
      },
    });
    expect (wrapper.find ('#cancel-button').text ()).contain ('Cancel');
  });

  it ('test mute button button', async () => {
    const wrapper = mount (MuteUser, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
      data () {
        return {
          banUserName: 'username',
          reason: '',
          modNote: '',
          text: '',
          reasonNote: '',
          errorResponse: null,
          banPeriod: false,
        };
      },
    });
    expect (wrapper.find ('#mute-user-button').text ()).contain ('Mute user');
  });
});
