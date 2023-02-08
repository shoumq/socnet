export default {
    actions: {
        async getProfilePosts(ctx, login) {
            const res = await fetch('https://json.extendsclass.com/bin/cbe6002d5f66')
            const resjson = await res.json()
            const posts = []
            for (let i in resjson) {
                if (login == resjson[i].login) {
                    posts.push(resjson[i])
                }
            }
            ctx.commit('UPDATE_PROFILE_POSTS', posts)
        },
        
    },
    state: {
        posts: []
    },
    mutations: {
        UPDATE_PROFILE_POSTS(state, posts) {
            state.posts = posts
        }
    },
    getters: {
        allProfilePosts(state) {
            return state.posts.reverse();
        }
    }
}