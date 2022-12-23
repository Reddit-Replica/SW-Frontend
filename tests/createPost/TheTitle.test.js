import {shallowMount,mount} from '@vue/test-utils';
import TitleInput from '../../src/components/SubmitComponents/TitleInput.vue';
import {describe, it, expect, vi} from 'vitest';
import Vuex from 'vuex';
// import store from '../../src/store/index.js';
import mockservice from '../../../mockservice.txt';

describe ('TitleInput.vue', () => {


  const Action = {
   
  };

  //Mocking the store
  let store = new Vuex.Store ({
    modules: {
    //   messageModule: {
    //     namespaced: true,
    //     state: {
         
    //     },
    //     actions: messagesAction,
    //   },
      
    },
  });
  //--------------------------------------------------------
  //                     check 
  //--------------------------------------------------------
  it ('should exist', () => {
    const wrapper =shallowMount (TitleInput, {
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
        const wrapper = shallowMount (TitleInput, {
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
        const title = wrapper.find ('.title-input');
        title.setValue ('');
        expect (wrapper.find ('.title-input').text ()).contain ('');
      });

  //--------------------------------------------------------
  //                     Testing content page
  //--------------------------------------------------------

//   it ('Testing the sender name is correct', () => {
//     const wrapper = mount (MessagesComponent, {
//       props: {
//         message,
//         index,
//       },
//       computed: {
//         handleTime,
//         isInvitation,
//       },
//       global: {
//         // OR:
//         mocks: {
//           $store: store,
//         },
//       },
//     });
//     expect (wrapper.find ('#message-sender-0').text ()).contain ('sender');
//   });

//   it ('Testing subject is correct', () => {
//     const wrapper = mount (MessagesComponent, {
//       props: {
//         message,
//         index,
//       },
//       computed: {
//         handleTime,
//         isInvitation,
//       },
//       global: {
//         // OR:
//         mocks: {
//           $store: store,
//         },
//       },
//     });
//     expect (wrapper.find ('.subject-text').text ()).contain ('subject content');
//   });

//   it ('Testing text message is correct', () => {
//     const wrapper = mount (MessagesComponent, {
//       props: {
//         message,
//         index,
//       },
//       computed: {
//         handleTime,
//         isInvitation,
//       },
//       global: {
//         // OR:
//         mocks: {
//           $store: store,
//         },
//       },
//     });
//     expect (wrapper.text ()).contain ('subject');
//   });

});
