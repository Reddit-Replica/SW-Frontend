import {describe, expect, it, vitest} from 'vitest';
import {shallowMount, mount, createLocalVue} from '@vue/test-utils';
import SubmitBar from '../..//src/components/SubmitComponents/SubmitBar.vue';
import Vuex from 'vuex';
// import store from '../../src/store/index.js';
import mockservice from '../../../mockservice.txt';

describe ('Submit footer rendring', () => {
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

  //it-> test block
  it ('Render component exist', async () => {
    //our component
    const wrapper = shallowMount (SubmitBar, {
      global: {
        components: {},
        mocks: {},
      },
    });
    expect (wrapper.exists ()).toBe (true);
  });
});
