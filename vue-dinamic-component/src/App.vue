<script setup>
import PageOne from './components/PageOne.vue';
import PageTwo from './components/PageTwo.vue';
</script>

<template>
  <keep-alive>
    <component v-bind:is="component"></component>
  </keep-alive>

  <hr>
  <button v-on:click="component = 'page-one'">1-ci Səhifə</button>
  <button v-on:click="component = 'page-two'">2-ci Səhifə</button>
</template>

<script>
export default {
  components: {
    "page-one": PageOne,
    "page-two": PageTwo
  },
  data() {
    return {
      component: "page-one"
    }
  },
}
</script>