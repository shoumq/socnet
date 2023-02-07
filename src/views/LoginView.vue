<template>
    <LayoutView>
        <p class="text-2xl text-center">Авторизация</p>

        <div class="mt-10 text-center">
            <form v-on:submit.prevent="authFun" class="w-full">
                <label class="block mb-5">
                    <input v-model="login" type="text" placeholder="Логин"
                        :class="{ 'border-2': flAuth, 'border-rose-500': flAuth }" />
                </label>

                <label class="block">
                    <input v-model="password" type="password" placeholder="Пароль"
                        :class="{ 'border-2': flAuth, 'border-rose-500': flAuth }" />
                </label>

                <p class="text-rose-500 text-lg mt-3 font-medium" :class="{ 'd-none-i': flAuth, 'd-n': !flAuth }">Пользователь не
                    найден!</p>


                <button class="outline outline-2 outline-offset-2 outline-indigo-500
                                cursor-pointer bg-indigo-500 rounded-lg py-1 px-10 text-white 
                                duration-300 hover:bg-indigo-600 select-none drop-shadow-xl"
                    style="position: relative;top: 2rem;">Войти</button>

                <a href="/reg" class="select-none drop-shadow-xl block mt-4" style="position: relative;top: 2rem;">Еще
                    нет аккаунта?</a>
            </form>
        </div>
    </LayoutView>
</template>

<script>
/* eslint-disable */
import LayoutView from './LayoutView.vue';

export default {
    name: 'LoginView',

    components: {
        LayoutView
    },

    data() {
        return {
            login: '',
            password: '',
            flAuth: false
        }
    },

    methods: {
        authFun() {
            this.axios.get(this.$store.getters.getApiUsers)
                .then((response) => {
                    let users = response.data;
                    let found = false;

                    for (let i in users) {
                        if (this.login == users[i].login && this.password == users[i].password) {
                            found = true;
                            localStorage.auth = true;
                            localStorage.name = users[i].name;
                            localStorage.login = users[i].login;
                            localStorage.password = users[i].password;
                            localStorage.city = users[i].city;
                            localStorage.email = users[i].email;
                            localStorage.photo = users[i].photo;
                            localStorage.company = users[i].company;
                            localStorage.website = users[i].website;
                            this.$router.push('/');
                            break;
                        }
                    }

                    if (!found) {
                        this.flAuth = true;
                        this.login = '';
                        this.password = ''
                    }
                })
        }
    },

    mounted() {
        document.title = 'Войти';
    }
}
</script>

<style>
input {
    padding: 4px 7px;
    border: 2px solid #6366f1;
    border-radius: 6px;
    outline: none;
    width: 40%;
}

.d-none-i {
    display: block;
}

.d-n {
    display: none;
}
</style>