export default {
    actions: {
        async getUserPosts(ctx, login) {
            const res = await fetch('https://json.extendsclass.com/bin/cbe6002d5f66')
            const resjson = await res.json()
            const posts = []
            for (let i in resjson) {
                if (login == resjson[i].login) {
                    posts.push(resjson[i])
                }
            }
            ctx.commit('UPDATE_USER_POSTS', posts)
        }
    },
    state: {
        posts: []
    },
    mutations: {
        // UPDATE_USER_POSTS(state, posts) {
        //     state.posts = posts;
        // },
        UPDATE_USER_POSTS(state, posts) {
            state.posts = posts;
        }
    },
    getters: {
        allUserPosts(state) {
            return state.posts.reverse();
        }
    }
}