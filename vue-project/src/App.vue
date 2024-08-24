<template>
  <app-header v-bind:siteName="siteName" v-on:changeSiteName="updateSiteName($event)"></app-header>

  <app-body></app-body>

  <app-footer></app-footer>

</template>
<script>
import Hearder from './components/header.vue';
import Footer from './components/footer.vue';
import Body from './components/body.vue';
export default {
  components:{
    'app-header':Hearder,
    'app-body':Body,
    'app-footer':Footer,
  },
  data() {
    return {
      siteName:"SaytMaster"
    }
  },
  methods:{
    'updateSiteName':function(siteName){
      this.siteName=siteName;
    }
  }
}
</script>
<style>
  html,body{
    margin: 0;
    padding: 0;
    width: 100%;
  }
</style>
