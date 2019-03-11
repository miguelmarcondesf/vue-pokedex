import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Navigation/Header.vue'
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

describe('Header', () => {
  it('is a Vue instance', () => {
    const wrapper = shallowMount(Header, {
      stubs: ['router-link', 'router-view', 'store']
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render content correctly', () => {
    const wrapper = shallowMount(Header, {
      stubs: ['router-link', 'router-view']
    })

    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
