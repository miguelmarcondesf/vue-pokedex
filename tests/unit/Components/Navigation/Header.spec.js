import { mount } from '@vue/test-utils'
import Header from '@/components/Navigation/Header.vue'
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

describe('Header', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Header)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
