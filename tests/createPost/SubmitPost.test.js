import {describe, expect, it, vitest} from 'vitest';
import {shallowMount, mount, createLocalVue} from '@vue/test-utils';
import SubmitPage from '../../src/pages/submit/SubmitPage.vue';
import Vuex from 'vuex';
// import store from '../../src/store/index.js';
import mockservice from '../../../mockservice.txt';

describe ('SubmitPage rendring', () => {
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

  const categories = ['Gaming', 'Sports', 'Memes', 'News'];

  const communityAction = {
    createPost: vi.fn (),
  };
  const communityMutation = {
    setTitle: vi.fn (),
    setNsfw: vi.fn (),
    setSpoiler: vi.fn (),
    setFlairId: vi.fn (),
    setsendReplies: vi.fn (),
    setContent: vi.fn (),
    setallSubreddits: vi.fn (),
    setSubreddit: vi.fn (),
    setinSubreddit: vi.fn (),
  };
  const communityGetters = {
    getTitle: vi.fn (),
    getNsfw: vi.fn (),
    getSpoiler: vi.fn (),
    getFlairId: vi.fn (),
    getsendReplies: vi.fn (),
    getContent: vi.fn (),
    getallSubreddits: vi.fn (),
    getSubreddit: vi.fn (),
    getinSubreddit: vi.fn (),
  };
  //it-> test block
  it ('Render component exist', async () => {
    //our component
    const wrapper = shallowMount (SubmitPage, {
      global: {
        components: {},
        mocks: {$store: store},
      },
    });
    expect (wrapper.exists ()).toBe (true);
  });
});
