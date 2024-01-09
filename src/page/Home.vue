<template>
  <MainPage>
    <template #topbar>
      <!-- <TopBar2></TopBar2> -->
      <TopBar ></TopBar>
    </template>
    <template #content>
      <div class="container mx-auto pb-20">
        <Slider></Slider>

        <section id="shortcut" :class="pageActive == 'shortcut' ? 'bg-blue-100' : ''">
          <Shortcut id="test" class="my-2"></Shortcut>
        </section>

        <section id="meeting">
          <UniversityMeeting ref="meeting" class="my-2"></UniversityMeeting>
        </section>

        <section id="lastupdate">
          <LastUpdate ref="lastupdate" class="my-2"></LastUpdate>
        </section>

        <section id="news">
          <News ref="news" class="my-2"></News>
        </section>
        <br />
        <section >
          <ShowFile ref="showfile" :items="homeList" class="my-2"></ShowFile>
        </section>

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

// import menudata from "../data/menudata.json";
// import homedata from "../data/homedata.json";

// components
import MainPage from "./MainPage.vue";
import TopBar from "../layout/TopBar/TopBar.vue";
// import TopBar2 from "../layout/TopBar/TopBar2.vue";
import Slider from "../components/Slider.vue";
import Shortcut from "../layout/Shortcut.vue";
import UniversityMeeting from "../layout/UniversityMeeting.vue";
import LastUpdate from "../layout/LastUpdate.vue";
import News from "../layout/News.vue";
import ShowFile from "../layout/ShowFile.vue";
import Footer from "../layout/Footer/Footer.vue";
import ScrollToTopButton from "../components/ScrollToTopButton.vue";
import FloatingActionButton from "../components/FloatingActionButton.vue";

export default defineComponent({
  name: "Home",
  components: {
    MainPage,
    TopBar,
    // TopBar2,
    Slider,
    Shortcut,
    UniversityMeeting,
    LastUpdate,
    News,
    ShowFile,
    Footer,
    ScrollToTopButton,
    FloatingActionButton,
  },
  setup() {
    const route = useRoute()
    const pageActive = route.params.id ? route.params.id :''

    // const menuList = ref(menudata);
    const homeList = ref(null);
    watch(route, () => {
            console.log('route ... ', pageActive);
     })
    // const initialData = () => {
    //   homeList.value = homedata;
    // };

    // initialData();

    return {
      // menuList,
      // homeList,
      pageActive
    };
  },
});
</script>

<style>
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
