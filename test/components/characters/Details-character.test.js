import Vue from 'vue'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

import { shallowMount } from '@vue/test-utils'
import DetailsCharacter from '@/views/components/characters/Details-character.vue'

describe('Details Character.test.js', () => {

    let wrapper
    beforeAll(() => {
        wrapper = shallowMount(DetailsCharacter)
    })
    
    test('close modal - emit event to father component', () => {
        wrapper.vm.closeModal()

        const data = wrapper.emitted().closeDetails[0]
        expect(data).toEqual([])
    })

    test('props empty - not visible', () => {
        expect(wrapper.find('h1').exists()).toBeFalsy()
    })

    test('prop character undefined - not visible', () => {
        wrapper.setProps({
            boxVisible: true
        })
        expect(wrapper.find('h1').exists()).toBeFalsy()
    })

    test('props not empty - visible', () => {
        wrapper.setProps({
            character: [{
                name: 'Title',
                thumbnail: {
                    path: 'img',
                    extension: '.jpg'
                },
                id: 2
            }],
            boxVisible: true
        })
        expect(wrapper.find('h1').exists()).toBeTruthy()
    })
})