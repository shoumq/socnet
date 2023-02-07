<template>
    <LayoutView>
        <p class="text-2xl text-center">Авторизация</p>

        <div class="mt-10 text-center">
            <div class="w-full">
                <label class="block mb-5">
                    <input v-model="login" type="text" placeholder="Логин" />
                </label>

                <label class="block">
                    <input v-model="password" type="password" placeholder="Пароль" />
                </label>


                <button @click="authFun" class="outline outline-2 outline-offset-2 outline-indigo-500
                                cursor-pointer bg-indigo-500 rounded-lg py-1 px-10 text-white 
                                duration-300 hover:bg-indigo-600 select-none drop-shadow-xl"
                    style="position: relative;top: 2rem;">Войти</button>

                <a href="/reg" class="select-none drop-shadow-xl block mt-4" style="position: relative;top: 2rem;">Еще
                    нет аккаунта?</a>
            </div>
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
                        window.alert('Пользователь не найден');
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
</style>