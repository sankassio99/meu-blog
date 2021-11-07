<template>
    <div class="flex items-center h-20 p-10">
        <h1 class="text-2xl flex-1 font-semibold text-gray-800 flex items-center">
            <span class="material-icons">
            memory
            </span>
            <NuxtLink to="/" >Kássio's Blog</NuxtLink>
        </h1>
        <transition name="slide-fade">
            <div v-show="toggle" class="lg:space-x-3 items-center itens-menu">
                <NuxtLink to="/"><span class="font-medium text-gray-800">Home</span></NuxtLink>
                <NuxtLink to="/"><span class="font-medium text-gray-800">Posts</span></NuxtLink>
                <NuxtLink to="/"><span class="font-medium text-gray-800">Sobre</span></NuxtLink>

                <NuxtLink to="/newPost"><button class="bg-red-500 flex-5 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Novo Post
                </button></NuxtLink>
            </div>
        </transition>
        <div class="block lg:hidden">
            <button v-on:click="menuToggle" 
            class="flex items-center px-3
             py-2 border rounded text-teal-200 border-teal-400 hover:border-white">
                <span v-show="!toggle" class="material-icons">
                menu
                </span>
                <span v-show="toggle" class="material-icons">
                close
                </span>
            </button>
        </div>
        
    </div>
</template>

<script>
export default {

    data(){
        return {
           toggle: this.itsDesktop() ,
        }
    },
    methods: {
        menuToggle(){
            this.toggle = !this.toggle ;
        },
        itsDesktop(){
            let widthScreen = window.screen.width;

            if(widthScreen > 768){
                return true ;
            }

            return false ;
        }
    }

}
</script>

<style scoped>


@media (max-width: 1000px)
{
    .itens-menu {
        position: absolute;
        left: 0;
        display: flex ;
        flex-direction: column;
        width: 100%;
        margin-top: 300px ;
        height: 200px;
        justify-content: center;
        background-color: white ;
        z-index: 1;
    }
}
</style>