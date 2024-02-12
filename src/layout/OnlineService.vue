<template>
  <div>
    <div class="flex justify-between items-center">
      <TextUnderline :text="'Online Service'" :desc="''"></TextUnderline>
      <a
        class="link link-primary link-seemore"
        @click="clickShowMore(isShowMore)"
      >
        {{ textShow }}</a
      >
    </div>

    <div class="container-onlineservice grid grid-cols-12">
      <ButtonPrimaryOutline
        v-for="(item, index) in itemList"
        :key="index"
        :textButton="item.textName"
        @click="clikShortCut(item.url)"
        :url="item.url"
        :typeIcon="item.typeIcon"
        :icon="item.icon"
        :position="item.position"
        :isDisable="item.isDisable"
        :classCustom="item.class"
      ></ButtonPrimaryOutline>
    </div>
  </div>

  <div class="text-center block lg:hidden">
    <a
      class="link link-primary link-seemore"
      @click="clickShowMore(isShowMore)"
    >
      {{ textShow }}</a
    >
  </div>
</template>

<script>
import { ref } from "vue";
import TextUnderline from "../components/Text/TextUnderline.vue";
import ButtonService from "../components/Button/ButtonService.vue";
import ButtonPrimaryOutline from "../components/Button/ButtonPrimaryOutline.vue";

//data
import menudata from "../data/menudata.json";

export default {
  name: "OnlineService",
  components: {
    ButtonService,
    TextUnderline,
    ButtonPrimaryOutline,
  },
  setup(props) {
    const itemList = ref("");
    const jsonData = ref(menudata);
    const isShowMore = ref(false);
    const textShow = ref("View More");
    const filteredData = ref(null);
    const sortedData = ref(null);

    const initialData = () => {
      filteredData.value = jsonData.value.filter(
        (item) => item.url === "service"
      );
      let limitationList = 12;
      //   const sortedIndexes = filteredData[0].items.slice().sort().reverse();
      sortedData.value = filteredData.value[0].items.slice(0, limitationList);
      itemList.value = sortedData.value;
    };
    const handleIcon = (icon) => {
      if (icon) {
        return icon;
      } else {
        return "sailboat";
      }
    };
    const clickShowMore = (val) => {
      if (!val) {
        itemList.value = filteredData.value[0].items;
        isShowMore.value = true;
        textShow.value = "View More";
      } else {
        itemList.value = sortedData.value;
        isShowMore.value = false;
        textShow.value = "View Less";
      }
    };
    initialData();
    return {
      itemList,
      handleIcon,
      textShow,
      clickShowMore,
      isShowMore,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../style/base.scss";
.link-seemore {
  font-size: 1.25rem;
  @include mobile {
    display: none;
  }
}
svg {
  //   border: 1px solid #005bc0;
  background-color: #e5f1fb;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 1.25rem;
  font-size: 1.75rem;
}
.container-onlineservice {
  gap: 1rem;
  padding: 1rem;
  @include mobile {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @include tablet {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
}
</style>
