<template>
    <LayoutView>
        <p class="text-2xl mb-6">Все люди</p>
        <div class="friend-grid">
            <router-link :to="'/user/' + item.id" class="friend-grid__item drop-shadow-lg px-4 py-2 outline outline-2 
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
    name: 'VuexView',

    components: {
        LayoutView
    },

    data() {
        return {
            getUsersDataEl: this.$store.getters.allUsers
        }
    },

    computed: mapGetters(['allUsers']),
    methods: mapActions(['getUsersData']),

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