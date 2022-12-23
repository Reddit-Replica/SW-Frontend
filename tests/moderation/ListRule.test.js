import {mount} from '@vue/test-utils';
import ListRules from '../../src/components/moderation/ListRules.vue';
import {describe, it, expect} from 'vitest';
import Vuex from 'vuex';
// import store from '../../src/store/index.js';
import mockservice from '../../../mockservice.txt';

describe ('ListRules.vue', () => {
  const rule = {
    ruleId: 'id',
    ruleName: 'name',
    ruleOrder: 1,
    createdAt: '12-12-2002',
    appliesTo: 'applied to',
    reportReason: 'reason',
    description: 'description',
  };
  const index = 0;

  //Mocking the store
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
    const wrapper = mount (ListRules, {
      props: {
        rule,
        index,
      },
      beforeMount () {
        calculateTime: vi.fn ();
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
  //                     Testing content page
  //--------------------------------------------------------

  it ('Testing rule order is correct', () => {
    const wrapper = mount (ListRules, {
      props: {
        rule,
        index,
      },
      beforeMount () {
        calculateTime: vi.fn ();
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain (2);
  });

  it ('Testing rule name is correct', () => {
    const wrapper = mount (ListRules, {
      props: {
        rule,
        index,
      },
      beforeMount () {
        calculateTime: vi.fn ();
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('name');
  });

  it ('Testing More Details is correct', () => {
    const wrapper = mount (ListRules, {
      props: {
        rule,
        index,
      },
      data () {
        return {
          viewDetails: true,
        };
      },
      beforeMount () {
        calculateTime: vi.fn ();
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('Report Reason');
  });

  it ('Testing reason For report is correct', () => {
    const wrapper = mount (ListRules, {
      props: {
        rule,
        index,
      },
      data () {
        return {
          viewDetails: true,
        };
      },
      beforeMount () {
        calculateTime: vi.fn ();
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('reason');
  });

  it ('Testing Applies To is correct', () => {
    const wrapper = mount (ListRules, {
      props: {
        rule,
        index,
      },
      data () {
        return {
          viewDetails: true,
        };
      },
      beforeMount () {
        calculateTime: vi.fn ();
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('Applies To');
  });

  it ('Testing applied to text is correct', () => {
    const wrapper = mount (ListRules, {
      props: {
        rule,
        index,
      },
      data () {
        return {
          viewDetails: true,
        };
      },
      beforeMount () {
        calculateTime: vi.fn ();
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('applied to');
  });

  it ('Testing Created is correct', () => {
    const wrapper = mount (ListRules, {
      props: {
        rule,
        index,
      },
      data () {
        return {
          viewDetails: true,
        };
      },
      beforeMount () {
        calculateTime: vi.fn ();
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('Created');
  });

  it ('Testing handled time is correct', () => {
    const wrapper = mount (ListRules, {
      props: {
        rule,
        index,
      },
      data () {
        return {
          viewDetails: true,
          handleTime: '12-12-2002',
        };
      },
      beforeMount () {
        calculateTime: vi.fn ();
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('12-12-2002');
  });

  it ('Testing Full Description is correct', () => {
    const wrapper = mount (ListRules, {
      props: {
        rule,
        index,
      },
      data () {
        return {
          viewDetails: true,
        };
      },
      beforeMount () {
        calculateTime: vi.fn ();
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('Full Description');
  });

  it ('Testing description text is correct', () => {
    const wrapper = mount (ListRules, {
      props: {
        rule,
        index,
      },
      data () {
        return {
          viewDetails: true,
        };
      },
      beforeMount () {
        calculateTime: vi.fn ();
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('description');
  });

  it ('Testing clicking edit', () => {
    const wrapper = mount (ListRules, {
      props: {
        rule,
        index,
      },
      data () {
        return {
          viewDetails: true,
        };
      },
      beforeMount () {
        calculateTime: vi.fn ();
      },
      global: {
        // OR:
        mocks: {
          $store: store,
          fetch: mockservice,
        },
      },
    });
    const editBtn = wrapper.find ('#edit-button0');
    editBtn
      .trigger ('click')
      .then (() => {
        expect (wrapper.text ()).contain ('Add rule');
      })
      .catch (function () {
        console.log ('Promise Rejected');
      });
  });
});
