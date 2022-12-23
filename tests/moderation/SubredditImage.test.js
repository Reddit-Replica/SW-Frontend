import {mount} from '@vue/test-utils';
import {shallowMount} from '@vue/test-utils';
import SubredditImage from '../../src/pages/moderation/SubredditImage.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
// import store from '../../src/store/index.js';

import {describe, it, expect, vi} from 'vitest';
describe ('SubredditImage', () => {
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
    params: vi.fn (),
  };
  const mockRoute = {
    push: vi.fn (),
    params: vi.fn (),
  };
  const subreddit = {picture: 'string'};
  const subredditName = 'subredditName';
  const image = 'string';
  let noItems = true;
  const search = 'asmaa';
  const invitedMod = true;

  //--------------------------------------------------------
  //                     Rendering
  //--------------------------------------------------------
  it ('should renders if SubredditImage content is correct', () => {
    const wrapper = shallowMount (SubredditImage, {
      beforeMount () {
        getSubreddit: vi.fn ();
      },
      data () {
        return {
          image: null,
          cover: null,
          subreddit: {},
          loaded1: false,
          loaded2: false,
        };
      },
      methods: {
        getSubreddit: vi.fn (),
        loadCoverPic: vi.fn (),
      },
      computed: {
        subredditName,
        image,
        subreddit,
      },
      global: {
        mocks: {
          $store: store,
          $router: mockRouter,
          $route: mockRoute,
        },
      },
    });
    expect (wrapper.exists ()).toBe (true);
  });

  //--------------------------------------------------------
  //                     Testing content page
  //--------------------------------------------------------

  it ('Testing title is correct', () => {
    const wrapper = mount (SubredditImage, {
      beforeMount () {
        getSubreddit: vi.fn ();
      },
      data () {
        return {
          image: null,
          cover: null,
          subreddit: {},
          loaded1: false,
          loaded2: false,
        };
      },
      methods: {
        getSubreddit: vi.fn (),
        loadCoverPic: vi.fn (),
      },
      computed: {
        subredditName,
        image,
        subreddit,
      },
      global: {
        mocks: {
          $store: store,
          $router: mockRouter,
          $route: mockRoute,
        },
      },
    });
    expect (wrapper.text ()).contain ('IMAGES');
  });

  it ('Testing first content is correct', () => {
    const wrapper = mount (SubredditImage, {
      beforeMount () {
        getSubreddit: vi.fn ();
      },
      data () {
        return {
          image: null,
          cover: null,
          subreddit: {},
          loaded1: false,
          loaded2: false,
        };
      },
      methods: {
        getSubreddit: vi.fn (),
        loadCoverPic: vi.fn (),
      },
      computed: {
        subredditName,
        image,
        subreddit,
      },
      global: {
        mocks: {
          $store: store,
          $router: mockRouter,
          $route: mockRoute,
        },
      },
    });
    expect (wrapper.text ()).contain ('Subreddit picture and banner image');
  });

  it ('Testing second content is correct', () => {
    const wrapper = mount (SubredditImage, {
      beforeMount () {
        getSubreddit: vi.fn ();
      },
      data () {
        return {
          image: null,
          cover: null,
          subreddit: {},
          loaded1: false,
          loaded2: false,
        };
      },
      methods: {
        getSubreddit: vi.fn (),
        loadCoverPic: vi.fn (),
      },
      computed: {
        subredditName,
        image,
        subreddit,
      },
      global: {
        mocks: {
          $store: store,
          $router: mockRouter,
          $route: mockRoute,
        },
      },
    });
    expect (wrapper.text ()).contain ('Images must be .png or .jpg format');
  });
});
