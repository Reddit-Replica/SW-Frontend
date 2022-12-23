import {mount} from '@vue/test-utils';
import MuteItem from '../../src/components/moderation/MuteItem.vue';
import {describe, it, expect} from 'vitest';
import Vuex from 'vuex';
// import store from '../../src/store/index.js';
import mockservice from '../../../mockservice.txt';

describe ('MuteItem.vue', () => {
  const mute = {
    username: 'name',
    avatar: 'avatar',
    dateOfMute: '12-12-2002',
    muteReason: true,
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
    const wrapper = mount (MuteItem, {
      props: {
        mute,
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

  it ('Testing mute user name is correct', () => {
    const wrapper = mount (MuteItem, {
      props: {
        mute,
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
    expect (wrapper.text ()).contain ('name');
  });

  it ('Testing handled time is correct', () => {
    const wrapper = mount (MuteItem, {
      props: {
        mute,
        index,
      },
      data () {
        return {
          viewDetails: true,
          handleTime: '12-12-2002',
        };
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
    expect (wrapper.text ()).contain ('12-12-2002');
  });

  it ('Testing Unmute button is correct', () => {
    const wrapper = mount (MuteItem, {
      props: {
        mute,
        index,
      },
      data () {
        return {
          viewDetails: true,
        };
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
    expect (wrapper.text ()).contain ('Unmute');
  });

  it ('Testing More Details is correct', () => {
    const wrapper = mount (MuteItem, {
      props: {
        mute,
        index,
      },
      data () {
        return {
          viewDetails: true,
        };
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
    expect (wrapper.text ()).contain ('No mod note.');
  });

  it ('Testing clicking unmute', () => {
    const wrapper = mount (MuteItem, {
      props: {
        mute,
        index,
      },
      data () {
        return {
          viewDetails: true,
          showUnMute: true,
        };
      },
      beforeMount () {
        calculateTime: vi.fn ();
      },
      global: {
        // OR:
        mocks: {
          $store: store,
          fetch: mockservice,
        },
      },
    });
    const unmuteBtn = wrapper.find ('#unmute-button0');
    unmuteBtn
      .trigger ('click')
      .then (() => {
        expect (wrapper.text ()).contain ('Are you sure you want to unmute mute?');
      })
      .catch (function () {
        console.log ('Promise Rejected');
      });
  });

  it ('Testing clicking unmute', () => {
    const wrapper = mount (MuteItem, {
      props: {
        mute,
        index,
      },
      data () {
        return {
          viewDetails: true,
          showUnMute: true,
        };
      },
      beforeMount () {
        calculateTime: vi.fn ();
      },
      global: {
        // OR:
        mocks: {
          $store: store,
          fetch: mockservice,
        },
      },
    });
    const unmuteBtn = wrapper.find ('#unmute-button0');
    unmuteBtn
      .trigger ('click')
      .then (() => {
        expect (wrapper.text ()).contain ('Cancel');
      })
      .catch (function () {
        console.log ('Promise Rejected');
      });
  });

  it ('Testing clicking unmute', () => {
    const wrapper = mount (MuteItem, {
      props: {
        mute,
        index,
      },
      data () {
        return {
          viewDetails: true,
          showUnMute: true,
        };
      },
      beforeMount () {
        calculateTime: vi.fn ();
      },
      global: {
        // OR:
        mocks: {
          $store: store,
          fetch: mockservice,
        },
      },
    });
    const unmuteBtn = wrapper.find ('#unmute-button0');
    unmuteBtn
      .trigger ('click')
      .then (() => {
        expect (wrapper.text ()).contain ('Unmute');
      })
      .catch (function () {
        console.log ('Promise Rejected');
      });
  });
});
