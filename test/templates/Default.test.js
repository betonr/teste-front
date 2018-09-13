import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)

import { shallowMount } from '@vue/test-utils'
import Default from '@/views/templates/Default.vue'

describe('Default.test.js', () => {
    
    let wrapper
    beforeAll(() => {
        wrapper = shallowMount(Default)
    })

    test('modification - snapshot', () => {
        expect(wrapper.element).toMatchSnapshot()
    })
    
})