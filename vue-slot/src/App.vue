<template>
    <sub-tag>
        <template #title>
          <h1>Sub Title</h1>
        </template>
        <template #content>
          Sub Content
        </template>
    </sub-tag>
</template>

<script>
  import subTag from './components/subtag.vue';
  export default{
    components:{
      'sub-tag':subTag
    }
  }
</script>