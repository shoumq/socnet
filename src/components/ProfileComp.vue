<template>
    
</template>

<script>
export default {
    name: 'ProfileComp',

    data() {
        return {
            dataApi: []
        }
    },

    methods: {
        getData() {
            this.axios.get("https://randomuser.me/api/")
            .then((response) => {
                this.dataApi = response.data.results;
                console.log(this.dataApi)
            })
        }
    },

    mounted() {
        this.getData();
    }
}
</script>