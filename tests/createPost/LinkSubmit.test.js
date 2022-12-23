import {shallowMount,mount} from '@vue/test-utils';
import LinkSubmit from '../../src/components/SubmitComponents/LinkSubmit.vue';
import {describe, it, expect, vi} from 'vitest';
import Vuex from 'vuex';
// import store from '../../src/store/index.js';
import mockservice from '../../../mockservice.txt';

describe ('LinkSubmit.vue', () => {


  const Action = {
   
  };

  //Mocking the store
  let store = new Vuex.Store ({
    modules: {
      
    },
  });
  //--------------------------------------------------------
  //                     check 
  //--------------------------------------------------------
  it ('should exist', () => {
    const wrapper =shallowMount (LinkSubmit, {
      props: {
      },
      computed: {
      },
      methods: {

      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
  });
  it ('Testing the sender name is correct', () => {
        const wrapper = shallowMount (LinkSubmit, {
          props: {
            
          },
          computed: {
           
          },
          global: {
            // OR:
            mocks: {
              $store: store,
            },
          },
        });
        const title = wrapper.find ('#title');
        title.setValue ('');
        expect (wrapper.find ('#title').text ()).contain ('');
      });

 

});
