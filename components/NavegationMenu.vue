<template>
    <div class="flex items-center h-20 p-10">
        <h1 class="text-2xl flex-1 font-semibold text-gray-800 flex items-center">
            <span class="material-icons">
            memory
            </span>
            <NuxtLink to="/" >{{getUserName()}}'s Blog</NuxtLink>
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
        <div class="menu-mobile">
            <navegation-menu-mobile></navegation-menu-mobile>
        </div>
        
    </div>
</template>

<script>
import NavegationMenuMobileVue from './NavegationMenuMobile.vue';
export default {
    components: NavegationMenuMobileVue,
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
        },
        getUserName () {
            let userCurrent = this.$store.state.user.userCurrent
            return userCurrent.email
        },
    }

}
</script>

<style scoped>

.menu-mobile {
    display: none;
}
@media (max-width: 1000px)
{
    .menu-mobile {
        display: block;
    }
    .itens-menu {
        position: absolute;
        left: 0;
        display: flex ;
        flex-direction: column;
        width: 100%;
        margin-top: 300px ;
        height: 100vh;
        justify-content: center;
        background-color: white ;
        z-index: 1;
    }
}
</style>