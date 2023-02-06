import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import profile from './modules/profile'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        users, profile, user
    }
})
