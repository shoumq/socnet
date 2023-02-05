import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
// import axios from 'axios'
// import VueAxios from 'vue-axios'

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        users
    }
})
