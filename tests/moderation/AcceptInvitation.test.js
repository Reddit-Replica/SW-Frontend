import {mount} from '@vue/test-utils';
import {shallowMount} from '@vue/test-utils';
import ModerationList from '../../src/pages/moderation/ModerationList.vue';
import Vuex from 'vuex';
// import store from '../../src/store/index.js';

import {describe, it, expect} from 'vitest';
describe ('ModerationList', () => {
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
  const moderators = {
    username: 'asmaa',
    nickname: 'asmaa',
    dateOfModeration: '2 years ago',
    permissions: ['everything'],
  };
  const subredditName = 'subredditName';
  let noItems = true;
  const search = 'asmaa';
  const invitedMod = true;

  //--------------------------------------------------------
  //                     Rendering
  //--------------------------------------------------------
  it ('should renders if ModerationList content is correct', () => {
    const wrapper = shallowMount (ModerationList, {
      props: {
        moderators,
      },
      computed: {
        subredditName,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.exists ()).toBe (true);
  });

  //--------------------------------------------------------
  //                     Testing content page
  //--------------------------------------------------------

  it ('Testing No results is correct', () => {
    const wrapper = mount (ModerationList, {
      props: {
        moderators,
        search,
        noItems,
        invitedMod,
      },
      data () {
        return {
          moderators,
          search,
          noItems,
          invitedMod,
        };
      },
      computed: {
        subredditName,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('No results for u/asmaa');
  });

  it ('Testing Invited moderators is correct', () => {
    const wrapper = mount (ModerationList, {
      props: {
        moderators,
        search,
        noItems,
        invitedMod,
      },
      data () {
        return {
          moderators,
          search,
          noItems,
          invitedMod,
        };
      },
      computed: {
        subredditName,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('Invited moderators');
  });

  it ('Testing clicking leave mod button', () => {
    const wrapper = mount (ModerationList, {
      props: {
        moderators,
        search,
        noItems,
        invitedMod,
      },
      data () {
        return {
          moderators,
          search,
          noItems,
          invitedMod,
        };
      },
      computed: {
        subredditName,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    const spamBtn = wrapper.find ('#leave-mod-button');
    spamBtn
      .trigger ('click')
      .then (() => {
        expect (wrapper.text ()).contain (
          'Once you leave as a mod, you will lose mod permissions'
        );
      })
      .catch (function () {
        console.log ('Promise Rejected');
      });
  });

  it ('Testing content of  Invite user as mod button', () => {
    const wrapper = mount (ModerationList, {
      props: {
        moderators,
        search,
        noItems,
        invitedMod,
      },
      data () {
        return {
          moderators,
          search,
          noItems,
          invitedMod,
        };
      },
      computed: {
        subredditName,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('#invite-user-mod-button').text ()).contain (
      'Invite user as mod'
    );
  });

  it ('Testing content of  leave as mod button', () => {
    const wrapper = mount (ModerationList, {
      props: {
        moderators,
        search,
        noItems,
        invitedMod,
      },
      data () {
        return {
          moderators,
          search,
          noItems,
          invitedMod,
        };
      },
      computed: {
        subredditName,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('#leave-mod-button').text ()).contain (
      'Leave as mod'
    );
  });
  
  //--------------------------------------------------------
  //                     Testing clickig buttons
  //--------------------------------------------------------

  it ('Testing clicking leave mod button', () => {
    const wrapper = mount (ModerationList, {
      props: {
        moderators,
        search,
        noItems,
        invitedMod,
      },
      data () {
        return {
          moderators,
          search,
          noItems,
          invitedMod,
        };
      },
      computed: {
        subredditName,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    const spamBtn = wrapper.find ('#leave-mod-button');
    spamBtn
      .trigger ('click')
      .then (() => {
        expect (wrapper.text ()).contain (
          'Once you leave as a mod, you will lose mod permissions'
        );
      })
      .catch (function () {
        console.log ('Promise Rejected');
      });
  });

  it ('Testing clicking Invite Moderators button', () => {
    const wrapper = mount (ModerationList, {
      props: {
        moderators,
        search,
        noItems,
        invitedMod,
      },
      data () {
        return {
          moderators,
          search,
          noItems,
          invitedMod,
        };
      },
      computed: {
        subredditName,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    const spamBtn = wrapper.find ('#invite-user-mod-button');
    spamBtn
      .trigger ('click')
      .then (() => {
        expect (wrapper.text ()).contain ('Invite Moderators');
      })
      .catch (function () {
        console.log ('Promise Rejected');
      });
  });
});
