import {mount} from '@vue/test-utils';
import AcceptInvitation from '../../src/pages/moderation/AcceptInvitation.vue';
import {describe, it, expect} from 'vitest';
// import store from '../../src/store/index.js';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
describe ('AcceptInvitation.vue', () => {
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
  const mockRouter = {
    push: vi.fn (),
  };
  const mockRoute = {
    //   params: {
    // 	id: 1
    //   }
  };
  //--------------------------------------------------------
  //                     Rendering
  //--------------------------------------------------------
  it ('should render', () => {
    const wrapper = mount (AcceptInvitation, {
      props: {},
      global: {
        // OR:
        mocks: {
          $store: store,
          $route: mockRoute,
          $router: mockRouter,
        },
      },
    });
  });

  //--------------------------------------------------------
  //                     Testing content page
  //--------------------------------------------------------

  it ('Testing header text of the popup', () => {
    const wrapper = mount (AcceptInvitation, {
      props: {},
      global: {
        // OR:
        mocks: {
          $store: store,
          $route: mockRoute,
          $router: mockRouter,
        },
      },
    });
    expect (wrapper.text ()).contain ('Congrats');
  });

  it ('Testing main text of the popup', () => {
    const wrapper = mount (AcceptInvitation, {
      props: {},
      global: {
        // OR:
        mocks: {
          $store: store,
          $route: mockRoute,
          $router: mockRouter,
        },
      },
    });
    expect (wrapper.text ()).contain (
      'Congrats! You are invited to become a moderator!'
    );
  });

  it ('Testing the Decline button text is correct', () => {
    const wrapper = mount (AcceptInvitation, {
      props: {},
      global: {
        // OR:
        mocks: {
          $store: store,
          $route: mockRoute,
          $router: mockRouter,
        },
      },
    });
    expect (wrapper.find ('#cancel-button').text ()).contain ('Decline');
  });

  it ('Testing the Accept button text is correct', () => {
    const wrapper = mount (AcceptInvitation, {
      props: {},
      global: {
        // OR:
        mocks: {
          $store: store,
          $route: mockRoute,
          $router: mockRouter,
        },
      },
    });
    expect (wrapper.find ('#delete-button').text ()).contain ('Accept');
  });

  //--------------------------------------------------------
  //                     Testing clicking actions
  //--------------------------------------------------------

  it ('Testing clicking on Decline button', () => {
    const wrapper = mount (AcceptInvitation, {
      props: {},
      global: {
        // OR:
        mocks: {
          $store: store,
          $route: mockRoute,
          $router: mockRouter,
        },
      },
    });
    const addRuleBtn = wrapper.find ('#cancel-button');
    addRuleBtn
      .trigger ('click')
      .then (() => {
        expect (wrapper.text ()).not.contain ('Decline');
      })
      .catch (function () {
        console.log ('Promise Rejected');
      });
  });

  it ('Testing clicking on Accept button', () => {
    const wrapper = mount (AcceptInvitation, {
      props: {},
      global: {
        // OR:
        mocks: {
          $store: store,
          $route: mockRoute,
          $router: mockRouter,
        },
      },
    });
    const addRuleBtn = wrapper.find ('#delete-button');
    addRuleBtn
      .trigger ('click')
      .then (() => {
        expect (wrapper.text ()).not.contain ('Accept');
      })
      .catch (function () {
        console.log ('Promise Rejected');
      });
  });
});
