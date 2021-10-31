<template>
    <div class="my-5">
        <input placeholder="Titulo" type="text" v-model="titulo"
                    class="text-1xl	 p-3 border border-gray-300 
                    shadow-md outline-none w-full"> 
        <client-only>
            <vue-editor class="my-2 rounded border border-gray-200" v-model="content" />
        </client-only>
        <div class="flex flex-row-reverse">
            <button type="button" v-on:click="salvarPost" 
                    class="bg-blue-500 w-80 font-bold py-2 px-4 rounded text-white shadow-md">Salvar</button>
        </div>
    </div>
</template>

<script>
import { VueEditor, Quill } from "vue2-editor";
export default {
    components: { VueEditor },

    data: () => ({
        content: "",
        titulo: "",
    }),
    methods: {
        salvarPost(){
            this.$axios
                .post("/api/posts",{
                    titulo: this.titulo,
                    conteudo: this.content
                })
                .then((response) => {
                  alert("Salvo com sucesso")
                  window.location.href = "/" ;
                })
        },
        
    }
}
</script>

<style>

</style>