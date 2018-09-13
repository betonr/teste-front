import { shallowMount } from '@vue/test-utils'
import Footer from '@/views/components/default/Footer.vue'

describe('Footer.test.js', () => {

    test('Content', () => {
        const wrapper = shallowMount(Footer)

        expect(wrapper.find('footer').exists()).toBe(true)
        expect(wrapper.text()).toContain('Allgoo')
        expect(wrapper.text()).toContain('Todos os direitos reservados')
    })

})