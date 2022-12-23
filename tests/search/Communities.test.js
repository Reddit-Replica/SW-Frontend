import {shallowMount,mount} from '@vue/test-utils';
import SearchedCms from '../../src/components/SearchComponents/SearchedCms.vue';
import Vuex from 'vuex';

import {describe, it, expect} from 'vitest';
describe ('SearchedCms', () => {
  const value = [
    {
      id: '231fsd',
      dataId: '231fsd',
      subredditId: 'sadas2132',
      subredditName: 'CMP24',
      numberOfMembers: 24,
      description: 'HEELO',
      joined: false,
    },
  ];

  //--------------------------------------------------------
  //                     Rendering
  //--------------------------------------------------------

  it ('should renders if There content is correct', () => {
    const wrapper = mount (SearchedCms, {
      props: {
        value,
      },
      global: {},
    });
    expect (wrapper.exists ()).toBe (true);
  });

});
