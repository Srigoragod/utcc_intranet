<template>
  <div class="mb-4">
    <TextUnderline :text="'Functional Area'" :desc="''"></TextUnderline>
    <div class="flex justify-between items-center mb-4">
      <span class="text-2xl">ประจำปีการศึกษา</span>
      <MenuSortByYear @on-chenge="handleYear"></MenuSortByYear>
    </div>
    <div class="relative text-center" v-if="isLoading">
      <span class="loading loading-dots loading-md text-a-blue-0874D9"></span>
    </div>
    <div v-else>
      <div
            class="is-desktop"
            v-if="fileData && fileData.length > 0"
          >
    <FileList
      v-for="(item, index) in fileData"
      :id="item.id"
      :key="index"
      class="break-inside-avoid first:mt-0"
      :topicName="item.topicName"
      :isAlert="item.isAlert"
      :alertDetail="item.alertDetail"
      :dataList="item.itemList"
      :isHeightFull="item.isFull"
      :isShowTopic="false"
    ></FileList>
    </div>
    <div
            v-else
            class="p-4 text-xl relative text-center rounded-lg bg-no-data text-a-gray-787878"
          >
            No Data
          </div>
    </div>

  </div>
</template>
<script>
import { ref, defineComponent } from "vue";

// data
import function_area_data from "../data/functional_area_data.json"

// component
import TextUnderline from "../components/Text/TextUnderline.vue";
import MenuSortByYear from "../components/Menu/MenuSortByYear.vue";
import FileList from "../components/File/FileList.vue";

export default defineComponent({
  name: "Risk",
  components: {
    TextUnderline,
    MenuSortByYear,
    FileList,
  },
  setup() {
    const isLoading = ref(true);
    const fileData = ref(function_area_data);

    const topicName = ref("งานบริหารความเสี่ยง");
    const year = ref(null);

    const activeName = ref("first");

    const handleYear = (val) => {
      isLoading.value = true;
      setTimeout(async () => {
        fileData.value = await function_area_data.filter((item) => item.id == val);
        isLoading.value = false;
      }, 1000);
    };

    handleYear();

    const handleClick = () => {
      console.log("handleClick .. ", activeName);
    };

    return {
      topicName,
      handleYear,
      fileData,
      isLoading,
      activeName,
      handleClick
    };
  },
});
</script>
<style lang="scss" scoped>
.bg-no-data {
  background: linear-gradient(
    90deg,
    rgba(217, 217, 217, 0.2) 5.41%,
    rgba(239, 245, 249, 0.2) 96.08%
  );
}
</style>
<style lang="css">
.el-tabs__item {
  font-size: 2rem;
  color: #64748b;
}
.el-tabs__item.is-active {
  color: #005BC0;
}
.el-tabs__item:hover {
  color: #0874d9;
}
.el-tabs__active-bar {
  background-color: #005BC0;
}
</style>
