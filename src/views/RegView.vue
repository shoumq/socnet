<template>
    <LayoutView>
        <p class="text-2xl text-center">Регистрация</p>

        <div class="mt-10 text-center">
            <div class="w-full">
                <label class="block mb-5">
                    <input v-model="login" type="text" placeholder="Логин" />
                </label>

                <label class="block mb-5">
                    <input v-model="password" type="password" placeholder="Пароль" />
                </label>

                <label class="block mb-5">
                    <input v-model="name" type="text" placeholder="Имя" />
                </label>

                <label class="block mb-5">
                    <input v-model="city" type="text" placeholder="Город" />
                </label>

                <label class="block mb-5">
                    <input v-model="email" type="email" placeholder="E-mail" />
                </label>

                <label class="block mb-5">
                    <input v-model="photo" type="text" placeholder="Фото" />
                </label>

                <label class="block mb-5">
                    <input v-model="company" type="text" placeholder="Компания" />
                </label>

                <label class="block mb-5">
                    <input v-model="website" type="text" placeholder="Сайт" />
                </label>

                <button @click="putUser" type="submit" class="outline outline-2 outline-offset-2 outline-indigo-500
                                cursor-pointer bg-indigo-500 rounded-lg py-2 px-10 text-white 
                                duration-300 hover:bg-indigo-600 select-none drop-shadow-xl"
                    style="position: relative;top: 2rem;">Зарегистрироваться</button>

                <a href="/login" class="select-none drop-shadow-xl block mt-4" style="position: relative;top: 2rem;">Уже
                    есть аккаунт?</a>
            </div>
        </div>
    </LayoutView>
</template>

<script>
/* eslint-disable */
import LayoutView from './LayoutView.vue';

export default {
    name: 'RegView',

    components: {
        LayoutView
    },

    data() {
        return {
            allUsers: [],
            login: '',
            password: '',
            city: '',
            name: '',
            email: '',
            photo: '',
            company: '',
            website: '',
        }
    },

    methods: {
        async putUser() {
            const res = await fetch(this.$store.getters.getApiUsers);
            const users = await res.json();
            this.allUsers = users;
            this.allUsers.push({
                "login": this.login,
                "password": this.password,
                "city": this.city,
                "name": this.name,
                "email": this.email,
                "photo": this.photo,
                "company": this.company,
                "website": this.website
            })

            this.axios.put(this.$store.getters.getApiUsers,
                this.allUsers
            ).then((response) => {
                console.log(response)
                this.$router.push({ name: 'home' })
            })
        }
    },

    mounted() {
        document.title = 'Зарегистрироваться';
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