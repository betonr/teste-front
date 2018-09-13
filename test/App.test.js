import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import { shallowMount, createLocalVue } from '@vue/test-utils'
import App from '@/App'

describe('App.test.js', () => {

    let wrapper
    beforeAll(() => {
        wrapper = shallowMount(App)
    })

    test('is vue.js instance', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()        
    })

    test('modification - snapshot', () => {
        expect(wrapper.element).toMatchSnapshot()
    })
})