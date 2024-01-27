<template>
  <MainPage>
    <template #topbar>
      <TopBar></TopBar>
    </template>
    <template #content>
      <div class="container mx-auto pb-20">
        <!-- <ShowFile :gridCols="'grid-cols-3'" :topicName="'Forms &Documents'"></ShowFile> -->
        <ShowFlexMasonry :topicName="'Forms &Documents'"></ShowFlexMasonry>
        <ScrollToTopButton></ScrollToTopButton>
      </div>
    </template>
    <template #footer>
      <Footer></Footer>
    </template>
  </MainPage>
</template>

<script>
import { ref, defineComponent, watch } from "vue";
import { useRoute } from "vue-router";
// data
import documentdata from "../data/documentdata.json";
// components
import MainPage from "./MainPage.vue";
import TopBar from "../Layout/TopBar/TopBar.vue";
// import ShowFile from '../Layout/ShowFile.vue';
import ShowFlexMasonry from "../layout/ShowFlexMasonry.vue";
import Footer from "../layout/Footer/Footer.vue";
import ScrollToTopButton from "../components/Button/ScrollToTopButton.vue";
export default defineComponent({
  name: "FormsAndDocuments",
  components: {
    MainPage,
    TopBar,
    // ShowFile,
    ShowFlexMasonry,
    Footer,
    ScrollToTopButton,
  },
  setup() {
    const route = useRoute();
    const activeMenu = ref("");
    const setActiveMenu = () => {
      console.log(JSON.stringify(route,null,4));
      activeMenu.value = route.name;
      console.log("activeMenu ... ", activeMenu.value);
    };

    watch(route, () => {
      console.log("rote ..", route.name);
    });
    setActiveMenu();
  },
});
</script>
