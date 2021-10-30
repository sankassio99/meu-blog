<template>
    <div class="flex justify-center items-center h-screen">
        <div class="bg-gray-200 w-80 p-5 rounded-md">
            <div>
                <h1 class="text-4xl font-bold mb-3 text-gray-800">Cadastro</h1>
                <span class="text-1xl text-gray-800">Já possuo conta ainda</span>
                <nuxt-link class="text-1xl text-blue-600 underline" to="/login">Fazer Login</nuxt-link>
            </div>

            <form action="" class="">
                    <div class="inputs w-full">
                        <input type="email" class="my-2 p-2 w-full outline-none rounded-sm" placeholder="E-mail" required>
                        <input type="nome" class="my-2 p-2 w-full outline-none rounded-sm" placeholder="Nome" required>
                        <input type="password" class="my-2 p-2 w-full outline-none rounded-sm" placeholder="Password" required>
                    </div>

                    <button type="submit" class="bg-blue-400 text-white p-2 rounded-sm my-2 w-full">
                        Sign Up
                        <font-awesome-icon icon="user-secret" />
                    </button>

                    <div>
                        <input type="checkbox">
                        <span>I have read and agree to the 
                            <a class="text-1xl text-blue-600 underline" href="#">
                                Terms of Service
                            </a>
                        </span>
                    </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>