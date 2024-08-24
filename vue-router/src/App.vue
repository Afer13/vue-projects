<script setup>
  import Menu from './components/menu.vue';
  import '@/assets/style.css' 
</script>

<template>
  <div>
    <app-menu></app-menu>
    <router-view></router-view>
  </div>
</template>
<script>
  
   export default{
    components:{
      'app-menu':Menu
    },
    data(){
      return{

      }
    }
   }
</script>
