export default {
    actions: {
        async getUserPosts(ctx, paramId) {
            const res = await fetch(
                'http://jsonplaceholder.typicode.com/posts?userId=' + paramId
            )
            const posts = await res.json();
            ctx.commit('UPDATE_USER_POSTS', posts)
        }
    },
    state: {
        posts: []
    },
    mutations: {
        UPDATE_USER_POSTS(state, posts) {
            state.posts = posts;
        }
    },
    getters: {
        allUserPosts(state) {
            return state.posts;
        }
    }
}