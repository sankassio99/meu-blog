<template>
    <div class="flex justify-center items-center h-screen">
        <div class="bg-gray-200 w-80 p-5 rounded-md">
            <div>
                <h1 class="text-4xl font-bold mb-3 text-gray-800">Login</h1>
            </div>

            <form @submit.prevent="authenticate()" action="" class="">
                    <div class="inputs w-full">
                        <input v-model="email" type="email" class="my-2 p-2 w-full outline-none rounded-sm" placeholder="E-mail" required>
                        <input v-model="password" type="password" class="my-2 p-2 w-full outline-none rounded-sm" placeholder="Password" required>
                    </div>

                    <button type="submit" class="bg-red-400 text-white p-2 rounded-sm my-2 w-full">
                        Sign In
                        <font-awesome-icon icon="user-secret" />
                    </button>

                    <span class="text-1xl text-gray-800">Não possuo conta ainda</span>
                    <nuxt-link class="text-1xl text-blue-600 underline" to="/cadastro">Fazer Cadastro</nuxt-link>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            password: "",
            email: "",
            token: ""
        }
    },
    computed: {
        getUser () {
            return this.$store.state.user.userCurrent
        }
    },
    methods: {
        authenticate () {
            // chamar na pai pra ver se ta ok
            this.$axios.post("/api/login", {email: this.email, password: this.password })
                .then((response) => {
                    let token = response.data.access_token;
                    let name= response.data.username;
                    this.addUserCurrent(token, name);
                    this.$router.push('/');
                })
        },
        addUserCurrent (token, name) {
            this.$store.commit('user/add', {
                email: this.email, 
                password: this.password, 
                token: token,
                name: name
            });

        },
    }
}
</script>

<style>

</style>