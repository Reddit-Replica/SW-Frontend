import {mount} from '@vue/test-utils';
import {shallowMount} from '@vue/test-utils';
import ModeratorsBar
  from '../../src/components/CommunityComponents/ModeratorsBar.vue';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
// import store from '../../src/store/index.js';
import {describe, it, expect, vitest} from 'vitest';

describe ('ModeratorsBar.vue', () => {
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
  it ('renders', () => {
    const wrapper = shallowMount (ModeratorsBar, {
      global: {
        components: {},
        mocks: {$store: store},
      },
    });
    expect (wrapper.exists ()).toBe (true);
  });

  it ('Test if button exists', async () => {
    const wrapper = shallowMount (ModeratorsBar, {
      global: {
        components: {},
        mocks: {$store: store},
      },
    });

    // expect (wrapper.find ('#message-mods').exists ()).toBe (true);
  });
});
