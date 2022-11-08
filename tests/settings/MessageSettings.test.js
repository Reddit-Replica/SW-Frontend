import {mount} from '@vue/test-utils';
import MessagingSettings from '../../src/pages/settings/MessagingSettings.vue';
import {describe, it, expect} from 'vitest';
import Vuex from 'vuex';
import store from '../../src/store/index.js';

describe ('MessagingSettings.vue', () => {
  //--------------------------------------------------------
  //                     Rendering
  //--------------------------------------------------------
  it ('should render', () => {
    const wrapper = mount (MessagingSettings);
  });

  //--------------------------------------------------------
  //                     Testing click event
  //--------------------------------------------------------

  it ('Testing click show first submenu event is correct', () => {
    const wrapper = mount (MessagingSettings);
    expect (wrapper.text ()).not.contain ('Accounts Older Than 30 Days');
    wrapper
      .find ('#how-send-chat-request')
      .trigger ('click')
      .then (() => {
        expect (wrapper.text ()).contain ('Everyone');
        expect (wrapper.text ()).contain ('Accounts Older Than 30 Days');
        expect (wrapper.text ()).contain ('Nobody');
      })
      .catch (function () {
        console.log ('Promise Rejected');
      });
  });

  it ('Testing click show second submenu event is correct', () => {
    const wrapper = mount (MessagingSettings);
    expect (wrapper.text ()).not.contain ('Accounts Older Than 30 Days');
    wrapper
      .find ('#who-send-private-message')
      .trigger ('click')
      .then (() => {
        expect (wrapper.text ()).contain ('Everyone');
        expect (wrapper.text ()).contain ('Nobody');
      })
      .catch (function () {
        console.log ('Promise Rejected');
      });
  });

  // it ('Testing text message is correct', () => {
  //   const wrapper = mount (MessagingSettings, {
  //     props: {
  //       message,
  //       index,
  //     },
  //     global: {
  //       // OR:
  //       mocks: {
  //         $store: store,
  //       },
  //     },
  //   });
  //   expect (wrapper.find ('.md').text ()).contain ('hello asmaa');
  // });
});
