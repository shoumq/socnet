<template>
    <LayoutView>
        <p class="text-2xl mb-6">Все люди ({{ countUsers }})</p>
        <div class="friend-grid">
            <router-link :to="{ name: 'userPage', params: { id: item.id } }" class="friend-grid__item drop-shadow-lg px-4 py-2 outline outline-2 
            outline-offset-2 outline-indigo-500 rounded" v-for="(item, index) in allUsers" :key="index">
                <div class="text-xl">{{ item.name }}</div>
                <div class="text-base">@{{ item.username }}</div>
            </router-link>
        </div>
    </LayoutView>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import LayoutView from './LayoutView.vue';

export default {
    name: 'FriendsView',

    components: {
        LayoutView
    },

    computed: mapGetters(['allUsers', 'countUsers']),
    methods: mapActions(['getUsersData']),

    mounted() {
        this.getUsersData();
        document.title = 'Все люди';
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