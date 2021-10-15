<template>
  <div class="flex w-full h-screen items-center justify-center bg-gray-100">
      <form class="flex flex-col w-80 h-auto shadow-md p-4 rounded-sm bg-white text-center">
            <h1 class="text-3xl my-3 text-gray-600">Faça seu Login</h1>

            <input placeholder="E-mail" type="email"
                    class="text-1xl	 p-3 border-b-2 border-red-300 
                    outline-none w-full my-1 focus:border-red-600"> 

            <input placeholder="Password" type="password"
                class="text-1xl p-3 border-b-2 border-red-300 outline-none
                 w-full my-1 focus:border-red-600"/>

            <NuxtLink to="/"><button class="p-3 text-1xl bg-red-500 
                hover:bg-red-600 shadow-md w-full my-3 text-white">Login</button>
            </NuxtLink>

            <a href="">
                <span class="text-1xl my-3 text-blue-500">Esqueci minha senha</span>
            </a>
            <NuxtLink to="/">
                <span class="text-1xl my-3 text-blue-500">Cadastrar</span>
            </NuxtLink>
      </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .block {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>