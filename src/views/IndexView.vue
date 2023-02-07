<template>
    <LayoutView>
        Новости
    </LayoutView>
</template>

<script>
import LayoutView from './LayoutView.vue';

export default {
    name: 'IndexView',

    components: {
        LayoutView
    },

    mounted() {
        console.log(localStorage)
    }
}
</script>

