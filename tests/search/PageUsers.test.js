import { shallowMount, mount } from '@vue/test-utils';
import SearchUsers from '../../src/pages/search/SearchUsers.vue';
import Vuex from 'vuex';

import { describe, it, expect } from 'vitest';
describe('SearchUsers', () => {
    let store = new Vuex.Store({
        modules: {
            searchingModule: {
                namespaced: true,
                state: {
                    users: {
                        id: '231fsd',
                        dataId: '231fsd',
                        username: 'CMP24',
                        following: false,
                        karma: 0,
                    },
                },
            },
        },
    });

    //--------------------------------------------------------
    //                     Rendering
    //--------------------------------------------------------

    it('should renders if There content is correct', () => {
        const wrapper = mount(SearchUsers, {
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
        const wrapper = mount(SearchUsers, {
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
        const wrapper = mount(SearchUsers, {
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
        const wrapper = mount(SearchUsers, {
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
        const wrapper = mount(SearchUsers, {
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
        const wrapper = mount(SearchUsers, {
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
