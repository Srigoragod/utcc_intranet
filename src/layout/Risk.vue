<template>
  <div class="mb-4">
    <div class="flex justify-between items-center">
      <div>
        <TextUnderline :text="topicName" :desc="''" />
      </div>
      <div>
        <MenuSortByYear @on-chenge="handleYear"></MenuSortByYear>
      </div>
    </div>
  </div>
  <div class="relative text-center" v-if="isLoading">
    <span class="loading loading-dots loading-md text-a-blue-0874D9"></span>
  </div>
  <div v-else data-aos="fade-up" >
    <div class="is-desktop" v-if="fileData && fileData.length > 0">
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
      :isNotHome="isNotHome"
      :isShowTopic="true"
    ></FileList>
  </div>
  <div
    v-else
    class="p-4 text-xl relative text-center rounded-lg bg-no-data text-a-gray-787878"
  >
    No Data
  </div>
  </div>

</template>
<script>
import { ref, defineComponent } from "vue";

// data
import risk_data from "../data/risk_data.json";

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
    const fileData = ref(risk_data);
    const topicName = ref("งานบริหารความเสี่ยง");
    const year = ref(null);

    const handleYear = (val) => {
       isLoading.value = true;
      setTimeout(async () => {
        fileData.value = await risk_data.filter((item) => item.id == val);
        isLoading.value = false;
      }, 1500);
    };

    handleYear();

    return {
      topicName,
      handleYear,
      fileData,
      isLoading
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
