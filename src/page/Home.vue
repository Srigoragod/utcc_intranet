DateMeeting
<template>
  <MainPage>
    <template #topbar>
      <!-- <TopBar  ></TopBar> -->
      <TopBarDaisyUI></TopBarDaisyUI>
    </template>
    <template #content>
      <div class="pb-20">
        <div class="bg-hero">
          <Slider class="container mx-auto"></Slider>
        </div>

        <section id="meeting" data-aos="fade-up">
          <UniversityMeeting
            ref="meeting"
            class="container mx-auto"
          ></UniversityMeeting>
        </section>

        <section
          id="shortcut"
          class="container mx-auto grid grid-cols-2 gap-4 py-10"
          :class="[pageActive == 'shortcut' ? 'bg-blue-100' : '']"
        >
          <Shortcut data-aos="fade-right"></Shortcut>
          <LastUpdate id="lastupdate" data-aos="fade-left"></LastUpdate>
        </section>

        <section id="onlineservice" class="container mx-auto my-10" data-aos="fade-up">
          <OnlineService ref="onlineservice" class="my-2" ></OnlineService>
        </section>

        <section id="news" class="container mx-auto mb-4 lg:mb-24"  data-aos="fade-up">
          <News ref="news"></News>
        </section>

        <section id="show_file" class="container mx-auto my-12">
          <ShowFile
            ref="showfile"
            :items="homeList"
            :gridCols="'grid-cols-2'"
          ></ShowFile>

          <ShowFlexMasonry
            :topicName="''"
            :dataName="'home'"
            :isShow="false"
            :items="homeFlexMasonry"

          ></ShowFlexMasonry>
        </section>

        <section class="container mx-auto py-4 lg:py-20">
          <ShowFlexMasonry
            :topicName="'Forms &Document'"
            :dataName="'formdocument'"
          ></ShowFlexMasonry>
        </section>

        <section id="faculty">
          <FacultyAll></FacultyAll>
        </section>

        <section class="container mx-auto py-4 lg:py-20">
          <ShowFlexMasonry
            :topicName="'Department'"
            :dataName="'department'"
          ></ShowFlexMasonry>
        </section>

        <section class="container mx-auto px-0 sm:px-4 py-10 grid grid-cols-1 lg:grid-cols-2  gap-4"  >

          <Risk id="risk"></Risk>
          <Budget id="budget"></Budget>
        </section>

        <!-- <section class="container mx-auto py-10" >

        </section> -->

        <section class="container mx-auto py-10">
          <FunctionArea></FunctionArea>
        </section>

        <ScrollToTopButton></ScrollToTopButton>
      </div>
    </template>
    <template #footer>
      <MenuMobile></MenuMobile>
      <Footer id="footer"></Footer>
    </template>
  </MainPage>
</template>

<script>
import { useRoute } from "vue-router";
import { ref, defineComponent } from "vue";

// data
import homedata from "../data/homedata.json";

// components
import MainPage from "./MainPage.vue";
// import TopBar from "../layout/TopBar/TopBar.vue";
import TopBarDaisyUI from "../layout/TopBar/TopBarDaisyUI.vue";
import Slider from "../components/SliderWidget/Slider.vue";
import Shortcut from "../layout/Shortcut.vue";
import UniversityMeeting from "../layout/UniversityMeeting.vue";
import LastUpdate from "../layout/LastUpdate.vue";
import News from "../layout/News.vue";
import FacultyAll from "../layout/FacultyAll.vue";
import ShowFile from "../layout/ShowFile.vue";
// import ShowFlexMasonry from '../layout/ShowFlexMasonry.vue';
import Footer from "../layout/Footer/Footer.vue";
import ScrollToTopButton from "../components/Button/ScrollToTopButton.vue";
import FloatingActionButton from "../components/Button/FloatingActionButton.vue";
import ShowFlexMasonry from "../layout/ShowFlexMasonry.vue";
// import DividerRisk from '../layout/DividerRisk.vue';
import MenuMobile from "../components/Menu/MenuMobile.vue";
import OnlineService from "../layout/OnlineService.vue";
import Risk from "../layout/Risk.vue";
import Budget from "../layout/Budget.vue";
import FunctionArea from "../layout/FunctionArea.vue"

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
    FloatingActionButton,
    ShowFlexMasonry,
    // DividerRisk,
    MenuMobile,
    OnlineService,
    Risk,
    Budget,
    FunctionArea
  },
  setup() {
    const route = useRoute();
    const pageActive = route.params.id ? route.params.id : "";

    const homeList = ref(null);
    const homeFlexMasonry = ref(null);
    const documentList = ref(null);
    const initialData = () => {
      documentList.value = homedata;
      homeFlexMasonry.value = filteredShowColumn();

    };

    const filteredShowColumn = ()=> {
      const filterOnlineService =  homedata.filter(
        (item) => item.showColumn != "col-span-2"
      );
      return filterOnlineService
    }

    initialData();

    return {
      homeList,
      pageActive,
      documentList,
      homeFlexMasonry
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../style/base.scss";
#shortcut {
  @include mobile {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

#footer {
  @include mini-mobile {
    display: none;
  }

  @include mobile {
    display: none;
  }

  @include tablet {
    display: none;
  }
}

.bg-hero {
  background: url("../assets/image/bg-hero.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 1rem 0;
  width: 100%;
}

#meeting {
  padding: 2rem 0;
}
</style>
