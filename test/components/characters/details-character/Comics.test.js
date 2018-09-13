import Vue from 'vue'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

import { shallowMount } from '@vue/test-utils'
import Comics from '@/views/components/characters/details-character/Comics.vue'

describe('Comics - Details Character.test.js', () => {

    let wrapper

    beforeAll(() => {
        wrapper = shallowMount(Comics)
    })

    test('variables initialized', () => {
        const expected = ['pager', 'comicsList', 'loading']
        const received = Object.keys(wrapper.vm.$data)
        expect(expected).toEqual(received)
    })

    test('initialize data of component - type OK', () => {
        expect(Array.isArray(wrapper.vm.comicsList)).toBe(true)
        expect(wrapper.vm.pager).toBe(1)
        expect(typeof wrapper.vm.loading).toBe('boolean')
    })
    
    test('props empty - not visible box-view and visible alert(warning) ', () => {
        expect(wrapper.find('m-box-view-stub').exists()).toBeFalsy()
        expect(wrapper.find('elalert-stub').exists()).toBeTruthy()
    })

    test('comicsList not null - visible box-view', () => {
        wrapper.setData({
            comicsList: [{ 
                title: 'teste 1'
            }]
        })
        expect(wrapper.find('m-box-view-stub').exists()).toBeTruthy()
    })

})