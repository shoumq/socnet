export default {
    actions: {
        async getProfilePosts(ctx) {
            const res = await fetch(
                'http://jsonplaceholder.typicode.com/posts?userId=7'
            )
            const posts = await res.json();
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
            return state.posts;
        }
    }
}