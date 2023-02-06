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
            </div>
        </div>

        <div class="text-2xl mt-7 mb-6">Записи</div>
        <div class="flex flex-col">
            <div v-for="(item, index) in allUserPosts" :key="index" class="mb-5 w-9/12">
                <p class="text-xl">{{ item.title }}</p>
                <p class="text-base">{{ item.body }}</p>
                {{ allPosts }}
            </div>
        </div>
    </LayoutView>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import LayoutView from './LayoutView.vue';

export default {
    name: 'UserView',

    components: {
        LayoutView
    },

    data() {
        return {
            userData: [],
            userPosts: [],
            userName: ''
        }
    },

    methods: {
        getUserData() {
            this.axios.get("http://jsonplaceholder.typicode.com/users/" + this.$route.params.id)
                .then(response => {
                    this.userData = response.data;
                    document.title = response.data.name;
                })
        },

        ...mapActions(['getUserPosts'])
    },

    computed: mapGetters(['allUserPosts']),

    mounted() {
        this.getUserPosts(this.$route.params.id);
        this.getUserData();
    },

    watch: {
        $route() {
            this.getUserPosts(this.$route.params.id);
            this.getUserData();
        }
    },
}
</script>

