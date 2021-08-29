<template>
    <div class="w-1/2 mx-auto my-20">
        <header class="flex space-x-5">
            <h1 class="text-3xl flex-1 font-semibold text-red-600">
                Cadastrar Novo Post
            </h1>

            <button class="bg-red-500 flex-5 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                <NuxtLink to="/">Home</NuxtLink>
            </button>
        </header>

        <section>
            <form class="flex flex-col p-4">
                <input placeholder="Titulo" type="text" v-model="titulo"
                    class="text-3xl	 p-3 border border-transparent shadow-md mb-3 outline-none rounded w-full">

                <textarea placeholder="Conteúdo" v-model="conteudo"
                    class="p-3 border border-transparent shadow-md mb-6 outline-none rounded"></textarea>

                <button type="button" v-on:click="salvarPost" 
                    class="bg-blue-500 font-bold py-2 px-4 rounded text-white shadow-md">Salvar</button>
            </form>
        </section>
    </div>
</template>

<script>
export default {
    data(){
        return {
            titulo: "",
            conteudo: "",
        }
    },
    methods: {
        salvarPost(){
            this.$axios
                .post("/api/posts",{
                    titulo: this.titulo,
                    conteudo: this.conteudo
                })
                .then((response) => {
                  alert("Salvo com sucesso")
                })
        },
        
    }
}
</script>

<style>

</style>