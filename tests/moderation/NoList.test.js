import {mount} from '@vue/test-utils';
import NoList from '../../src/components/moderation/NoList.vue';
import {describe, it, expect} from 'vitest';
// import store from '../../src/store/index.js';
import Vuex from 'vuex';
describe ('NoList.vue', () => {
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
  const userName = 'asmaaadel0';
  const edited = true;
  //--------------------------------------------------------
  //                     Rendering
  //--------------------------------------------------------
  it ('should render', () => {
    const wrapper = mount (NoList, {
      props: {
        title: 'title',
      },
      computed: {
        subredditName: 'subredditName',
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
  //        Check the error in submitting empty fields
  //--------------------------------------------------------

  it ('test header text', async () => {
    const wrapper = mount (NoList, {
      props: {
        title: 'title',
      },
      computed: {
        subredditName: 'subredditName',
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
      data () {
        return {};
      },
    });
    expect (wrapper.text ()).contain ('No title in r/');
  });
});
