import { shallowMount, mount } from '@vue/test-utils';
import SearchCommunity from '../../src/pages/search/SearchCommunity.vue';
import Vuex from 'vuex';

import { describe, it, expect } from 'vitest';
describe('SearchCommunity', () => {
    let store = new Vuex.Store({
        modules: {
            searchingModule: {
                namespaced: true,
                state: {
                    subreddits: {
                        id: '231fsd',
                        dataId: '231fsd',
                        subredditId: 'sadas2132',
                        subredditName: 'CMP24',
                        numberOfMembers: 24,
                        description: 'HEELO',
                        joined: false,
                    },
                },
            },
        },
    });

    //--------------------------------------------------------
    //                     Rendering
    //--------------------------------------------------------

    it('should renders if There content is correct', () => {
        const wrapper = mount(SearchCommunity, {
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
        const wrapper = mount(SearchCommunity, {
            props: {},
            global: {
                // OR:
                mocks: {
                    $route: {
                        name: 'searchcoms',
                    },
                    $store: store,
                },
            },
        });
        expect(wrapper.text()).contain('Posts');
    });


    it('Testing button Post is correct', () => {
        const wrapper = mount(SearchCommunity, {
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
        const wrapper = mount(SearchCommunity, {
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
        const wrapper = mount(SearchCommunity, {
            props: {},
            global: {
                // OR:
                mocks: {
                    $store: store,
                },
            },
        });
        expect(wrapper.find('#communtites-button').text()).contain('Communities');
    });
    it('Testing button People is correct', () => {
        const wrapper = mount(SearchCommunity, {
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
