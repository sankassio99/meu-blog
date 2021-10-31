<template>
    <div class="">
        <navigation-menu></navigation-menu>
        
        <header class="w-1/3 mx-auto text-center">

            <p class="text-5xl font-bold text-gray-800 my-5">Editando post</p>

        </header>

        <div class="w-2/3 mx-auto border-b-2"></div>

        <section class="w-2/3 mx-auto my-18">
            <text-editor :idPost="id"/>
        </section>
        
    </div>
</template>

<script>
import TextEditor from '../../components/TextEditor.vue'
import NavigationMenu from '../../components/NavegationMenu.vue'

export default {
  components: { TextEditor, NavigationMenu },
    data(){
        return {
            id: "",
        }
    },
    created(){
        this.id = this.$route.params.id;
        // console.log(this.$route.params.id);
        // this.loadArticle();
    },
    methods: {
        
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