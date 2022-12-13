import {mount} from '@vue/test-utils';
import SociallinkItem
  from '../../src/components/UserComponents/BaseUserComponents/SocialLinksComponents/SociallinkItem.vue';
import {describe, it, expect} from 'vitest';
import Vuex from 'vuex';
describe ('SocialLink.vue', () => {
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
  it ('should renders if page content is correct', () => {
    const testMessage = 'Happy People';
    const wrapper = mount (SociallinkItem, {
      props: {
        imgSrc: '',
        text: 'Reddit',
        alt: 'img',
      },
    });
    expect (wrapper.text ()).toBe ('Reddit');
  });

  it ('should renders if page content is correct', () => {
    const wrapper = mount (SociallinkItem, {
      props: {
        imgSrc: '',
        text: 'FaceBook',
        alt: 'img',
      },
    });
    expect (wrapper.text ()).toBe ('FaceBook');
  });
});
