<template>
    <div class="lg:container mx-auto mt-10">
        <div class="burger rounded-lg mb-4 drop-shadow-xl">
            <div class="text-lg p-3">Socnet</div>
            <div class="p-3" @click="showBurgerMenu = !showBurgerMenu">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </div>
        </div>
        <div class="burger-menu rounded-lg drop-shadow-xl p-3" :class="{ 'd-none': showBurgerMenu }">
            <button @click="$router.push({ name: 'home' }).catch(() => { })"
                class="text-lg px-2 block my-1 text-slate-800">Профиль</button>
            <button @click="$router.push({ name: 'friends' }).catch(() => { })"
                class="text-lg px-2 block my-1 text-slate-800">Все
                люди</button>
            <button @click="logout" class="text-lg px-2 block my-1 text-slate-800 cursor-pointer"
                v-if="sessionName">Выйти</button>
        </div>
        <div class="row">
            <div class="col-nav rounded-lg p-4 drop-shadow-xl">
                <button @click="$router.push({ name: 'home' }).catch(() => { })"
                    class="text-lg px-2 block my-1 text-slate-800">Профиль</button>
                <button @click="$router.push({ name: 'friends' }).catch(() => { })"
                    class="text-lg px-2 block my-1 text-slate-800">Все
                    люди</button>
                <button @click="logout" class="text-lg px-2 block my-1 text-slate-800 cursor-pointer"
                    v-if="sessionName">Выйти</button>
            </div>
            <div class="col-content rounded-lg p-3 drop-shadow-xl">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LayoutView',

    data: () => ({
        sessionName: localStorage.name,
        showBurgerMenu: true,
    }),

    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({ name: 'login' });
        }
    }
}
</script>

<style>
* {
    font-family: 'Roboto', sans-serif;
}

body {
    background:
        linear-gradient(rgba(240, 240, 240, 0.7),
            rgba(250, 250, 250, 0.7)),
        url(../assets/img/bg.jpg) no-repeat fixed;
    background-size: cover;
    height: 100%;
}

.burger {
    display: none;
}

.burger-menu {
    display: none;
}

.mob-none {
    display: block;
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



@media (max-width: 768px) {
    .lg\:container {
        margin-top: 80px;
    }

    .col-nav {
        display: none;
    }

    .row {
        display: grid;
        grid-template-columns: 100% 0;
        width: min(100% - 20px);
        margin-inline: auto;
    }

    .burger {
        top: 12px;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: min(100% - 20px);
        left: 10px;
        margin-inline: auto;
        background-color: #e8ecf1;
        z-index: 2;
    }

    .burger-menu {
        position: fixed;
        display: block;
        width: min(100% - 20px);
        left: 10px;
        margin-inline: auto;
        background-color: #e8ecf1;
        z-index: 2;
    }

    .blocker {
        z-index: 9;
    }

    input {
        width: 90% !important;
    }

    .mob-none {
        display: none;
    }
}

.d-none {
    display: none;
}
</style>