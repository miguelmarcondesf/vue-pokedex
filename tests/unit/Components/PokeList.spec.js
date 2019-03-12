import { shallowMount } from '@vue/test-utils'
import PokeList from '@/components/PokeList'
import Pokecard from '@/components/Pokecard'
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

describe('PokeList.vue', () => {
  let pokeList

  beforeEach(() => {
    pokeList = [
      {
        'name': 'bulbasaur',
        'url': 'https://pokeapi.co/api/v2/pokemon/1/'
      },
      {
        'name': 'ivysaur',
        'url': 'https://pokeapi.co/api/v2/pokemon/2/'
      },
      {
        'name': 'venusaur',
        'url': 'https://pokeapi.co/api/v2/pokemon/3/'
      }
    ]
  })

  it('is a Vue instance', () => {
    const wrapper = shallowMount(PokeList, {
      propsData: {
        pokeList: pokeList
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render content correctly', () => {
    const wrapper = shallowMount(PokeList, {
      propsData: {
        pokeList: pokeList
      }
    })

    expect(wrapper.vm.$el).toMatchSnapshot()
  })

  it('should render 3 pokecards', () => {
    const wrapper = shallowMount(PokeList, {
      propsData: {
        pokeList: pokeList
      }
    })

    expect(wrapper.findAll(Pokecard).length).toBe(2)
  })
})
