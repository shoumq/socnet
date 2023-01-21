<template>
    <LayoutView>
        <div class="friend-grid">
            <router-link :to="'/user/' + item.id" class="friend-grid__item drop-shadow-lg px-4 py-2 outline outline-2 
            outline-offset-2 outline-indigo-500 rounded" v-for="(item, index) in usersData" :key="index">
                <div class="text-xl">{{ item.name }}</div>
                <div class="text-base">@{{ item.username }}</div>
            </router-link>
        </div>
    </LayoutView>
</template>

<script>
import LayoutView from './LayoutView.vue';

export default {
    name: 'FriendsView',

    components: {
        LayoutView
    },

    data() {
        return {
            usersData: [],
        }
    },

    methods: {
        getUsersData() {
            this.axios.get("http://jsonplaceholder.typicode.com/users")
                .then(response => {
                    this.usersData = response.data;
                })
        },
    },

    mounted() {
        this.getUsersData();
    }
}
</script>

<style>
.friend-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
</style>