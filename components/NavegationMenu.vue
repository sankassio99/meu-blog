<template>
    <div class="flex items-center h-20 p-10">
        <h1 class="text-3xl flex-1 font-semibold text-gray-800 flex items-center">
            <img src="../static/cpu.png" class="w-5 h-5 mt-1 mr-2" alt="cpu">
            <NuxtLink to="/">Kássio's Blog</NuxtLink>
        </h1>

        <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        
        <div class="space-x-4 items-center lg:flex lg:w-auto sm:hidden">
            <NuxtLink to="/"><span class="font-medium text-gray-800">Home</span></NuxtLink>
            <NuxtLink to="/"><span class="font-medium text-gray-800">Posts</span></NuxtLink>
            <NuxtLink to="/"><span class="font-medium text-gray-800">Sobre</span></NuxtLink>

            <NuxtLink to="/novopost"><button class="bg-red-500 flex-5 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Novo Post
            </button></NuxtLink>
        </div>
        
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>