<template>
    <LayoutView>
        <div class="flex gap-6 border-4 border-transparent border-b-indigo-500 pb-5">
            <img src="https://avatars.mds.yandex.net/i?id=c99452f0c94a3d262f69c61f7c54780b4d232925-5268868-images-thumbs&n=13"
                alt="" class="rounded-lg w-40 h-40 avatar drop-shadow-lg">
            <div class="flex flex-col place-content-between">
                <div>
                    <p class="text-2xl mb-1">{{ userData.name }}</p>
                    <p class="text-base">@{{ userData.username }}</p>
                    <p class="text-base">Email: {{ userData.email }}</p>
                    <p class="text-base">Телефон: {{ userData.phone }}</p>
                </div>
                <div>
                    <a href="#" class="outline outline-2 outline-offset-2 outline-indigo-500
                                cursor-pointer bg-indigo-500 rounded-lg py-2 px-4 text-white 
                                duration-300 hover:bg-indigo-600 select-none drop-shadow-xl"
                        style="position: relative;top: -0.5rem;">Добавить в друзья</a>
                </div>
            </div>
        </div>

        <div class="text-2xl mt-7 mb-6">Записи</div>
        <div class="flex flex-col">
            <div v-for="(item, index) in userPosts" :key="index" class="mb-5 w-9/12">
                <p class="text-xl">{{ item.title }}</p>
                <p class="text-base">{{ item.body }}</p>
            </div>
        </div>
    </LayoutView>
</template>

<script>
import LayoutView from './LayoutView.vue';

export default {
    name: 'UserView',

    components: {
        LayoutView
    },

    data() {
        return {
            userData: [],
            userPosts: []
        }
    },

    methods: {
        getUserData() {
            this.axios.get("http://jsonplaceholder.typicode.com/users/" + this.$route.params.id)
                .then(response => {
                    this.userData = response.data;
                })
        },

        getUserPosts() {
            this.axios.get("http://jsonplaceholder.typicode.com/posts?userId=" + this.$route.params.id)
                .then(response => {
                    this.userPosts = response.data;
                })
        }
    },

    watch: {
        $route() {
            this.getUserData();
            this.getUserPosts();
        }
    },

    mounted() {
        this.getUserData();
        this.getUserPosts();
    }
}
</script>

