<template>
  <MainPage >
    <template #topbar>
      <!-- <TopBar  ></TopBar> -->
      <TopBarDaisyUI></TopBarDaisyUI>
    </template>
    <template #content>
      <div class="pb-20">
        <div class="bg-hero">
          <Slider class="container mx-auto "></Slider>
        </div>
          <section id="shortcut" class="container mx-auto" :class="[pageActive == 'shortcut' ? 'bg-blue-100' : '']">
            <Shortcut id="test" ></Shortcut>
          </section>
  
        <section id="meeting" class="container mx-auto">
          <UniversityMeeting ref="meeting" class="my-2"></UniversityMeeting>
        </section>

        <section id="lastupdate" class="container mx-auto">
          <LastUpdate ref="lastupdate" class="my-2"></LastUpdate>
        </section>

        <section id="news" class="container mx-auto">
          <News ref="news" class="my-2"></News>
        </section>

        <section id="show_file" class="container mx-auto my-12" >
          <ShowFile ref="showfile" :items="homeList" class="my-2" :gridCols="'grid-cols-2'"></ShowFile>
        </section>

        <section id="faculty">
          <FacultyAll></FacultyAll>
        </section>

        <!-- <section >
          <ShowFlexMasonry  :topicName="'Forms &Documents'"></ShowFlexMasonry>
        </section> -->


        <ScrollToTopButton></ScrollToTopButton>
      </div>
    </template>
    <template #footer>
      <Footer ></Footer>
    </template>
  </MainPage>
</template>

<script>
import { useRoute } from 'vue-router'
import { ref, defineComponent, watch } from "vue";

// data
// import menudata from "../data/menudata.json";
// import homedata from "../data/homedata.json";
import documentdata from '../data/documentdata.json'

// components
import MainPage from "./MainPage.vue";
// import TopBar from "../layout/TopBar/TopBar.vue";
import TopBarDaisyUI from '../layout/TopBar/TopBarDaisyUI.vue';
import Slider from "../components/SliderWidget/Slider.vue";
import Shortcut from "../layout/Shortcut.vue";
import UniversityMeeting from "../layout/UniversityMeeting.vue";
import LastUpdate from "../layout/LastUpdate.vue";
import News from "../layout/News.vue";
import FacultyAll from '../layout/FacultyAll.vue';
import ShowFile from "../layout/ShowFile.vue";
// import ShowFlexMasonry from '../layout/ShowFlexMasonry.vue';
import Footer from "../layout/Footer/Footer.vue";
import ScrollToTopButton from "../components/Button/ScrollToTopButton.vue";
import FloatingActionButton from "../components/Button/FloatingActionButton.vue";

export default defineComponent({
  name: "Home",
  components: {
    MainPage,
    // TopBar,
    TopBarDaisyUI,
    Slider,
    Shortcut,
    UniversityMeeting,
    LastUpdate,
    News,
    FacultyAll,
    ShowFile,
    Footer,
    ScrollToTopButton,
    FloatingActionButton
    // ShowFlexMasonry
  },
  setup() {
    const route = useRoute()
    const pageActive = route.params.id ? route.params.id :''

    // const menuList = ref(menudata);
    const homeList = ref(null);
    const documentList = ref(null)
    watch(route, () => {
            console.log('route ... ', pageActive);
     })
    const initialData = () => {
      // homeList.value = homedata;
      documentList.value = documentdata
    };

    initialData();

    return {
    // menuList,
      homeList,
      pageActive,
      documentList
    };
  },
});
</script>

<style>
.bg-hero {
    background: url('../assets/image/bg-hero.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 1rem 0;
    width: 100%;
}
.text-topic-name {
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#0874d9),
    color-stop(100%, #548dd9),
    to(#548dd9)
  );
  background: -webkit-linear-gradient(left, #0874d9, #548dd9 100%, #548dd9 0);
  background: linear-gradient(90deg, #0874d9, #548dd9 100%, #548dd9 0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}
</style>
