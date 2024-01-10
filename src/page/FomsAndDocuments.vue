<template>
 <MainPage>
  <template #topbar>
    <TopBar></TopBar>
  </template>
  <template #content>
    <div class="container mx-auto pb-20">
    <ShowFile :gridCols="'grid-cols-3'"></ShowFile>
    <ScrollToTopButton ></ScrollToTopButton>
    </div>
  </template>
  <template #footer>
    <Footer></Footer>
  </template>
 </MainPage>
</template>

<script>
import {ref, defineComponent} from 'vue'

// components
import MainPage from './MainPage.vue';
import TopBar from '../Layout/TopBar/TopBar.vue';
import ShowFile from '../layout/ShowFile.vue';
import Footer from '../layout/Footer/Footer.vue';
import ScrollToTopButton from '../components/ScrollToTopButton.vue';
export default defineComponent({
    name:"FormsAndDocuments",
    components: {
      MainPage,
      TopBar,
      ShowFile,
      Footer,
      ScrollToTopButton
    }

})
</script>

<style>

</style>