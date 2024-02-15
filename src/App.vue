<template>
  <div class="font-main">
    <RouterView :key="route.fullPath"/>
 
  </div>
</template>

<script>
import { RouterView, useRoute } from 'vue-router'
export default {
  components:{
    RouterView
  },
  setup(){
    const route = useRoute()

    return{
      route
    }
  }
};
</script>

<style lang="scss">
@import "./style/main.scss";
</style>
