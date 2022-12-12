import {mount} from '@vue/test-utils';
import {shallowMount} from '@vue/test-utils';
import AboutCommunityBar
  from '../../src/components/CommunityComponents/AboutCommunityBar.vue';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
// import store from '../../src/store/index.js';
import {describe, it, expect, vitest} from 'vitest';

describe ('AboutCommunityBar.vue', () => {
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
  const subreddit = {
    topics: ['Art', 'Anime', 'Beauty'],
    communityTopicProp: {mainTopic: '', subtopics: []},
    communityDescriptionProp: '',
    subredditName: 'Hello',
    communityType: 'Public',
    communityDate: 'NOV 23, 2022',
    onlineMembersCount: 10,
    membersCount: 20,
  };

  it ('renders', () => {
    const wrapper = shallowMount (AboutCommunityBar, {
      global: {
        components: {},
        mocks: {$store: store},
      },
    });
    expect (wrapper.exists ()).toBe (true);
  });

  it ('Test options list', async () => {
    const wrapper = shallowMount (AboutCommunityBar, {
      global: {
        components: {},
        mocks: {$store: store},
      },
    });

    expect (wrapper.find ('#three-dots').exists ()).toBe (true);
    //show options list
    await wrapper.find ('#three-dots').trigger ('click');
    expect (wrapper.find ('.box-options').exists ()).toBe (true);
  });

  it ('Add description', async () => {
    const wrapper = shallowMount (AboutCommunityBar, {
      global: {
        components: {},
        mocks: {$store: store},
      },
    });

    //show add description text area
    await wrapper.find ('#add-description-1').trigger ('click');
    expect (wrapper.find ('#add-description-2').exists ()).toBe (true);
    //hide add description text area
    await wrapper.find ('#cancel-description').trigger ('click');
    expect (wrapper.find ('#add-description-2').exists ()).toBe (false);
  });
});
