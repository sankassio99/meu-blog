<template>

  <div class="mx-auto">
    <navigation-menu></navigation-menu>

    <header class="w-1/3 mx-auto text-center header-main">
      <p class="text-5xl font-bold text-gray-800 my-5">Meu pessoal blog</p>
      <p class="text-1xl  text-gray-400 mb-20">
        O lugar onde expresso meus pensamentos e conhecimentos em forma de texto
      </p>
    </header>

  <div class="w-2/3 mx-auto border-b-2"></div>

    <article v-for="artigo in listaArtigos" :key="artigo.id" 
    class="w-1/2 mx-auto my-20">

      <h2 class="text-5xl font-semibold mb-5">{{ artigo.titulo }}</h2>
      <p class="mb-5" v-html="artigo.conteudo">{{ artigo.conteudo }}</p>
      <p class="text-red-500">Ler mais</p>

    </article>

  </div>

</template>

<script>
import NavigationMenu from '../components/NavegationMenu.vue'

export default {
  components: { NavigationMenu },
  data(){
    return {
      listaArtigos: []
    }
  },
  // async asyncData({ $axios }){
  //   $axios
  //       .get("http://localhost:8000/api/posts")
  //       .then((response) => {
  //         this.listaArtigos = response.data;
  //       })
  // },
  methods: {
    carregarListaArtigos(){

      this.$axios
        .get("/api/posts")
        .then((response) => {
          this.listaArtigos = response.data;
        })

    },
  },
  created(){
    this.carregarListaArtigos();
  }
}
</script>

<style scoped>
@media (max-width: 1000px)
{
  .header-main {
    width: 90%;
  }
}
</style>
