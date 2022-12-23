import {mount} from '@vue/test-utils';
import AddFlair from '../../src/components/moderation/AddFlair.vue';
import {describe, it, expect} from 'vitest';
// import store from '../../src/store/index.js';
import Vuex from 'vuex';
describe ('AddFlair.vue', () => {
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
  //--------------------------------------------------------
  //                     Rendering
  //--------------------------------------------------------
  it ('should render', () => {
    const wrapper = mount (AddFlair, {
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
  //                     Testing content page
  //--------------------------------------------------------

  it ('Testing flair header of the popup', () => {
    const wrapper = mount (AddFlair, {
      props: {},
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('Flair appearance');
  });

  it ('Testing flair header of the popup', () => {
    const wrapper = mount (AddFlair, {
      props: {},
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('Flair text');
  });

  it ('Testing Edit button of the popup', () => {
    const wrapper = mount (AddFlair, {
      props: {},
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('Edit');
  });

  it ('Testing flair input in the popup', () => {
    const wrapper = mount (AddFlair, {
      props: {},
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('#flair-text'));
  });

  it ('Testing flair background color in the popup', () => {
    const wrapper = mount (AddFlair, {
      props: {},
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text()).contain('Flair background color');
  });

  it ('Testing flair text color in the popup', () => {
    const wrapper = mount (AddFlair, {
      props: {},
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text()).contain('Flair text color');
  });
});
