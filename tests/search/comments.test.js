import {shallowMount,mount} from '@vue/test-utils';
import SearchComments from '../../src/pages/search/SearchComment.vue';
import Vuex from 'vuex';

import {describe, it, expect} from 'vitest';
describe ('SearchComments', () => {
    let store = new Vuex.Store ({
        modules: {
            searchingModule: {
            namespaced: true,
            state: {
                comments: {
                id: '2sd22das',
                dataId: '2sd22das',
                postId: 'sdf2321f',
                postSubreddit: 'Cmp24',
                posttitle: 'Allah',
                postComments: 0,
                postvotes: 32,
                postpostedby: 'karimsaqer',
                postpostedAt: '2022-08-24',
            },
          },
        },
    },
    });

  //--------------------------------------------------------
  //                     Rendering
  //--------------------------------------------------------

  it ('should renders if There content is correct', () => {
    const wrapper = mount (SearchComments, {
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
