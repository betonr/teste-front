import Vue from 'vue'
import ElementUI from 'element-ui'
import VLazyImage from "v-lazy-image"

Vue.use(ElementUI)
Vue.use(VLazyImage)

import { shallowMount } from '@vue/test-utils'
import CardCharacter from '@/views/components/characters/Card-character.vue'

describe('Card Character.test.js', () => {

    let wrapper
    beforeAll(() => {
        wrapper = shallowMount(CardCharacter)
    })
    
    test('details - emit event to father component', () => {
        let id = 2
        wrapper.vm.details(id)

        const data = wrapper.emitted().details[0][0]
        expect(data).toEqual(2)
    })

    test('props empty - not visible', () => {
        expect(wrapper.find('h1').exists()).toBeFalsy()
    })

    test('props not empty - visible', () => {
        wrapper.setProps({
            character: {
                name: 'Title',
                thumbnail: {
                    path: 'img',
                    extension: '.jpg'
                },
                id: 2,
                comics: {
                    available: 3
                }
            }
        })
        expect(wrapper.find('h1').exists()).toBeTruthy()
    })
})