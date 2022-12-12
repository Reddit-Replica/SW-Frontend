import {mount} from '@vue/test-utils';
import {shallowMount} from '@vue/test-utils';
import ProfileNavbar from '../../src/components/UserComponents/ProfileNav.vue';
import Vuex from 'vuex';
// import store from '../../src/store/index.js';

import {describe, it, expect} from 'vitest';
describe ('SocialLink.vue', () => {
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
  it ('Check render of profile navegation bar', async () => {
    const wrapper = mount (ProfileNavbar, {
      props: {
        userName: 'medo',
      },
      global: {
        // OR:
        mocks: {
          $store: store,
          $route: {
            params: {
              userName: 'medo',
            },
          },
        },
      },
    });
    expect (wrapper.exists ()).toBe (true);
  });
  it ('Check render of profile navegation bar', async () => {
    const wrapper = mount (ProfileNavbar, {
      props: {
        userName: 'medo',
      },
      global: {
        // OR:
        mocks: {
          $store: store,
          $route: {
            params: {
              userName: 'medo',
            },
          },
        },
      },
    });
    const byId = await wrapper.find ('#viewed-profile-link-overview');
    await expect (
      wrapper.html ().includes ('id="viewed-profile-link-overview"')
    ).toBe (true);
  });
});
