<template>
  <div>
    <TextUnderline :text="'Online Service'" :desc="''"></TextUnderline>

    <div class="container-onlineservice grid grid-cols-6">

      <ButtonPrimaryOutline v-for="(item, index) in itemList" :key="index"        
        :textButton="item.textName"
        @click="clikShortCut(item.url)"
        :url="item.url"
        :typeIcon="item.typeIcon"
        :icon="item.icon"
        :position="item.position"
        :isDisable="item.isDisable"
        :classCustom="item.class"></ButtonPrimaryOutline>
    </div>
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
    ButtonPrimaryOutline
  },
  setup(props) {
    const itemList = ref("");
    const jsonData = ref(menudata);
    const initialData = () => {
      const filteredData = jsonData.value.filter(
        (item) => item.url === "service"
      );
     
      const sortedIndexes = filteredData[0].items.slice().sort().reverse();
   
      itemList.value = sortedIndexes;
    };
    const handleIcon = (icon) => {
      if (icon) {
        return icon;
      } else {
        return "sailboat";
      }
      console.log("icon", icon);
    };
    initialData();
    return {
      itemList,
      handleIcon,
    };
  },
};
</script>

<style lang="scss" scoped>
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
  gap: 2rem;
  padding: 1rem;
}
</style>
