import Vue from 'vue'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

import { shallowMount } from '@vue/test-utils'
import Stories from '@/views/components/characters/details-character/Stories.vue'

describe('Stories - Details Character.test.js', () => {

    let wrapper

    beforeAll(() => {
        wrapper = shallowMount(Stories)
    })

    test('variables initialized', () => {
        const expected = ['pager', 'storiesList', 'loading']
        const received = Object.keys(wrapper.vm.$data)
        expect(expected).toEqual(received)
    })

    test('initialize data of component - type OK', () => {
        expect(Array.isArray(wrapper.vm.storiesList)).toBe(true)
        expect(wrapper.vm.pager).toBe(1)
        expect(typeof wrapper.vm.loading).toBe('boolean')
    })
    
    test('props empty - not visible infos and visible alert(warning) ', () => {
        expect(wrapper.find('p.title').exists()).toBeFalsy()
        expect(wrapper.find('elalert-stub').exists()).toBeTruthy()
    })

    test('storiesList not null - visible box-view', () => {
        wrapper.setData({
            storiesList: [{ 
                title: 'teste 1'
            }]
        })
        expect(wrapper.find('p.title').exists()).toBeTruthy()
    })

})