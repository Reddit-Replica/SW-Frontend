import {mount} from '@vue/test-utils';
import LeftsideBar from '../../src/components/moderation/LeftsideBar.vue';
import {describe, it, expect} from 'vitest';
import Vuex from 'vuex';
// import store from '../../src/store/index.js';
import mockservice from '../../../mockservice.txt';

describe ('LeftsideBar.vue', () => {
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
    const wrapper = mount (LeftsideBar, {
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

  it ('Testing Queues is correct', () => {
    const wrapper = mount (LeftsideBar, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('Queues');
  });

  it ('Testing spam button is correct', () => {
    const wrapper = mount (LeftsideBar, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('#spam-button').text ()).contain ('Spam');
  });

  it ('Testing Edited button is correct', () => {
    const wrapper = mount (LeftsideBar, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('#edited-button').text ()).contain ('Edited');
  });

  it ('Testing unmoderated button is correct', () => {
    const wrapper = mount (LeftsideBar, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('#unmoderated-button').text ()).contain (
      'Unmoderated'
    );
  });

  it ('Testing User Management is correct', () => {
    const wrapper = mount (LeftsideBar, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('User Management');
  });

  it ('Testing banned button is correct', () => {
    const wrapper = mount (LeftsideBar, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('#banned-button').text ()).contain ('Banned');
  });

  it ('Testing muted button is correct', () => {
    const wrapper = mount (LeftsideBar, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('#muted-button').text ()).contain ('Muted');
  });

  it ('Testing Approved button is correct', () => {
    const wrapper = mount (LeftsideBar, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('#approved-button').text ()).contain ('Approved');
  });

  it ('Testing Moderators button is correct', () => {
    const wrapper = mount (LeftsideBar, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('#moderators-button').text ()).contain ('Moderators');
  });

  it ('Testing Flair & emojis is correct', () => {
    const wrapper = mount (LeftsideBar, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('Flair & emojis');
  });

  it ('Testing Post flair button is correct', () => {
    const wrapper = mount (LeftsideBar, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('#post-flair-button').text ()).contain ('Post flair');
  });

  it ('Testing Ruled and requlations is correct', () => {
    const wrapper = mount (LeftsideBar, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('Ruled and requlations');
  });

  it ('Testing Rules button is correct', () => {
    const wrapper = mount (LeftsideBar, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('#rules-button').text ()).contain ('Rules');
  });

  it ('Testing Other is correct', () => {
    const wrapper = mount (LeftsideBar, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('Other');
  });

  it ('Testing Community settings button is correct', () => {
    const wrapper = mount (LeftsideBar, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('#community-settings-button').text ()).contain (
      'Community settings'
    );
  });

  it ('Testing Posts and Comments settings button is correct', () => {
    const wrapper = mount (LeftsideBar, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('#postsandcomments-button').text ()).contain (
      'Posts and Comments settings'
    );
  });

  it ('Testing Change subreddit images button is correct', () => {
    const wrapper = mount (LeftsideBar, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('Change subreddit images');
  });

  it ('Testing Community Activity is correct', () => {
    const wrapper = mount (LeftsideBar, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('Community Activity');
  });

  it ('Testing Posts and Comments settings button is correct', () => {
    const wrapper = mount (LeftsideBar, {
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('#traffic-stats-button').text ()).contain (
      'Traffic stats'
    );
  });
});
