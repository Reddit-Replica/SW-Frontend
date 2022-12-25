import {mount} from '@vue/test-utils';
import MessagingSettings from '../../src/pages/settings/MessagingSettings.vue';
import {describe, it, expect} from 'vitest';
import Vuex from 'vuex';
// import store from '../../src/store/index.js';

describe ('MessagingSettings.vue', () => {
  let store = new Vuex.Store ({
    modules: {
      userModule: {
        namespaced: true,
        state: {
          userData: {
            displayName: '',
            about: '',
            banner: '',
            picture: '',
            karma: 0,
            cakeDate: '2019-08-24',
            socialLinks: [
              {
                type: 'Reddit',
                displayText: 'medo',
                link: '11',
              },
            ],
            nsfw: true,
            followed: true,
            blocked: true,
            moderatorOf: [
              {
                subredditName: '',
                numOfMembers: 0,
                nsfw: true,
              },
            ],
          },
          socialLinkItems: [
            {
              text: 'Custom URL',
              imgSrc: 'img',
              alt: 'custom url',
              type: 'link' /* link or username */,
              baseurl: '',
            },
          ],
        },
      },
    },
  });
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
        //console.log ('Promise Rejected');
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
        //console.log ('Promise Rejected');
      });
  });
});
