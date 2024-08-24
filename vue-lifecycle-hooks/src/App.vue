<template>
    <h1>Seyfe basligi : {{ title }}</h1>
    <button v-on:click="updateTitle">Basligi Deyiş</button>
</template>

<script>
  export default{
    data() {
      return {
        title:"Hello Word!"
      }
    },
    methods:{
      updateTitle:function(){
        this.title="New Hello Word";
      }
    },
    beforeCreate(){
      alert('Create Edilmeden əvvəl');
    },
    created(){
      alert("Create Edildi!");
    },
    beforeMount(){
      alert("Mount Edilmeden evvel");
    },
    mounted(){
      alert("Mount Edildi");
    },
    beforeUpdate(){
      alert(" Update Edilmeden evvel ");
    },
    updated(){
      alert("Update Edildi!");
    }
  }
</script>