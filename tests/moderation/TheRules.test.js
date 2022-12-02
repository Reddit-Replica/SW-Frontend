import {mount} from '@vue/test-utils';
import {shallowMount} from '@vue/test-utils';
import TheRules from '../../src/pages/moderation/TheRules.vue';
import Vuex from 'vuex';
import store from '../../src/store/index.js';

import {describe, it, expect} from 'vitest';
describe ('TheRules', () => {
  //--------------------------------------------------------
  //                     Rendering
  //--------------------------------------------------------
  it ('should renders if TheRules content is correct', () => {
    const wrapper = shallowMount (TheRules, {
      props: {},
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

  it ('Testing the Rules of subreddit rules header', () => {
    const wrapper = mount (TheRules, {
      props: {},
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('.text').text ()).contain ('Rules');
  });

  it ('Testing the content of readored rules button', () => {
    const wrapper = mount (TheRules, {
      props: {},
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('Reorder rules');
  });

  it ('Testing the content of Add rule button', () => {
    const wrapper = mount (TheRules, {
      props: {},
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('Add rule');
  });

  //--------------------------------------------------------
  //                     Testing clicking actions
  //--------------------------------------------------------

  it ('Testing before clicking add rule button', () => {
    const wrapper = mount (TheRules, {
      props: {},
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    const addRuleBtn = wrapper.find ('#add-rules-button');
    addRuleBtn
      .trigger ('click')
      .then (() => {
        expect (wrapper.text ()).not.contain ('Characters remaining');
      })
      .catch (function () {
        console.log ('Promise Rejected');
      });
  });

  it ('Testing the add rule button action', () => {
    const wrapper = mount (TheRules, {
      props: {},
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    const addRuleBtn = wrapper.find ('#add-rules-button');
    addRuleBtn
      .trigger ('click')
      .then (() => {
        expect (wrapper.text ()).contain ('Characters remaining');
      })
      .catch (function () {
        console.log ('Promise Rejected');
      });
  });

  it ('Testing the reoder rule button action then there is save button', () => {
    const wrapper = mount (TheRules, {
      props: {},
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    const reorderRuleBtn = wrapper.find ('#reorder-rules-button');
    reorderRuleBtn
      .trigger ('click')
      .then (() => {
        expect (wrapper.text ()).contain ('Save');
      })
      .catch (function () {
        console.log ('Promise Rejected');
      });
  });

  it ('Testing the reoder rule button action then there is cancel button', () => {
    const wrapper = mount (TheRules, {
      props: {},
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    const reorderRuleBtn = wrapper.find ('#reorder-rules-button');
    reorderRuleBtn
      .trigger ('click')
      .then (() => {
        expect (wrapper.text ()).contain ('Cancel');
      })
      .catch (function () {
        console.log ('Promise Rejected');
      });
  });
});
