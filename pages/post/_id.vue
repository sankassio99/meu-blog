<template>
    <div class="post">
        <navegation-menu/>

        <header class="w-2/3 mx-auto header-main">
            <p class="text-5xl font-bold text-gray-800 my-5">{{ post.titulo }}</p>
        </header>

        <div class="control-menu my-4">
            <ul class="w-2/3 mx-auto space-x-4">
                <li class="item">

                    <nuxt-link :to="'/edit-post/'+post.id" class="flex items-center opacity-50	hover:opacity-90">
                        <span class="material-icons">edit</span>
                        <span>Editar</span>
                    </nuxt-link>
                </li>
                <li class="item">

                    <button v-on:click="deletePost(post.id)"
                    class="flex items-center opacity-50 hover:opacity-90" >
                        <span class="material-icons">delete</span>
                        <span>Excluir</span>
                    </button>
                
                </li>
                <li class="item">

                    <a href="#" class="flex items-center opacity-50 hover:opacity-90">
                        <span class="material-icons">share</span>
                        <span>Compartilhar</span>
                    </a>
                    
                </li>
            </ul>
        </div>

        <div class="w-2/3 mx-auto border-b-2 mb-10"></div>

        <section class="section_article">
            <div class="content_article" v-html="post.conteudo">
                {{ post.conteudo }}
            </div>
        </section>
    </div>
</template>

<script>
import NavegationMenu from '../../components/NavegationMenu.vue'
export default {
    data(){
        return {
            
        }
    },
    async asyncData({ $axios, params }) {
        const post = await $axios.$get('/api/posts/'+params.id);
        return { post }
    },
    created(){
        // this.carregarListaArtigos()
    },
    methods: {
        deletePost(id){
            if(confirm("Tem certeza?")){
                this.$axios
                .delete(`/api/posts/${id}`)
                .then((response) => {
                    alert(response.data);
                    window.location.href = "/" ;
                })
            }
        },
        carregarListaArtigos(){

            this.$axios
                .get(`/api/posts/${params.id}`)
                .then((response) => {
                    console.log(response.data)
                })

        },
    }
}
</script>
    
<style>
    @media (max-width: 780px)
    {
        .content_article {
            width: 85%;
        }
        .header-main {
            width: 85%;
            margin-bottom: 20px;
        }
        .control-menu ul{
            justify-content: center;
        }
    }
    .section_article {
        width: 100%;
    }
    .content_article {
        max-width: 860px;
        margin: 0 auto;
    }
    .conteudo {
        text-align: justify;
    }
    .control-menu ul{
        display: flex;
    }
</style>
