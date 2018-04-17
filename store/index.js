import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      dogs: []
    },
    mutations: {
       add (state, payload) {
         state.dogs = payload;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get('https://dog.ceo/api/breeds/list')
        .then(res => {
          vuexContext.commit('add', res.data.message)
          return {breeds: res.data.message}
        })
        .catch(e => console.log(e))
      }
    },
    getters: {
      dogByName: (state) => (name) => {
        return state.dogs.find(dog => dog.name === name)
      },
      dogByIndex: (state, getters) => (name) => {
        const index = getters.allDogs.indexOf(name)
        const prevDog = getters.allDogs[index - 1]
        const nextDog = getters.allDogs[index + 1]
        return {prev: prevDog, next: nextDog}
      },
      allDogs: state => {
        return state.dogs
      }
    }
  })
}

export default createStore
