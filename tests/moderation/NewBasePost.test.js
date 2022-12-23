import { mount } from '@vue/test-utils';
import NewBasePost from '../../src/components/moderation/NewBasePost.vue';
import { describe, it, expect, vi } from 'vitest';
import Vuex from 'vuex';

// import store from '../../src/store/index.js';
import mockservice from '../../../mockservice.txt';

// describe('NewBasePost', () => {
  //it-> test block
  // it('Render component exist', async () => {
  // 	//our component
  // 	const wrapper = mount(NewBasePost, {
  // 		global: {
  // 			components: {},
  // 			mocks: {},
  // 		},
  // 	});
  // 	expect(wrapper.exists()).toBe(true);
  // });
  // const spam = {
  //   subreddit: 'Cmp',
  //   id: 'id',
  //   postBy: 'Karim',
  //   postedAt: '10-10-2002',
  //   numberOfComments: 25,
  //   votes: 0,
  // };
  // const subreddits = 'saad';
  // const index = 0;
  // let handleTime = '2 years ago';
  // //Mocking the store
  // let store = new Vuex.Store({
  //   modules: {
  //     userModule: {
  //       namespaced: true,
  //       state: {
  //         userData: {
  //           displayName: '',
  //           about: '',
  //           banner: '',
  //           picture: '',
  //           karma: 0,
  //           cakeDate: '2019-08-24',
  //           socialLinks: [
  //             {
  //               type: 'Reddit',
  //               displayText: 'medo',
  //               link: '11',
  //             },
  //           ],
  //           nsfw: true,
  //           followed: true,
  //           blocked: true,
  //           moderatorOf: [
  //             {
  //               subredditName: '',
  //               numOfMembers: 0,
  //               nsfw: true,
  //             },
  //           ],
  //         },
  //         socialLinkItems: [
  //           {
  //             text: 'Custom URL',
  //             imgSrc: 'img',
  //             alt: 'custom url',
  //             type: 'link' /* link or username */,
  //             baseurl: '',
  //           },
  //         ],
  //       },
  //     },
  //   },
  // });
  // //--------------------------------------------------------
  // //                     Rendering
  // //--------------------------------------------------------
  // it('should render', () => {
  //   const wrapper = mount(NewBasePost, {
  //     data() {
  //       return {
  //         subreddit: {
  //           picture: 'ss',
  //         },
  //       };
  //     },
  //     props: {
  //       spam,
  //       index,
  //     },
  //     computed: {
  //       handleTime,
  //     },
  //     global: {
  //       // OR:
  //       mocks: {
  //         $route: {
  //           name: 'spam',
  //           params: {
  //             subredditName: subreddits,
  //           },
  //         },
  //         $store: store,
  //       },
  //     },
  //   });
  // });

  // //--------------------------------------------------------
  // //                     Testing content page
  // //--------------------------------------------------------

  // it ('Testing input Spam is correct', () => {
  //   const wrapper = mount (NewBasePost, {
  //     data () {
  //       return {
  //         subreddit: {
  //           picture: 'ss',
  //         },
  //       };
  //     },
  //     props: {
  //       spam,
  //       index,
  //     },
  //     global: {
  //       // OR:
  //       mocks: {
  //         $route: {
  //           params: {
  //             subredditName: subreddits,
  //           },
  //         },
  //         $store: store,
  //       },
  //     },
  //   });
  //   expect (wrapper.text ()).contain ('Cmp');
  // });

  // it ('Testing time is correct', () => {
  //   const wrapper = mount (NewBasePost, {
  //     data () {
  //       return {
  //         subreddit: {
  //           picture: 'ss',
  //         },
  //       };
  //     },
  //     props: {
  //       spam,
  //       index,
  //     },
  //     global: {
  //       // OR:
  //       mocks: {
  //         $route: {
  //           params: {
  //             subredditName: subreddits,
  //           },
  //         },
  //         $store: store,
  //       },
  //     },
  //   });
  //   expect (wrapper.text ()).contain ('(Permanent)•');
  // });

  // it ('Testing button Approve correct', () => {
  //   const wrapper = mount (NewBasePost, {
  //     data () {
  //       return {
  //         subreddit: {
  //           picture: 'ss',
  //         },
  //       };
  //     },
  //     props: {
  //       spam,
  //       index,
  //     },
  //     global: {
  //       // OR:
  //       mocks: {
  //         $route: {
  //           params: {
  //             subredditName: subreddits,
  //           },
  //         },
  //         $store: store,
  //       },
  //     },
  //   });
  //   expect (wrapper.find ('#approve-button-0').text ()).contain ('Approve');
  // });

  // it ('Testing button Remove is correct', () => {
  //   const wrapper = mount (NewBasePost, {
  //     data () {
  //       return {
  //         subreddit: {
  //           picture: 'ss',
  //         },
  //       };
  //     },
  //     props: {
  //       spam,
  //       index,
  //     },
  //     global: {
  //       // OR:
  //       mocks: {
  //         $route: {
  //           name: 'spam',
  //           params: {
  //             subredditName: subreddits,
  //           },
  //         },
  //         $store: store,
  //       },
  //     },
  //   });
  //   expect (wrapper.find ('#Remove-button-0').text ()).contain (
  //     'Remove'
  //   );
  // });


// });
