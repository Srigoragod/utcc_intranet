<template>
   <MainPage >
     <template #topbar>
        <!-- <TopBar2></TopBar2> -->
        <TopBar :dataList="menuList" ></TopBar>
     </template>
     <template #content>
        <div class="container mx-auto pb-20">
            <Slider></Slider>
            <Shortcut class="my-2"></Shortcut>
            <UniversityMeeting class="my-2"></UniversityMeeting>
            <LastUpdate class="my-2"></LastUpdate>
            <News class="my-2"></News>
            <br/>
            <ShowFile :items="homeList" class="my-2"></ShowFile>
            <ScrollToTopButton ></ScrollToTopButton>
        </div>
     </template>
     <template #footer>
        <Footer :dataList="menuList"></Footer>
     </template>
   </MainPage>
</template>

<script>
import { ref, defineComponent } from "vue";

import menudata from '../data/menudata.json'
import homedata from '../data/homedata.json'

import MainPage from "./MainPage.vue";
import TopBar from "../layout/TopBar/TopBar.vue";
// import TopBar2 from "../layout/TopBar/TopBar2.vue";
import Slider from "../components/Slider.vue";
import Shortcut from "../layout/Shortcut.vue";
import UniversityMeeting from "../layout/UniversityMeeting.vue";
import LastUpdate from '../layout/LastUpdate.vue';
import News from '../layout/News.vue';
import ShowFile from "../layout/ShowFile.vue";
import Footer from "../layout/Footer/Footer.vue";
import ScrollToTopButton from "../components/ScrollToTopButton.vue";


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
    ScrollToTopButton
  },
  setup() {
    const menuList = ref(menudata)
    const homeList = ref(null)

    const initialData = () => {
      homeList.value = homedata
    }

    initialData()

    return{
      menuList,
      homeList
    }
  }


});
</script>

<style >
.text-topic-name {
  background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#0874D9),
      color-stop(100%, #548dd9),
      to(#548dd9)
    );
    background: -webkit-linear-gradient(left, #0874D9, #548dd9 100%, #548dd9 0);
    background: linear-gradient(90deg, #0874D9, #548dd9 100%, #548dd9 0);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
}
</style>
