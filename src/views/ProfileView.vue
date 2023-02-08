<template>
    <LayoutView>
        <div class="flex gap-6 border-4 border-transparent border-b-indigo-500 pb-5">
            <img src="https://avatars.mds.yandex.net/i?id=c99452f0c94a3d262f69c61f7c54780b4d232925-5268868-images-thumbs&n=13"
                alt="" class="rounded-lg w-40 h-40 avatar drop-shadow-lg">
            <div class="flex flex-col place-content-between">
                <div>
                    <p class="text-2xl mb-1">{{ userData.name }}</p>
                    <p class="text-base">@{{ userData.login }}</p>
                    <p class="text-base mob-none">Email: {{ userData.email }}</p>
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

        <div class="text-2xl mt-7 mb-2">Что у Вас нового?</div>
        <form class="newsForm" v-on:submit.prevent="putNews">
            <input v-on:input="titleInput" type="text" v-model="title"
                :class="{ 'border-2': titleBool, 'border-rose-500': titleBool }">
            <button type="submit" class="outline outline-2 outline-offset-2 outline-indigo-500 text-sm
                                cursor-pointer bg-indigo-500 rounded px-2 py-1 text-white 
                                duration-300 hover:bg-indigo-600 select-none drop-shadow-xl"
                :class="{ 'outline-rose-500': titleBool, 'bg-rose-500': titleBool, 'hover:bg-rose-600': titleBool }">Поделиться</button>
        </form>

        <div class="text-2xl mt-10 mb-3">Записи</div>
        <div class="flex flex-col">
            <div v-for="(item, index) in allProfilePosts" :key="index" class="mb-5 w-9/12">
                <p class="text-xl">{{ item.title }}</p>
                <p class="text-sm text-inherit">{{ item.date }}</p>
            </div>
        </div>
    </LayoutView>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import LayoutView from './LayoutView.vue';

export default {
    name: 'ProfileView',

    components: {
        LayoutView
    },

    data() {
        return {
            userData: [],
            userPosts: [],
            title: '',
            titleBool: false,
        }
    },

    methods: {
        getUserData() {
            this.axios.get(this.$store.getters.getApiUsers)
                .then((response) => {
                    let users = response.data;
                    let found = false;

                    for (let i in users) {
                        if (users[i].login == localStorage.login) {
                            found = true;
                            this.userData = response.data[i];
                            document.title = response.data[i].name;
                            break;
                        }
                    }

                    if (!found) {
                        this.$router.push('/login');
                    }
                })
        },
        async putNews() {
            if (this.title) {
                const res = await fetch(this.$store.getters.getApiPosts);
                const posts = await res.json();
                this.allPosts = posts;
                this.allPosts.push({
                    "login": localStorage.getItem('login'),
                    "title": this.title,
                    "date": Date().split('(')[0].split(' ')[1] + " " +
                        Date().split('(')[0].split(' ')[2] + " " +
                        Date().split('(')[0].split(' ')[3] + " " +
                        Date().split('(')[0].split(' ')[4],
                })

                this.axios.put(this.$store.getters.getApiPosts,
                    this.allPosts
                ).then((response) => {
                    console.log(response)
                    window.location.reload();
                    this.titleBool = ''
                })
            } else {
                this.titleBool = true;
            }
        },
        titleInput() {
            if (this.title.length >= 1) {
                this.titleBool = false;
            }
        },
        ...mapActions(['getProfilePosts'])
    },

    computed: mapGetters(['allProfilePosts']),

    mounted() {
        this.getUserData();
        this.getProfilePosts(localStorage.getItem('login'));
    }
}
</script>

<style>
input {
    padding: 3px 3px;
    border: 2px solid #6366f1;
    border-radius: 6px;
    outline: none;
    width: 30%;
}

.newsForm {
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>