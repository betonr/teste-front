import { shallowMount } from '@vue/test-utils'
import BoxView from '@/views/components/characters/details-character/Box-view.vue'

describe('BoxView - details character.test.js', () => {

    let wrapper
    beforeAll(() => {
        wrapper = shallowMount(BoxView)
    })

    test('props empty - not visible', () => {
        expect(wrapper.find('h1').exists()).toBeFalsy()
    })

    test('props not empty - visible', () => {
        wrapper.setProps({
            element: {
                title: 'Title',
                thumbnail: {
                    path: 'img',
                    extension: '.jpg'
                }
            }
        })
        expect(wrapper.find('h1').exists()).toBeTruthy()
    })
})