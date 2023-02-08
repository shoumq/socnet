export default {
    actions: {
        async getUsersData(ctx) {
            const res = await fetch('https://json.extendsclass.com/bin/a250bb97adc9')
            const users = await res.json();
            ctx.commit('UPDATE_USERS', users);
        }
    },
    state: {
        users: [],
        posts: [],
        apiUsers: 'https://json.extendsclass.com/bin/a250bb97adc9',
        apiPosts: 'https://json.extendsclass.com/bin/cbe6002d5f66'
    },
    mutations: {
        UPDATE_USERS(state, users) {
            state.users = users;
        }
    },
    getters: {
        allUsers(state) {
            return state.users;
        },

        countUsers(state) {
            return state.users.length;
        },

        getApiUsers(state) {
            return state.apiUsers;
        },

        getApiPosts(state) {
            return state.apiPosts;
        }
    },
}