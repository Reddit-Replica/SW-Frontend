import {mount} from '@vue/test-utils';
import ListItem from '../../src/components/moderation/ListItem.vue';
import {describe, it, expect} from 'vitest';
import Vuex from 'vuex';
import store from '../../src/store/index.js';

describe ('ListItem.vue', () => {
  const moderator = {
    username: 'asmaa',
    dateOfModeration: '2 years ago',
    permissions: ['everything'],
  };
  const index = 0;
  let date = '2 years ago';
  //--------------------------------------------------------
  //                     Rendering
  //--------------------------------------------------------
  it ('should render', () => {
    const wrapper = mount (ListItem, {
      props: {
        moderator,
        index,
      },
      computed: {
        date,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
  });

  //--------------------------------------------------------
  //                     Testing content page
  //--------------------------------------------------------

  it ('Testing the moderator name is correct', () => {
    const wrapper = mount (ListItem, {
      props: {
        moderator,
        index,
      },
      computed: {
        date,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    // expect (wrapper.find ('#moderator-name-0').text ()).contain ('asmaa');
  });

  it ('Testing the date of moderation name is correct', () => {
    const wrapper = mount (ListItem, {
      props: {
        moderator,
        index,
      },
      computed: {
        date,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    // expect (wrapper.find ('.time').text ()).contain ('2 years ago');
  });

  it ('Testing permissions is correct', () => {
    const wrapper = mount (ListItem, {
      props: {
        moderator,
        index,
      },
      computed: {
        date,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    // expect (wrapper.find ('.permissions').text ()).contain ('everything');
  });
});
