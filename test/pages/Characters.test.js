import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'

Vue.use(VueRouter)
Vue.use(ElementUI)

import { shallowMount } from '@vue/test-utils'
import Characters from '@/views/pages/Characters.vue'

describe('Characters.test.js', () => {

    let wrapper
    const charactersList = [
        { id: 1, name: 'title 1' },
        { id: 2, name: 'title 2' }
    ]

    beforeAll(() => {
        wrapper = shallowMount(Characters)
    })
    
    test('not empty page', () => {
        expect(wrapper.isEmpty()).toBe(false)
    })

    test('variables initialized', () => {
        const expected = ['textSearch', 'charactersList', 'charactersListDefault', 'character', 'pager', 'loading']
        const received = Object.keys(wrapper.vm.$data)
        expect(expected).toEqual(received)
    })

    test('initialize data of component - type OK', () => {
        expect(wrapper.vm.textSearch).toEqual('')
        expect(Array.isArray(wrapper.vm.charactersList)).toBe(true)
        expect(Array.isArray(wrapper.vm.charactersListDefault)).toBe(true)
        expect(wrapper.vm.character).toBeNull()
        expect(wrapper.vm.pager).toBe(1)
        expect(typeof wrapper.vm.loading).toBe('object')
    })    

    test('textSearch method findOne', () => {
        wrapper.setData({
            charactersList,
            charactersListDefault: charactersList,
            textSearch: '1'
        })
        expect(wrapper.vm.charactersList).toHaveLength(1)
    })

    test('textSearch method findAll', () => {
        wrapper.setData({
            charactersList,
            charactersListDefault: charactersList,
            textSearch: ''
        })
        expect(wrapper.vm.charactersList).toBe(charactersList)
    })

    test('openDetails findOne', () => {
        wrapper.setData({
            charactersList
        })
        wrapper.vm.openDetails(1)
        expect(wrapper.vm.character).toHaveLength(1)
    })

    test('openDetails not found', () => {
        wrapper.setData({
            charactersList
        })
        wrapper.vm.openDetails(3)
        expect(wrapper.vm.character).toBeNull()
    })

})