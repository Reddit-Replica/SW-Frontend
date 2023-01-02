
import {shallowMount,mount} from '@vue/test-utils';
import FooterButtons from '../../src/components/SubmitComponents/FooterButtons.vue';
import {describe, it, expect, vi} from 'vitest';
import Vuex from 'vuex';
// import store from '../../src/store/index.js';
import mockservice from '../../../mockservice.txt';

describe ('FooterButtons.vue', () => {


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
    const wrapper =shallowMount (FooterButtons, {
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
  

});

