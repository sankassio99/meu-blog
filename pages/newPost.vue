<template>
    <div class="">
        <navigation-menu></navigation-menu>
        
        <header class="w-1/3 mx-auto text-center">

            <p class="text-5xl font-bold text-gray-800 my-5">Criar novo post</p>
            <p class="text-1xl  text-gray-400 mb-10">
                Expresse suas ideias e seus pensamentos em forma de texto
            </p>

        </header>

        <div class="w-2/3 mx-auto border-b-2"></div>

        <section class="w-2/3 mx-auto my-18">
            <text-editor/>
        </section>
        
    </div>
</template>

<script>
import TextEditor from '../components/TextEditor.vue'
import NavigationMenu from '../components/NavegationMenu.vue'

export default {
    components: { TextEditor, NavigationMenu },
    data(){
        return {
            titulo: "",
            conteudo: "",
        }
    },
    mounted(){
        let user = JSON.parse(JSON.stringify(this.userCurrent));
        if(user.token == null){
            this.$router.push('/login');
        }
    },
    computed: {
        userCurrent () {
            return this.$store.getters['user/get']
        }
    }
}
</script>

<style scoped>
@media (max-width: 1000px)
{
    section, header {
        width: 90%;
    }
}
</style>