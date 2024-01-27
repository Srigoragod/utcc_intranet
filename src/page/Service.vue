<template>
  <MainPage>
    <template #topbar>
      <TopBar></TopBar>
    </template>
    <template #content>
      <div class="container mx-auto py-32">
        <div class="content-online-service">
          <el-divider
            data-aos="fade-up"
            class="text-a-gray-64748b mb-4"
            content-position="center"
          >
            <h4 class="text-all-file font-light leading-none py-2">
              Online Service
            </h4>
          </el-divider>
          <br/>
          <div class="grid grid-cols-3 gap-4">
           <ButtonBlueService v-for="(item,index) in itemList[0].items" :key="index" :textButton="item.textName" :url="item.url" :icon="item.icon" :isDisable="item.isDisable"></ButtonBlueService>
          </div>
        </div>
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
import ButtonBlueService from "../components/Button/ButtonBlueService.vue";
//data
import menudata from '../data/menudata.json'

import Footer from "../layout/Footer/Footer.vue";
import ScrollToTopButton from "../components/Button/ScrollToTopButton.vue";
export default defineComponent({
  name: "FormsAndDocuments",
  components: {
    MainPage,
    TopBar,
    Footer,
    ScrollToTopButton,
    ButtonBlueService
  },
  setup(props) {
  const itemList = ref('')
  const jsonData = ref(menudata)
  const initialData =()=>{
    const filteredData = jsonData.value.filter(item => item.url === 'service');
    itemList.value = filteredData

    console.log(JSON.stringify(itemList.value,null,4));

  }
  initialData()
    return{
      itemList
    }
  }
});
</script>

<style lang="scss">
.text-all-file {
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
<style>
.container-test {
  background-color: #f2f2f2;
  padding: 10px;
  border: 2px solid #cccccc;

  margin: 0 auto;
  height: 470px;
  display: flex;
  flex-flow: column wrap; /* Shorthand – you could use ‘flex-direction: column’ and ‘flex-wrap: wrap’ instead */
  justify-content: flex-start;
  align-items: flex-start;
}

/* .item {
  background-color: orange;
  height: 150px;
  width: 31%;
  margin: 1%;
  padding: 10px;
}

.item:nth-child(2) {
  background-color: pink;
  height: 250px;
}

.item:nth-child(3) {
  height: 190px;
}

.item:nth-child(4) {
  background-color: aqua;
  height: 220px;
} */
</style>

