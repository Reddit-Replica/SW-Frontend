import {mount} from '@vue/test-utils';
import AddBan from '../../src/components/moderation/AddBan.vue';
import {describe, it, expect} from 'vitest';
// import store from '../../src/store/index.js';
import Vuex from 'vuex';
describe ('AddBan.vue', () => {
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
  const edited = true;
  //--------------------------------------------------------
  //                     Rendering
  //--------------------------------------------------------
  it ('should render', () => {
    const wrapper = mount (AddBan, {
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
  //        Check the error in submitting empty fields
  //--------------------------------------------------------
  it ('test unsername field', async () => {
    const wrapper = mount (AddBan, {
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
    expect (wrapper.text ()).contain ('username');
    const button = wrapper.find ('#ban-button');
    button
      .trigger ('click')
      .then (() => {
        expect (wrapper.text ()).contain ('Username can not be empty');
      })
      .catch (function () {
        console.log ('Promise Rejected');
      });
  });

  it ('test Cancel button', async () => {
    const wrapper = mount (AddBan, {
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

  it ('test ban button button', async () => {
    const wrapper = mount (AddBan, {
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
    expect (wrapper.find ('#ban-button').text ()).contain ('Ban user');
  });

  it ('test unban button', async () => {
    const wrapper = mount (AddBan, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
      props: {
        edited: true,
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
          edited: true,
        };
      },
    });
    expect (wrapper.find ('#delete-button').text ()).contain ('UnBan');
  });
});
