import { shallowMount } from '@vue/test-utils'
import Header from '@/views/components/default/Header.vue'

describe('Header.test.js', () => {

    test('Content', () => {
        const wrapper = shallowMount(Header)
        
        expect(wrapper.findAll('header').exists()).toBe(true)
        expect(wrapper.findAll('img').exists()).toBe(true)
        expect(wrapper.text()).toContain('Marvel')
    })

})