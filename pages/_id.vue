<template>
    <div class="post">
        <navegation-menu/>

        <header class="w-2/3 mx-auto header-main">
        <p class="text-5xl font-bold text-gray-800 my-5">{{ post.titulo }}</p>
        </header>

        <div class="control-menu my-4">
            <ul class="w-2/3 mx-auto space-x-4">
                <li class="item">

                    <a href="#" class="flex items-center opacity-40	hover:opacity-90">
                        <font-awesome-icon icon="edit"  class="pr-1"/>
                        <span>Editar</span>
                    </a>
                </li>
                <li class="item">

                    <a href="#" class="flex items-center opacity-40 hover:opacity-90">
                        <font-awesome-icon icon="trash" class="pr-1" />
                        <span>Excluir</span>
                    </a>
                
                </li>
                <li class="item">

                    <a href="#" class="flex items-center opacity-40 hover:opacity-90">
                        <font-awesome-icon icon="share-square"  class="pr-1" />
                        <span>Compartilhar</span>
                    </a>
                    
                </li>
            </ul>
        </div>

        <div class="w-2/3 mx-auto border-b-2 mb-10"></div>

        <section class="w-2/3 mx-auto conteudo">
            <div v-html="post.conteudo">
                {{ post.conteudo }}
            </div>
        </section>
    </div>
</template>

<script>
import NavegationMenu from '../components/NavegationMenu.vue'
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
    .conteudo {
        text-align: justify;
    }
    .control-menu ul{
        display: flex;
    }
</style>
