import {mount} from '@vue/test-utils';
import {shallowMount} from '@vue/test-utils';
import ModerationList from '../../src/pages/moderation/ModerationList.vue';
import Vuex from 'vuex';
import store from '../../src/store/index.js';

import {describe, it, expect} from 'vitest';
describe ('ModerationList', () => {
  const moderators = {
    username: 'asmaa',
    nickname: 'asmaa',
    dateOfModeration: '2 years ago',
    permissions: ['everything'],
  };

  //--------------------------------------------------------
  //                     Rendering
  //--------------------------------------------------------
  it ('should renders if ModerationList content is correct', () => {
    const wrapper = shallowMount (ModerationList, {
      props: {
        moderators,
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
});
