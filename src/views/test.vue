<template>
    <LayoutView>
        {{ allUsersTest }}
    </LayoutView>
</template>

<script>
import LayoutView from './LayoutView.vue';

export default {
    name: 'TestView',

    data() {
        return {
            allUsersTest: []
        }
    },

    components: {
        LayoutView
    },

    methods: {
        async putPutUsersTest() {
            const res = await fetch(this.$store.getters.getApiUsers);
            const users = await res.json();
            this.allUsersTest = users;
            this.allUsersTest.push({ "login": "testik", "password": "123456", "city": "Москва", "name": "Андрей", "email": "lae212145@mail.ru", "photo": "-", "company": "SH21P", "website": "my121site.ru" })

            this.axios.put(this.$store.getters.getApiUsers,
                this.allUsersTest
            ).then((response) => {
                console.log(response)
            })
        },

        async getAllUsersTest() {
            const res = await fetch(this.$store.getters.getApiUsers);
            const users = await res.json();
            this.allUsersTest = users;
        },
    },

    mounted() {
        this.getAllUsersTest();
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