<template>

  <div class="w-1/2 mx-auto my-20">
    <header class="flex space-x-5">
      <h1 class="text-3xl flex-1 font-semibold text-red-600">
        {{ titulo }}
      </h1>

      <button class="bg-red-500 flex-5 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        <NuxtLink to="/novopost">Novo Post</NuxtLink>
      </button>
    </header>

    <article v-for="artigo in listaArtigos" :key="artigo.id" class="my-20">
      <h2 class="text-5xl font-semibold mb-5">{{ artigo.titulo }}</h2>
      <p class="mb-5">{{ artigo.conteudo }}</p>
      <p class="text-red-500">Ler mais</p>
    </article>

  </div>

</template>

<script>

export default {
  data(){
    return {
      titulo: "Super Blog",
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
