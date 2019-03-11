import { shallowMount, createLocalVue } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'

const localVue = createLocalVue()
localVue.use(Vuex)
Vue.use(Vuetify)

describe('Home', () => {
  describe('with a store', () => {
    let store
    let getters

    beforeEach(() => {
      getters = {
        pokeList: () => ['bulbasaur', 'ivysaur', 'venusaur']
      }
      store = new Vuex.Store({ getters })
    })

    it('renders a value from getters', () => {
      const wrapper = shallowMount(Home, {
        store,
        localVue
      })

      expect(wrapper.find('.poke-list')
        .text().trim()).toEqual('Bulbasauro')
    })
  })
})
