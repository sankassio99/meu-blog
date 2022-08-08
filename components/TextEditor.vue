<template>
    <div class="my-5">
        <input placeholder="Titulo" type="text" v-model="title"
                    class="text-1xl	 p-3 border border-gray-300 
                    shadow-md outline-none w-full"> 
        <client-only>
            <vue-editor class="my-2 rounded border border-gray-200" v-model="content" />
        </client-only>
        <div class="flex flex-row-reverse">
            <button v-if="idPost" type="button" v-on:click="updatePost" 
                    class="md:w-full bg-blue-500 w-80 font-bold py-2 px-4 rounded text-white shadow-md">Salvar Edição</button>
            <button v-else type="button" v-on:click="createPost" 
                    class="md:w-full bg-blue-500 w-80 font-bold py-2 px-4 rounded text-white shadow-md">Salvar</button>
        </div>
    </div>

</template>

<script>
import { VueEditor, Quill } from "vue2-editor";
export default {
    components: { VueEditor },
    props:["idPost"],

    data: () => ({
        content: "",
        title: "",
    }),
    mounted() {
        console.log(this.idPost);
        this.loadArticle(this.idPost);
    },
    methods: {
        createPost(){
            this.$axios
                .post("/api/posts",{
                    titulo: this.title,
                    conteudo: this.content
                })
                .then((response) => {
                  alert("Salvo com sucesso")
                  window.location.href = "/" ;
                })
        },
        updatePost(){
            this.$axios
                .put("/api/posts/"+this.idPost,{
                    titulo: this.title,
                    conteudo: this.content
                })
                .then((response) => {
                  alert("Editado com sucesso")
                  window.location.href = "/" ;
                })
        },
        loadArticle(idPost){
            console.log("textEditor:"+idPost);
            this.$axios
                .get(`/api/posts/${idPost}`)
                .then((response) => {
                    // console.log(response.data.titulo);
                    this.title = response.data.titulo ;
                    this.content = response.data.conteudo ;
                })
        }
        
    }
}
</script>

<style>

</style>