import { shallowMount, mount } from '@vue/test-utils';
import PeopleNav from '../../src/components/SearchComponents/PeopleNav.vue';
import Vuex from 'vuex';

import { describe, it, expect } from 'vitest';
describe('PeopleNav', () => {
    let store = new Vuex.Store({
        modules: {
            searchingModule: {
                namespaced: true,
                state: {
                    limitedUsers: {
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
        const wrapper = mount(PeopleNav, {
            props: {},
            global: {
                mocks: {
                    $store: store,
                },
            },
        });
        expect(wrapper.exists()).toBe(true);
    });
});
