<template>
    <div class="lg:container mx-auto mt-10">
        <div class="row">
            <div class="col-nav rounded-lg p-4 drop-shadow-xl">
                <button @click="$router.push({ name: 'home' })" class="text-lg px-2 block my-1 text-slate-800">Профиль</button>
                <button @click="$router.push({ name: 'friends' })" class="text-lg px-2 block my-1 text-slate-800">Все люди</button>
                <button @click="logout" class="text-lg px-2 block my-1 text-slate-800 cursor-pointer" v-if="sessionName">Выйти</button>
            </div>
            <div class="col-content rounded-lg p-4 drop-shadow-xl">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LayoutView',

    data() {
        return {
            sessionName: localStorage.name
        }
    },

    methods: {
        logout() {
            localStorage.clear();
            this.$route.push('/');
        }
    }
}
</script>

<style>
body {
    background:
        linear-gradient(rgba(240, 240, 240, 0.7),
            rgba(250, 250, 250, 0.7)),
        url(../assets/img/bg.jpg) no-repeat fixed;
    background-size: cover;
    height: 100%;
}

.row {
    display: grid;
    grid-template-columns: 18% 80%;
    gap: 2%;
}

.col-nav {
    background-color: rgba(255, 255, 255, 0.6);
    height: 100%;
    min-height: 100vh;
}

.col-content {
    background-color: rgba(255, 255, 255, 0.6);
    height: 100%;
    min-height: 100vh;
}

.lg\:container {
    max-width: 1100px;
}

.avatar {
    object-fit: cover;
}
</style>