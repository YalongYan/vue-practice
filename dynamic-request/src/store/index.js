import Vue from 'vue'
import Vuex from 'vuex'
import { APIMapping, currentEnvMapping } from './../common/RequestConfig.js'

Vue.use(Vuex)
const state = {
    RequestHost: APIMapping['project1'][currentEnvMapping[location.hostname]]
}

const getters = {
  get_RequestHost: state => {
    return state.RequestHost
  }
}

export default new Vuex.Store({
  state,
  getters
})
