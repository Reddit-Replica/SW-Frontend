import { shallowMount, mount } from '@vue/test-utils';
import CommunitesNav from '../../src/components/SearchComponents/CommunitesNav.vue';
import Vuex from 'vuex';

import { describe, it, expect } from 'vitest';
describe('CommunitesNav', () => {
    let store = new Vuex.Store({
        modules: {
            searchingModule: {
                namespaced: true,
                state: {
                    limitedsubs: {
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
        const wrapper = mount(CommunitesNav, {
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
