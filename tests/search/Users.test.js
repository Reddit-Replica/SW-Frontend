import {shallowMount,mount} from '@vue/test-utils';
import SearchedUser from '../../src/components/SearchComponents/SearchedUser.vue';
import Vuex from 'vuex';

import {describe, it, expect} from 'vitest';
describe ('SearchedUser', () => {
  const value = [
    {
      id: '231fsd',
      dataId: '231fsd',
      username: 'CMP24',
      following: false,
      karma:0,
    },
  ];

  //--------------------------------------------------------
  //                     Rendering
  //--------------------------------------------------------

  it ('should renders if There content is correct', () => {
    const wrapper = mount (SearchedUser, {
      props: {
        value,
      },
      global: {},
    });
    expect (wrapper.exists ()).toBe (true);
  });
});
