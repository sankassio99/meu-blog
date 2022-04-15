<template>
    <div class="flex justify-center w-auto min-h-screen">
        <div class="vertical-menu flex flex-col w-96 items-center h-72">
            <a class="p-3 text-center text-3xl text-gray-800 text-bold" href="#">Menu</a>
            <NuxtLink to="/"><span class="font-medium text-gray-800">Home</span></NuxtLink>
            <NuxtLink to="/"><span class="font-medium text-gray-800">Posts</span></NuxtLink>
            <NuxtLink to="/"><span class="font-medium text-gray-800">Sobre</span></NuxtLink>

            <NuxtLink to="/newPost"><button class="bg-red-500 flex-5 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Novo Post
            </button></NuxtLink>
        </div>
        
        <div class="w-auto bg-300-blue h-10"><span class="font-medium text-gray-800">
            <button class="flex items-center px-3
                py-2 border rounded text-gray-600 border-teal-400">
                <span class="material-icons">
                    close
                </span>
            </button></span>
        </div>
    </div>
</template>

<script>
export default {

    data(){

    },
    methods: {

    }

}
</script>

<style scoped>

</style>