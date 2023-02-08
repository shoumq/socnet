<template>
    <LayoutView>
        <form v-on:submit.prevent="getUsers">
            <button type="submit">Получить</button>

            <div class="friend-grid">
                <div class="friend-grid__item drop-shadow-lg px-4 py-2 outline outline-2 
            outline-offset-2 outline-indigo-500 rounded" v-for="(item, index) in allUsers" :key="index">
                    <div class="text-xl">{{ item.name }}</div>
                    <div class="text-base">@{{ item.login }}</div>
                </div>
            </div>
        </form>
    </LayoutView>
</template>

<script>
import LayoutView from './LayoutView.vue';

export default {
    name: 'TestView',

    data() {
        return {
            allUsers: []
        }
    },

    components: {
        LayoutView
    },

    methods: {
        getUsers() {
            // http://socnet/src/api/test.php
            this.axios.get('/testapi')
                .then((response) => {
                    this.allUsers = response.data;
                })
        }
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