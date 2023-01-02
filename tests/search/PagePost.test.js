import { shallowMount, mount } from '@vue/test-utils';
import SearchPage from '../../src/pages/search/SearchUsers.vue';
import Vuex from 'vuex';

import { describe, it, expect } from 'vitest';
describe('SearchPage', () => {
    let store = new Vuex.Store({
        modules: {
            searchingModule: {
                namespaced: true,
                state: {
                    posts: {
                        id: '2sd22das',
                        dataId: '2sd22das',
                        postId: 'sdf2321f',
                        subreddit: 'Cmp24',
                        title: 'Salah',
                        comments: 0,
                        votes: 32,
                        postedBy: 'karimsaqer',
                        postedAt: '2022-08-24',
                    }
                },
            },
        },
    });

    //--------------------------------------------------------
    //                     Rendering
    //--------------------------------------------------------

    it('should renders if There content is correct', () => {
        const wrapper = mount(SearchPage, {
            props: {},
            global: {
                mocks: {
                    $store: store,
                },
            },
        });
        expect(wrapper.exists()).toBe(true);
    });

    it('Testing input is correct', () => {
        const wrapper = mount(SearchPage, {
            props: {},
            global: {
                // OR:
                mocks: {
                    $route: {
                        name: 'search',
                    },
                    $store: store,
                },
            },
        });
        expect(wrapper.text()).contain('Posts');
    });


    it('Testing button Post is correct', () => {
        const wrapper = mount(SearchPage, {
            props: {},
            global: {
                // OR:
                mocks: {
                    $store: store,
                },
            },
        });
        expect(wrapper.find('#posts-button').text()).contain('Posts');
    });

    it('Testing button Comments ban is correct', () => {
        const wrapper = mount(SearchPage, {
            props: {},
            global: {
                // OR:
                mocks: {
                    $store: store,
                },
            },
        });
        expect(wrapper.find('#comments-button').text()).contain('Comments');
    });

    it('Testing button Communities is correct', () => {
        const wrapper = mount(SearchPage, {
            props: {},
            global: {
                // OR:
                mocks: {
                    $store: store,
                },
            },
        });
        expect(wrapper.find('#communities-button').text()).contain('Communities');
    });
    it('Testing button People is correct', () => {
        const wrapper = mount(SearchPage, {
            props: {},
            global: {
                // OR:
                mocks: {
                    $store: store,
                },
            },
        });
        expect(wrapper.find('#users-button').text()).contain('People');
    });

});
