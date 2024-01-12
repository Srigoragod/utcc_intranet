<template>
  <MainPage>
    <template #topbar>
      <TopBar></TopBar>
    </template>
    <template #content>
      <div class="container mx-auto pb-20">
        <ShowFlexMasonry :topicName="'Department'"></ShowFlexMasonry>
        <ScrollToTopButton></ScrollToTopButton>
      </div>
    </template>
    <template #footer>
      <Footer></Footer>
    </template>
  </MainPage>
</template>

<script>
import { ref, defineComponent } from "vue";

// components
import MainPage from "./MainPage.vue";
import TopBar from "../Layout/TopBar/TopBar.vue";
import ShowFlexMasonry from "../layout/ShowFlexMasonry.vue";
import Footer from "../layout/Footer/Footer.vue";
import ScrollToTopButton from "../components/ScrollToTopButton.vue";
export default defineComponent({
  name: "FormsAndDocuments",
  components: {
    MainPage,
    TopBar,
    ShowFlexMasonry,
    Footer,
    ScrollToTopButton
  },
});
</script>
