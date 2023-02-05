export default {
    actions: {
        async getUsersData(ctx) {
            const res = await fetch(
                'http://jsonplaceholder.typicode.com/users'
            )
            const users = await res.json();
            ctx.commit('UPDATE_USERS', users)
        }
    },
    state: {
        users: []
    },
    mutations: {
        UPDATE_USERS(state, users) {
            state.users = users
        }
    },
    getters: {
        allUsers(state) {
            return state.users
        },

        countUsers(state) {
            return state.users.length
        }
    },
}