<template>
    <LayoutView>
        <div class="flex gap-6 border-4 border-transparent border-b-indigo-500 pb-5">
            <img src="https://avatars.mds.yandex.net/i?id=c99452f0c94a3d262f69c61f7c54780b4d232925-5268868-images-thumbs&n=13"
                alt="" class="rounded-lg w-40 h-40 avatar drop-shadow-lg">
            <div class="flex flex-col place-content-between">
                <div>
                    <p class="text-2xl mb-1">{{ userData.name }}</p>
                    <p class="text-base">@{{ userData.login }}</p>
                    <p class="text-base">Email: {{ userData.email }}</p>
                    <p class="text-base">Компания: {{ userData.company }}</p>
                </div>

                <div>
                    <a href="#ex1" rel="modal:open" class="outline outline-2 outline-offset-2 outline-indigo-500
                                cursor-pointer bg-indigo-500 rounded-lg py-2 px-4 text-white 
                                duration-300 hover:bg-indigo-600 select-none drop-shadow-xl"
                        style="position: relative;top: -0.5rem;">Подробнее</a>

                    <div id="ex1" class="modal">
                        <p class="text-xl mb-2">Имя: {{ userData.name }}</p>
                        <p class="text-xl mb-2">Логин: @{{ userData.login }}</p>
                        <p class="text-xl mb-2">Email: {{ userData.email }}</p>
                        <p class="text-xl mb-2">Компания: {{ userData.company }}</p>
                        <p class="text-xl mb-2">Город: {{ userData.city }}</p>
                        <p class="text-xl mb-2">Сайт: {{ userData.website }}</p>
                    </div>
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
            this.axios.get(this.$store.getters.getApiUsers)
                .then(response => {
                    for (let i = 0; i < response.data.length; i++) {
                        if (response.data[i].login == this.$route.params.login) {
                            this.userData = response.data[i];
                            document.title = response.data[i].name;
                        }
                    }
                })
        },

        ...mapActions(['getUserPosts'])
    },

    computed: mapGetters(['allUserPosts']),

    mounted() {
        this.getUserPosts(7);
        this.getUserData();
    },

    watch: {
        $route() {
            this.getUserPosts(7);
            this.getUserData();
        }
    },
}
</script>

