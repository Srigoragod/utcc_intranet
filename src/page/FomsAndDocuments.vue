<template>
 <MainPage>
  <template #topbar>
    <TopBar></TopBar>
  </template>
 </MainPage>
</template>

<script>
import {ref, defineComponent} from 'vue'

// components
import MainPage from './MainPage.vue';
import TopBar from '../Layout/TopBar/TopBar.vue';
export default defineComponent({
    name:"FormsAndDocuments",
    components: {
      MainPage,
      TopBar
    }

})
</script>

<style>

</style>