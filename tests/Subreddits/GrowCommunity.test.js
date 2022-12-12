import {mount} from '@vue/test-utils';
import {shallowMount} from '@vue/test-utils';
import GrowCommunity
  from '../../src/components/CommunityComponents/GrowCommunity.vue';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
// import store from '../../src/store/index.js';
import {describe, it, expect, vitest} from 'vitest';

describe ('GrowCommunity.vue', () => {
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
    const wrapper = shallowMount (GrowCommunity, {
      global: {
        components: {},
        mocks: {$store: store},
      },
    });
    expect (wrapper.exists ()).toBe (true);
  });

  it ('Test show and hide', async () => {
    const wrapper = shallowMount (GrowCommunity, {
      global: {
        components: {},
        mocks: {$store: store},
      },
    });

    expect (wrapper.find ('.grow-body').exists ()).toBe (true);
    //hide grow your community part
    await wrapper.find ('#show-up-grow').trigger ('click');
    expect (wrapper.find ('.grow-body').exists ()).toBe (false);
    //show  grow your community part
    await wrapper.find ('#show-down-grow').trigger ('click');
    expect (wrapper.find ('.grow-body').exists ()).toBe (true);
  });
});
