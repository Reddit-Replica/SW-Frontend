import {mount} from '@vue/test-utils';
import {shallowMount} from '@vue/test-utils';
import CommunityPost
  from '../../src/components/CommunityComponents/CommunityPost.vue';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
// import store from '../../src/store/index.js';
import {describe, it, expect, vitest} from 'vitest';

describe ('CommunityPost.vue', () => {
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
    const wrapper = shallowMount (CommunityPost, {
      global: {
        components: {},
        mocks: {$store: store},
      },
    });
    expect (wrapper.exists ()).toBe (true);
  });

  it ('Test icons list', async () => {
    const wrapper = shallowMount (CommunityPost, {
      global: {
        components: {},
        mocks: {$store: store},
      },
    });

    expect (wrapper.find ('#initial-post-icon-15').exists ()).toBe (true);
    //show icons list
    await wrapper.find ('#initial-post-icon-15').trigger ('click');
    expect (wrapper.find ('#initial-post-icon-list').exists ()).toBe (true);
  });
});
