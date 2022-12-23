import {shallowMount,mount} from '@vue/test-utils';
import SearchPost from '../../src/components/SearchComponents/v.vue';
import Vuex from 'vuex';

import {describe, it, expect} from 'vitest';
describe ('SearchPost', () => {
    let store = new Vuex.Store ({
        modules: {
            searchingModule: {
            namespaced: true,
            state: {
                comments: {
                id: '2sd22das',
                dataId: '2sd22das',
                postId: 'sdf2321f',
                subreddit: 'Cmp24',
                title: 'Salah',
                comments: 0,
                votes: 32,
                postedBy: 'karimsaqer',
                postedAt: '2022-08-24',
            },
          },
        },
    },
    });

  //--------------------------------------------------------
  //                     Rendering
  //--------------------------------------------------------

  it ('should renders if There content is correct', () => {
    const wrapper = mount (SearchPost, {
      props: {},
      global: {
        mocks: {
            $store: store,
        },
      },
    });
    expect (wrapper.exists ()).toBe (true);
  });

});
